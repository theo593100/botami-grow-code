
-- 1. Create admin_users table
CREATE TABLE IF NOT EXISTS public.admin_users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;

-- 2. Seed admin emails
INSERT INTO public.admin_users (email) VALUES 
  ('theo@botami-agency.com'),
  ('elias@botami-agency.com')
ON CONFLICT (email) DO NOTHING;

-- 3. Function to check admin email (security definer, bypasses RLS)
CREATE OR REPLACE FUNCTION public.is_admin_email(check_email text)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (SELECT 1 FROM public.admin_users WHERE email = lower(check_email))
$$;

-- 4. RLS on admin_users
CREATE POLICY "Admins can view admin_users" ON public.admin_users
FOR SELECT TO authenticated
USING (public.is_admin_email(auth.jwt() ->> 'email'));

-- 5. Add CRM columns to leads
ALTER TABLE public.leads ADD COLUMN IF NOT EXISTS statut text DEFAULT 'nouveau';
ALTER TABLE public.leads ADD COLUMN IF NOT EXISTS prochaine_action date;
ALTER TABLE public.leads ADD COLUMN IF NOT EXISTS notes text;
ALTER TABLE public.leads ADD COLUMN IF NOT EXISTS message text;
ALTER TABLE public.leads ADD COLUMN IF NOT EXISTS updated_at timestamptz DEFAULT now();
ALTER TABLE public.leads ADD COLUMN IF NOT EXISTS updated_by text;

-- 6. Trigger for auto-updating updated_at and updated_by
CREATE OR REPLACE FUNCTION public.update_lead_on_change()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  NEW.updated_by = coalesce(auth.jwt() ->> 'email', NEW.updated_by);
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS update_lead_on_change ON public.leads;
CREATE TRIGGER update_lead_on_change
BEFORE UPDATE ON public.leads
FOR EACH ROW EXECUTE FUNCTION public.update_lead_on_change();

-- 7. Update RLS on leads: replace has_role-based policies with is_admin_email
DROP POLICY IF EXISTS "Admins can read leads" ON public.leads;
DROP POLICY IF EXISTS "Admins can delete leads" ON public.leads;

CREATE POLICY "Admin users can read leads" ON public.leads
FOR SELECT TO authenticated
USING (public.is_admin_email(auth.jwt() ->> 'email'));

CREATE POLICY "Admin users can update leads" ON public.leads
FOR UPDATE TO authenticated
USING (public.is_admin_email(auth.jwt() ->> 'email'))
WITH CHECK (public.is_admin_email(auth.jwt() ->> 'email'));
