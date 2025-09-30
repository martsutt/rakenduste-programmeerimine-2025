const { body, param } = require('express-validator');

const validateCreateTodo = [
    body('title').notEmpty().isLength({ min: 1, max: 255 }).trim().escape()
];

const validateUpdateTodo = [
    param('id').isUUID(),
    body('title').notEmpty().isLength({ min: 1, max: 255 }).trim().escape()
];

const validateTodoId = [
    param('id').isUUID()
];

module.exports = { validateCreateTodo, validateUpdateTodo, validateTodoId };