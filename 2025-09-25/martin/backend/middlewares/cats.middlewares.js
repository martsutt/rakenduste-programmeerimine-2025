const { body, param } = require('express-validator');

const catsRouteMiddleware = (req, res, next) => {
    console.log("Time: ", Date.now());
    next();
};

const catsGetRouteMiddleware = (req, res, next) => {
    console.log("GET middleware");
    next();
};

const validateCreateCat = [
    body('name')
        .notEmpty()
        .withMessage('Name is required')
        .isLength({ min: 2, max: 50 })
        .withMessage('Name must be between 2 and 50 characters')
        .trim()
        .escape()
];

const validateUpdateCat = [
    param('id')
        .isUUID()
        .withMessage('Invalid cat ID'),
    body('name')
        .notEmpty()
        .withMessage('Name is required')
        .isLength({ min: 2, max: 50 })
        .withMessage('Name must be between 2 and 50 characters')
        .trim()
        .escape()
];

const validateCatId = [ // validateCatId on deletemise testimiseks
    param('id')
        .isUUID()
        .withMessage('Invalid cat ID')
];

module.exports = {
    catsRouteMiddleware,
    catsGetRouteMiddleware,
    validateCreateCat,
    validateUpdateCat,
    validateCatId
};