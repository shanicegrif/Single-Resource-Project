const express = require("express");
const {
  getAllCharacters,
  getOneCharacter,
  createCharacter,
  deleteCharacter,
  updateCharacter,
} = require("../queries/characters.js");
const {checkBoolean, checkName, checkBounty} = require("../validations/checkCharacters.js")
const characters = express.Router();

characters.get("/", async (req, res) => {
    const allCharaters = await getAllCharacters();
    if(allCharaters[0]) {
        res.status(200).json(allCharaters)
    } else {
        res.status(500).json({error: "Something went wrong!"})
    }
})

characters.get("/:id", async (req, res) =>{
    const {id} = req.params;
    const oneCharacter = await getOneCharacter(id);
    if(oneCharacter) {
        res.status(200).json(oneCharacter);
    } else {
        res.status(404).json({error: "No character at that id!"})
    }
})

characters.post("/", checkName, checkBoolean, checkBounty, async (req, res) => {
    try {
        const createdCharacter = await createCharacter(req.body);
        res.status(201).json(createdCharacter);
    } catch (error) {
        res.status(400).json({error: "There is something wrong here!"})
    }
})

characters.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deletedCharacter = await deleteCharacter(id);
        if(deletedCharacter) {
            res.status(200).json(deletedCharacter);
        } else {
            res.status(404).json({error: "No character at that id!"})
        }
    } catch (error) {
        res.status(400).json({error: "Wrong!!"})
    }
})

characters.put("/:id", async(req, res) => {
    const { id } = req.params;
    const updatedCharacter = await updateCharacter(id, req.body);
    if(updatedCharacter.id) {
        res.status(200).json(updatedCharacter);
    } else (
        res.status(404).json("No character with that ID.")
    )
})

module.exports = characters;