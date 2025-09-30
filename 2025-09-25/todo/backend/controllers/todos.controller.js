const { validationResult } = require('express-validator');
const { v4: uuid } = require('uuid');

const todos = [
    {
        id: "123456789",
        title: "First TODO",
        createdAt: 1727098800721,
        updatedAt: null,
        deleted: false,
    },
    {
        id: "987654321",
        title: "Second TODO",
        createdAt: 1727098952831,
        updatedAt: null,
        deleted: false,
    }
];

exports.create = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    const { title } = req.body;
    const newTodo = { id: uuid(), title, createdAt: Date.now(), updatedAt: null, deleted: false };
    todos.push(newTodo);
    res.status(201).json(newTodo);
};

exports.read = (req, res) => {
    const activeTodos = todos.filter(todo => !todo.deleted);
    res.json(activeTodos);
};

exports.update = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    const { id } = req.params;
    const { title } = req.body;
    const todoIndex = todos.findIndex(todo => todo.id === id && !todo.deleted);

    if (todoIndex === -1) return res.status(404).json({ error: 'Todo not found' });

    todos[todoIndex].title = title;
    todos[todoIndex].updatedAt = Date.now();
    res.json(todos[todoIndex]);
};

exports.delete = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    const { id } = req.params;
    const todoIndex = todos.findIndex(todo => todo.id === id && !todo.deleted);

    if (todoIndex === -1) return res.status(404).json({ error: 'Todo not found' });

    todos[todoIndex].deleted = true;
    todos[todoIndex].updatedAt = Date.now();
    res.status(204).send();
};