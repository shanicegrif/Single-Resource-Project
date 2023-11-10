DROP DATABASE IF EXISTS characters_dev;

CREATE DATABASE characters_dev;

\c characters_dev;

CREATE TABLE characters (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    bounty BIGINT NOT NULL,
    crew TEXT,
    poster_image TEXT,
    has_power BOOLEAN
);