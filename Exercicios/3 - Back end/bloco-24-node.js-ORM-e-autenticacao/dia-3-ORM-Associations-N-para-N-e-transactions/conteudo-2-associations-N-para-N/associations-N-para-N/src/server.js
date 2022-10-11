const app = require('./app');
const { PORT = 3001 } = process.env;

app.listen(PORT, () => `Ouvindo na porta `);


// TENHO QUE INICIAR DE NOVO O CONTAINER DESSE DIA E FAZER O PASSO A PASSO DO COURSE
