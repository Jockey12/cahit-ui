CREATE TABLE settings (
  id SERIAL PRIMARY KEY,
  username TEXT NOT NULL DEFAULT 'cahit',
  hostname TEXT,
  database_name TEXT NOT NULL DEFAULT 'cahit_llm',
  password TEXT,
  port INTEGER NOT NULL DEFAULT 5432,
);

CREATE TABLE conversations (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL DEFAULT 'New Conversation',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE messages (
  id SERIAL PRIMARY KEY,
  conversation_id INTEGER NOT NULL REFERENCES conversations(id) ON DELETE CASCADE,
  role TEXT NOT NULL CHECK (role IN ('user', 'assistant')),
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
