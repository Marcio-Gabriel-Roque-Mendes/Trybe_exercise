const express = require('express');
const validateTeam = require('./middlewares/validateTeam')

const app = express();
require('express-async-errors');
const apiCredentials = require('./middlewares/apiCredentials');

const teams = [
    { id: 1, nome: 'São Paulo Futebol Clube', sigla: 'SPF' },
    { id: 2, nome: 'Sociedade Esportiva Palmeiras', sigla: 'PAL' },
  ];

app.use(express.json());
// não precisa passar pelo apiCredentials pra chegar aqui

app.get('/teams', (req, res) => res.json(teams));
// se chegou até aqui, então vai passar pelo apiCredentials

const existingIdFind = (req, res, next) => {
  const id = Number(req.params.id);

  const team = teams.find(t => t.id === id);

  if (team) {
    req.team = team;
    return next();
  }
  res.sendStatus(404);
};

app.get('/teams/:id', existingIdFind, (req, res) => {
    res.json(req.team);
});

const existingIdSome = (req, res, next) => {
  const id = Number(req.params.id);

  if (teams.some((t) => t.id === id)) {
    return next();
  }
  res.sendStatus(404);
};

app.use(apiCredentials); 

// só vai chegar aqui se tiver credenciais
app.post('/teams', validateTeam, (req, res) => {
    const team = { id: nextId, ...req.body };
    teams.push(team);
    nextId += 1;
    res.status(201).json(team);
  });
  
  app.put('/teams/:id', existingIdSome, validateTeam, (req, res) => {
    const id = Number(req.params.id);
    const team = teams.find(t => t.id === id);
   
      const index = teams.indexOf(team);
      const updated = { id, ...req.body };
      teams.splice(index, 1, updated);
      res.status(201).json(updated);
  });