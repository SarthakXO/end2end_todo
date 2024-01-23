const express = require("express");
import { createTodo, updateTodo } from "./types";
const app = express();

const port = 2424;

app.use(express.json());

app.get("/todo", (req, res) => {});

app.post("/todo", (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload) {
    res.status(411).json({
      message: "you sent the wrong inputs",
    });
    return;
  }
});

app.put("/completed", (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if (!parsedPayload) {
    res.status(411).json({
      message: "you sent the wrong inputs",
    });
    return;
  }
});

app.listen(port);
