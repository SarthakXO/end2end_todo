const mongoose = require("mongoose");

mongoose.connect(
  `mongodb+srv://culsarthak:modiji1234@cohortstudy.2dwg4mq.mongodb.net/todos`
);

const TodoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", TodoSchema);

module.exports = {
  todo,
};
