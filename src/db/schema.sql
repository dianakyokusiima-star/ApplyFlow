CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  full_name TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  plan TEXT NOT NULL DEFAULT 'free',
  applications_remaining INTEGER NOT NULL DEFAULT 5
);

CREATE TABLE IF NOT EXISTS resumes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  file_url TEXT,
  parsed_data JSONB NOT NULL DEFAULT '{}'::jsonb,
  is_primary BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS applications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  company_name TEXT NOT NULL,
  role_title TEXT NOT NULL,
  job_url TEXT,
  status TEXT NOT NULL DEFAULT 'saved' CHECK (status IN ('saved', 'applied', 'interview', 'offer', 'rejected', 'archived')),
  applied_at TIMESTAMPTZ,
  notes TEXT,
  cover_letter TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS coaches (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  bio TEXT NOT NULL,
  session_price INTEGER NOT NULL CHECK (session_price >= 0),
  specialties TEXT[] NOT NULL DEFAULT '{}',
  avatar_url TEXT
);

CREATE TABLE IF NOT EXISTS coaching_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  coach_id UUID NOT NULL REFERENCES coaches(id) ON DELETE RESTRICT,
  application_id UUID REFERENCES applications(id) ON DELETE SET NULL,
  scheduled_at TIMESTAMPTZ NOT NULL,
  status TEXT NOT NULL DEFAULT 'scheduled',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- CREATE TABLE IF NOT EXISTS leaves an existing coaches table untouched, so the
-- unique key on name also needs an idempotent add for databases created before it.
CREATE UNIQUE INDEX IF NOT EXISTS coaches_name_key ON coaches(name);

CREATE INDEX IF NOT EXISTS resumes_user_id_idx ON resumes(user_id);
CREATE INDEX IF NOT EXISTS applications_user_id_idx ON applications(user_id);
CREATE INDEX IF NOT EXISTS coaching_sessions_user_id_idx ON coaching_sessions(user_id);
CREATE INDEX IF NOT EXISTS coaching_sessions_coach_id_idx ON coaching_sessions(coach_id);
