
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "visit" (
	"id" SERIAL PRIMARY KEY,
	"date" VARCHAR (20),
	"user_id" INT REFERENCES "user"
);

CREATE TABLE "medication" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (40),
    "date" VARCHAR (20),
    "notes" text,
    "user_id" INT REFERENCES "user",
    "visit_id" INT REFERENCES "visit"
);

CREATE TABLE "procedure" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (40),
    "date" VARCHAR (20),
    "notes" text,
    "user_id" INT REFERENCES "user",
    "visit_id" INT REFERENCES "visit"
);

CREATE TABLE "scan" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (40),
    "date" VARCHAR (20),
    "notes" text,
    "user_id" INT REFERENCES "user",
    "visit_id" INT REFERENCES "visit"
);