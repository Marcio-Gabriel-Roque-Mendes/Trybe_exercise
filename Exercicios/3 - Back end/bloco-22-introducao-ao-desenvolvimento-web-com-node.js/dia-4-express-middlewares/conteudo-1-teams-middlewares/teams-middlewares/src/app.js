const express = require('express');
const validateTeam = require('./middlewares/validateTeam')

const app = express();

let nextId = 3;
const teams = [
  { id: 1, nome: 'São Paulo Futebol Clube', sigla: 'SPF' },
  { id: 2, nome: 'Sociedade Esportiva Palmeiras', sigla: 'PAL' },
];

app.use(express.json());

app.get('/:xablau', (req, res) => {
console.log(req.params);
console.log(req.query);
console.log(req.body);
res.end();
})

app.get('/teams', (req, res) => res.json(teams));

const existingIdFind = (req, res, next) => {
  const id = Number(req.params.id);

  const team = teams.find(t => t.id === id);

  if (team) {
    req.team = team;
    return next();
  }
  res.sendStatus(404);
};

// GET
app.get('/teams/:id', existingIdFind, (req, res) => {
    res.json(req.team);
});

// -------------------------------------------------------

// // OUTRA MANEIRA 

const existingIdSome = (req, res, next) => {
  const id = Number(req.params.id);

  if (teams.some((t) => t.id === id)) {
    return next();
  }
  res.sendStatus(404);
};

// app.get('/teams/:id', existingId, (req, res) => {
//   const id = Number(req.params.id);
//   const team = teams.find(t => t.id === id);
//     res.json(team);
  
// });
  
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


app.delete('/teams/:id', (req, res) => {
    const id = Number(req.params.id);
    const team = teams.find(t => t.id === id);
    
      const index = teams.indexOf(team);
      teams.splice(index, 1);
      res.sendStatus(200);
  });

module.exports = app;