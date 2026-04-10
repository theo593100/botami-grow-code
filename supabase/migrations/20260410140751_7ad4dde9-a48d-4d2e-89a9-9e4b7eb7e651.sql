-- 1. Give admin role to current user
INSERT INTO public.user_roles (user_id, role)
VALUES ('9165e61b-7c8d-46c3-8d49-1a53c3a60b61', 'admin')
ON CONFLICT (user_id, role) DO NOTHING;

-- 2. Give admin role to existing user too
INSERT INTO public.user_roles (user_id, role)
VALUES ('72da8770-888f-4d62-800f-f7abcc201ce1', 'admin')
ON CONFLICT (user_id, role) DO NOTHING;

-- 3. Insert missing landing pages
INSERT INTO public.landing_pages (title, slug, route, meta_title, is_active) VALUES
  ('Google Ads — Application mobile', 'google-application-mobile', '/lp/google/application-mobile', 'Application mobile sur mesure | Botami Software', true),
  ('Google Ads — Agence dev web', 'google-agence-dev-web', '/lp/google/agence-dev-web', 'Agence développement web sur mesure | Botami Software', true),
  ('Google Ads — Logiciel sur mesure', 'google-logiciel-sur-mesure', '/lp/google/logiciel-sur-mesure', 'Logiciel sur mesure pour entreprise | Botami Software', true),
  ('Google Ads — Agence dev application', 'google-agence-dev-application', '/lp/google/agence-dev-application', 'Agence développement application | Botami Software', true),
  ('Google Ads — Application sur mesure', 'google-application-sur-mesure', '/lp/google/application-sur-mesure', 'Application sur mesure | Botami Software', true),
  ('Google Ads — Développement logiciel', 'google-developpement-logiciel', '/lp/google/developpement-logiciel', 'Développement logiciel sur mesure | Botami Software', true),
  ('Google Ads — Application web sur mesure', 'google-application-web-sur-mesure', '/lp/google/application-web-sur-mesure', 'Application web sur mesure | Botami Software', true),
  ('Google Ads — Développement application', 'google-developpement-application', '/lp/google/developpement-application', 'Combien coûte développer une application ? | Botami Software', true)
ON CONFLICT DO NOTHING;

-- 4. Create event tracking table
CREATE TABLE IF NOT EXISTS public.landing_page_events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  route text NOT NULL,
  event_type text NOT NULL CHECK (event_type IN ('page_view', 'cta_click')),
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.landing_page_events ENABLE ROW LEVEL SECURITY;

-- Anyone can insert events (anonymous tracking)
CREATE POLICY "Anyone can insert events"
  ON public.landing_page_events FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Only admins can read events
CREATE POLICY "Admins can read events"
  ON public.landing_page_events FOR SELECT
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));