SET client_encoding TO 'UTF8'; -- Encodage 

BEGIN; -- Début de la transaction

-- Suppression des tables existantes avant re-création
DROP TABLE IF EXISTS "users", projets CASCADE;

CREATE TABLE projets (
  id SERIAL PRIMARY KEY,
  titre VARCHAR(255) NOT NULL,
  description TEXT,
  url VARCHAR(255),
  date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE "users" (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  mot_de_passe VARCHAR(255) NOT NULL,  -- Pense à sécuriser le mot de passe avec du hashing
  nom VARCHAR(255),
  date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

COMMIT;
