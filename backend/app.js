const express = require("express");
import { todo } from "./db";
import { createTodo, updateTodo } from "./types";

const app = express();

const port = 2424;

app.use(express.json());

//GET ALL TODOS

app.get("/todo", async (req, res) => {
  const todos = await todo.find({});

  res.json({ todos });
});

//CREATE A TODO
app.post("/todo", async (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload) {
    res.status(411).json({
      message: "you sent the wrong inputs",
    });
    return;
  }

  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });

  res.json({
    message: "Todo created",
  });
});

app.put("/completed", async (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if (!parsedPayload) {
    res.status(411).json({
      message: "you sent the wrong inputs",
    });
    return;
  }

  await todo.update(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );
  res.json({
    message: "Todo marked as done",
  });
});

app.listen(port);
