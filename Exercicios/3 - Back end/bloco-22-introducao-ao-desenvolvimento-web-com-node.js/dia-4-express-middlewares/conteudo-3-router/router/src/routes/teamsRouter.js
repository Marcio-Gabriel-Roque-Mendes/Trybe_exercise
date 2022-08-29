// os requires são relativos ao arquivo, então o path muda ligeiramente
const validateTeam = require('../middlewares/validateTeam')
const apiCredentials = require('../middlewares/apiCredentials');
const express = require('express');

// cria um router middleware
const router = express.Router();

let nextId = 3;
const teams = [
  { id: 1, nome: 'São Paulo Futebol Clube', sigla: 'SPF' },
  { id: 2, nome: 'Sociedade Esportiva Palmeiras', sigla: 'PAL' },
];

// o path é relativo à rota em que o router foi montado (2)
router.get('/teams', (req, res) => res.json(teams));

const existingIdFind = (req, res, next) => {
    const id = Number(req.params.id);
  
    const team = teams.find(t => t.id === id);
  
    if (team) {
      req.team = team;
      return next();
    }
    res.sendStatus(404);
  };
  
  router.get('/teams/:id', existingIdFind, (req, res) => {
      res.json(req.team);
  });

  const existingIdSome = (req, res, next) => {
    const id = Number(req.params.id);
  
    if (teams.some((t) => t.id === id)) {
      return next();
    }
    res.sendStatus(404);
  };

  // configurações globais afetam apenas este router (3)
router.use(apiCredentials);

router.put('/teams/:id', existingIdSome, validateTeam, (req, res) => {
    const id = Number(req.params.id);
    const team = teams.find(t => t.id === id);
   
      const index = teams.indexOf(team);
      const updated = { id, ...req.body };
      teams.splice(index, 1, updated);
      res.status(201).json(updated);
  });

router.delete('/teams/:id', existingIdSome, validateTeam, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  
    const index = teams.indexOf(team);
    teams.splice(index, 1);
    res.sendStatus(200);
});

module.exports = router;  