'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('usuarios', 
  [{
    nomeUsuario: "Teste1",
    email: "t1@t1",
    password: "t1",
    eAdmin: "0",
    fotoUsuario: "usernovo.png"
  },

  {
    nomeUsuario: "Teste2",
    email: "t2@t2",
    password: "t2",
    eAdmin: "0",
    fotoUsuario: "usernovo.png"
  },
  
], {}),

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
