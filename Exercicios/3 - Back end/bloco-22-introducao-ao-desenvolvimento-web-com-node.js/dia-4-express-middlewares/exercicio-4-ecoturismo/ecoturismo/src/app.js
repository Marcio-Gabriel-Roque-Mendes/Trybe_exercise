const express = require('express');
require('express-async-errors');
const validateName = require('./middleware/validateName');
const validatePrice = require('./middleware/validatePrice');
const validateDescription = require('./middleware/validateDescription');

const app = express();

app.use(express.json())

const activities = [
];

module.exports = validateTeam;

app.post('/activities',
validateName, 
validatePrice, 
validateDescription, 

(_req, res) => {
    res.status(201).json({ message: 'Atividade registrada com sucesso!' });
});

module.exports = app;

//     {
//         name": "Trekking",
//         "price": 0,
//         "description": {
//           "rating": 5,
//           "difficulty": "Fácil",
//           "createdAt": "10/08/2022"
//         }
//       },
//     {
//         name": "canoeing",
//         "price": 230,
//         "description": {
//           "rating": 9,
//           "difficulty": "Difícil",
//           "createdAt": "17/08/2022"
//         }
//       },