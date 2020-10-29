"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const {
  getClientHandler,
  getClientByIdHandler,
  addClientHandler,
  deleteClientHandler,
} = require("./handlers/clientHandlers");
//
const {
  getWordByIdHandler,
  getRandomWordHandler,
  letterGuessHandler,
} = require("./handlers/hangmanHandlers");
//
express()
  .use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })
  .use(morgan("tiny"))
  .use(express.static("public"))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))

  //endpoint that accesses all clients
  .get("/clients", getClientHandler)
  //endpoint that accesses one client based on the id
  .get("/clients/:id", getClientByIdHandler)
  //endpoint that adds a client
  .post("/client", addClientHandler)
  //endpoint that deletes a client
  .delete("/client/:id", deleteClientHandler)
  //endpoint that accesses one word object based on the id
  .get("/hangman/word/:id", getWordByIdHandler)
  //endpoint that return the id and lettercount of a random word
  .get("/hangman/word", getRandomWordHandler)
  //endpoint that returns array of booleans corresponding to letter guessed
  .get("/hangman/word/:id/:letter", letterGuessHandler)

  .listen(8000, () => console.log(`Listening on port 8000`));
