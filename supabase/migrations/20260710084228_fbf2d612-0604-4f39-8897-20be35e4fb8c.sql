
ALTER TABLE public.leads
  ADD COLUMN IF NOT EXISTS activite text,
  ADD COLUMN IF NOT EXISTS reponses jsonb,
  ADD COLUMN IF NOT EXISTS score integer,
  ADD COLUMN IF NOT EXISTS palier text,
  ADD COLUMN IF NOT EXISTS fourchette_min integer,
  ADD COLUMN IF NOT EXISTS fourchette_max integer,
  ADD COLUMN IF NOT EXISTS delai text,
  ADD COLUMN IF NOT EXISTS cdc_markdown text,
  ADD COLUMN IF NOT EXISTS utm_source text,
  ADD COLUMN IF NOT EXISTS utm_medium text,
  ADD COLUMN IF NOT EXISTS utm_campaign text,
  ADD COLUMN IF NOT EXISTS utm_term text,
  ADD COLUMN IF NOT EXISTS consentement boolean;
