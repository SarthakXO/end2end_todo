const express = require("express");
import { createTodo, updateTodo } from "./types";
const app = express();

const port = 2424;

app.use(express.json());

app.get("/todo", (req, res) => {});

app.post("/todo", (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
});

app.put("/completed", (req, res) => {
  const id = req.body.id;
});

app.listen(port);
