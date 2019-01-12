import db from "../database";

//db migrations code refactored from https://github.com/helpybruce/CRUD_blog_postgress_ES6_API
const meetupTable = `
DROP TABLE IF EXISTS meetups CASCADE;
CREATE TABLE IF NOT EXISTS meetups(
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  location TEXT NOT NULL,
  topic TEXT NOT NULL,
  tags TEXT NOT NULL,
  user_id INTEGER NOT NULL REFERENCES users (id) ON DELETE CASCADE,
  created_at TIMESTAMP
);`;
const questionTable = `
DROP TABLE IF EXISTS questions CASCADE;
CREATE TABLE IF NOT EXISTS questions(
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  body TEXT NOT NULL,
  upvotes BOOLEAN NOT NULL DEFAULT FALSE, 
  downvotes BOOLEAN NOT NULL DEFAULT FALSE, 
  user_id INTEGER NOT NULL REFERENCES users (id) ON DELETE CASCADE,
  created_at TIMESTAMP
);`;
const usersTable = `
DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE IF NOT EXISTS users(
  id SERIAL PRIMARY KEY, 
  first_name TEXT NOT NULL, 
  last_name TEXT NOT NULL, 
  location TEXT NOT NULL, 
  email TEXT NOT NULL UNIQUE, 
  password TEXT NOT NULL, 
  is_admin BOOLEAN NOT NULL DEFAULT FALSE, 
  created_at TIMESTAMP
);`;

db.createTable(meetupTable)
    .then(res =>  console.log('meetups created'));
        db.createTable(questionTable)
        .then(res => console.log('questions created')
        );
          db.createTable(usersTable)
          .then(res =>  console.log('users created'))
          .catch(err => err)
    .catch(err => err)
.catch(err => err);
