#! /usr/bin/env node

console.log(
  'This script populates some test data to your database. Specified database as argument - e.g.: node populatedb "mongodb+srv://cooluser:coolpassword@cluster0.lz91hw2.mongodb.net/local_library?retryWrites=true&w=majority"'
);

// Get arguments passed on command line
const userArgs = process.argv.slice(2);

const Rock = require("./models/rock");

const rocks = [];

const mongoose = require("mongoose");
mongoose.set("strictQuery", false); // Prepare for Mongoose 7

const mongoDB = userArgs[0];

main().catch((err) => console.log(err));

async function main() {
  console.log("Debug: About to connect");
  await mongoose.connect(mongoDB);
  console.log("Debug: Should be connected?");
  await createRocks();
  console.log("Debug: Closing mongoose");
  mongoose.connection.close();
}

async function rockCreate(user_name, gender) {
  const rock = new Rock({user_name: user_name, gender: gender});
  await rock.save();
  rocks.push(rock);
  console.log(`Added rock: ${user_name}`);
}

async function createRocks() {
  console.log("Adding rocks");
  await Promise.all([
    rockCreate("rock1", 'Female'),
    rockCreate("rock2", 'Male'),
    rockCreate("favRock", 'NonBinary')
  ])
}
