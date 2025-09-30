const express = require("express");
const router = express.Router();
const todosController = require("../controllers/todos.controller");
const { validateCreateTodo, validateUpdateTodo, validateTodoId } = require("../middlewares/todos.middlewares");

router.get("/", todosController.read);
router.post("/", validateCreateTodo, todosController.create);
router.put("/:id", validateUpdateTodo, todosController.update);
router.delete("/:id", validateTodoId, todosController.delete);

module.exports = router;