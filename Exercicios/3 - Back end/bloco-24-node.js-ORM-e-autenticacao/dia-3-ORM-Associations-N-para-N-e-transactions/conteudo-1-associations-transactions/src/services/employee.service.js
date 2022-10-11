// src/services/employee.service.js

// ...

// const insert = async ({ firstName, lastName, age, city, street, number }) => {
  const t = await sequelize.transaction();
  try {
    // Depois executamos as operações
    const result = await sequelize.transaction(async (t) => {
      const employee = await Employee.create({
        firstName, lastName, age
      }, { transaction: t });

      await Address.create({
        city, street, number, employeeId: employee.id
      }, { transaction: t });
      return employee;
    });
    return result;
    // Se chegou até aqui é porque as operações foram concluídas com sucesso,
    // não sendo necessário finalizar a transação manualmente.
    // `result` terá o resultado da transação, no caso um empregado e o endereço cadastrado
  } catch (e) {
    // Se entrou nesse bloco é porque alguma operação falhou.
    // Nesse caso, o sequelize irá reverter as operações anteriores com a função rollback, não sendo necessário fazer manualmente
    console.log(e);
    throw e; // Jogamos o erro para a controller tratar
  }
// };

// ...


// ANTIGO --->

// // src/services/employee.service.js

// const { Address, Employee } = require('../models/');

// const getAll = async () => {
//   const users = await Employee.findAll({
//     include: { model: Address, as: 'addresses' },
//   });

//   return users;
// };

// const insert = async ({ firstName, lastName, age, city, street, number }) => {
//   const employee = await Employee.create({ firstName, lastName, age });

//   await Address.create({ city, street, number, employeeId: employee.id });
//   return employee;
// };

// module.exports = { 
//   getAll,
//   insert
//  };