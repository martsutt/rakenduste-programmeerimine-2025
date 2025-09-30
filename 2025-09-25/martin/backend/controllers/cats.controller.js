const { validationResult } = require('express-validator');
const { v4: uuid } = require('uuid');

const cats = [
    {
        id: "7d613b93-fa3e-4ef3-a9d2-e09e5ca6e4e6",
        name: "Meow",
        createdAt: 1727098800585,
        updatedAt: null,
        deleted: false,
    },
    {
        id: "2dc9ce08-d345-4fed-8560-4c6b66fb0836",
        name: "Kitty",
        createdAt: 1727098952739,
        updatedAt: null,
        deleted: false,
    },
];

exports.create = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { name } = req.body;
    const newCat = {
        id: uuid(),
        name: name.trim(),
        createdAt: Date.now(),
        updatedAt: null,
        deleted: false,
    };
    cats.push(newCat);
    res.status(201).json(newCat);
};

exports.read = (req, res) => {
    const activeCats = cats.filter(cat => !cat.deleted);
    res.json(activeCats);
};

exports.update = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { id } = req.params;
    const { name } = req.body;

    const catIndex = cats.findIndex(cat => cat.id === id && !cat.deleted);
    if (catIndex === -1) {
        return res.status(404).json({ error: 'Cat not found' });
    }

    cats[catIndex] = {
        ...cats[catIndex],
        name: name.trim(),
        updatedAt: Date.now()
    };

    res.json(cats[catIndex]);
};

exports.delete = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { id } = req.params;

    const catIndex = cats.findIndex(cat => cat.id === id && !cat.deleted);
    if (catIndex === -1) {
        return res.status(404).json({ error: 'Cat not found' });
    }

    cats[catIndex].deleted = true;
    cats[catIndex].updatedAt = Date.now();

    res.status(204).send();
};