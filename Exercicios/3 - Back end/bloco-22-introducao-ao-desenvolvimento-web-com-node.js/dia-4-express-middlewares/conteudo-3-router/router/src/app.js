const express = require('express');
require('express-async-errors');
// MORGAN -------------------------------------------
// require no nosso novo router
const teamsRouter = require('./routes/teamsRouter');

const app = express();
// MORGAN -------------------------------------------
// STATIC -------------------------------------------
app.use(express.json());
// monta o router na rota /teams (1)
app.use('/teams', teamsRouter);

  module.exports = app;