CREATE TABLE highscore (
  id SERIAL PRIMARY KEY,
  pet_name VARCHAR(255) NOT NULL,
  survival_time INTERVAL NOT NULL
);