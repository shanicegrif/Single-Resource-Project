const db = require("../db/dbConfig.js");

const getAllCharacters = async () => {
  try {
    const allCharaters = await db.any("SELECT * FROM characters");
    return allCharaters;
  } catch (error) {
    return error;
  }
};

const getOneCharacter = async (id) => {
  try {
    const oneCharacter = await db.one(
      "SELECT * FROM characters WHERE id=$1",
      id
    );
    return oneCharacter;
  } catch (error) {
    return error;
  }
};

const createCharacter = async (character) => {
  try {
    const { name, bounty, crew, has_power } = character;
    const createdCharacter = await db.one(
      "INSERT INTO characters (name, bounty, crew, has_power) VALUES ($1, $2, $3, $4) RETURNING *",
      [name, bounty, crew, has_power]
    );
    return createdCharacter;
  } catch (error) {
    return error;
  }
};

const deleteCharacter = async (id) => {
  try {
    const deletedCharacter = await db.one(
      "DELETE FROM characters WHERE id=$1 RETURNING *",
      id
    );
    return deletedCharacter;
  } catch (error) {
    return error;
  }
};

const updateCharacter = async (id, character) => {
  try {
    const { name, bounty, crew, has_power } = character;
    const updatedCharacter = await db.one(
      "UPDATE characters SET name=$1, bounty=$2, crew=$3, has_power=$4 WHERE id=$5 RETURNING *",
      [name, bounty, crew, has_power, id]
    );
    return updatedCharacter;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllCharacters,
  getOneCharacter,
  createCharacter,
  deleteCharacter,
  updateCharacter,
};
