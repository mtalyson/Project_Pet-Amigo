module.exports = {
  
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('categorias', 
  [{
    categorias: "Cachorro",
  },

  {
    categorias: "Gato",
  },

  {
    categorias: "Hamster",
  },

  {
    categorias: "Coelho",
  },

  {
    categorias: "Outros",
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
