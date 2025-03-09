SET client_encoding TO 'UTF8'; -- Encodage 

BEGIN; -- Début de la transaction

-- Suppression des tables existantes avant re-création
DROP TABLE IF EXISTS  "images", "users", projets CASCADE;

CREATE TABLE projects (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  url VARCHAR(255),
  creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  user_id INTEGER,
  image VARCHAR(255),  -- Add here the image column which contains the path or URL of the image

  FOREIGN KEY (user_id) REFERENCES users(id)  -- The foreign key pointing to the users table
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,  -- Remember to hash the password for security
  name VARCHAR(255),
  creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

COMMIT; ²&
