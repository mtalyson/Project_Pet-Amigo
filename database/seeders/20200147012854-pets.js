module.exports = {
  
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('pets', 
  [{
    idUsuarioDoacao: "2",
    idCategoria: "1",
    nomePet: "Apolo",
    raca: "Beagle",
    cor: "Mesclado",
    idade: "2 meses",
    sexo: "Macho",
    tamanho: "Pequeno",
    peso: "3 kg",
    observacoes: "Estou doando este filhote pois não tenho condições de cuidar dele.",
    opcaoVacinado: "Sim",
    opcaoCastrado: "Não",
    fotoPet: "cachorro_4-1580441322645.jpg",
    statusAdocao: "0",
    petExcluido: "0",
  },

  {
    idUsuarioDoacao: "2",
    idCategoria: "3",
    nomePet: "Hantaro",
    raca: "Sírio",
    cor: "Laranja",
    idade: "4 meses",
    sexo: "Macho",
    tamanho: "Pequeno",
    peso: "400 gramas",
    observacoes: "Procuro alguém pra adotar este hamster, é um filhote ainda.",
    opcaoVacinado: "Não",
    opcaoCastrado: "Não",
    fotoPet: "hamster_1.jpg",
    statusAdocao: "0",
    petExcluido: "0",
  },

  {
    idUsuarioDoacao: "2",
    idCategoria: "1",
    nomePet: "Tony",
    raca: "Sem Raça",
    cor: "Preto",
    idade: "2 anos",
    sexo: "Macho",
    tamanho: "Grande",
    peso: "8 kg",
    observacoes: "Encontrei na rua e estava passando fome, procuro alguém que tenha condições de cuidar dele.",
    opcaoVacinado: "Não",
    opcaoCastrado: "Não",
    fotoPet: "cachorro_3.jpg",
    statusAdocao: "0",
    petExcluido: "0",
  },

  {
    idUsuarioDoacao: "2",
    idCategoria: "4",
    nomePet: "Leo",
    raca: "Sem Raça",
    cor: "Cinza",
    idade: "6 meses",
    sexo: "Macho",
    tamanho: "Médio",
    peso: "3 kg",
    observacoes: "Faço a doação deste coelho, pois me mudei e não tenho mais tempo de cuidar.",
    opcaoVacinado: "Sim",
    opcaoCastrado: "Sim",
    fotoPet: "coelho_1.jpg",
    statusAdocao: "0",
    petExcluido: "0",
  },

  {
    idUsuarioDoacao: "2",
    idCategoria: "1",
    nomePet: "Thor",
    raca: "Viralata",
    cor: "Marrom",
    idade: "8 meses",
    sexo: "Macho",
    tamanho: "Médio",
    peso: "5 kg",
    observacoes: "Estava sofrendo maus tratos e foi resgatado. Procuro uma família que possa acolhê-lo.",
    opcaoVacinado: "Sim",
    opcaoCastrado: "Sim",
    fotoPet: "cachorro_2.jpg",
    statusAdocao: "0",
    petExcluido: "0",
  },

  {
    idUsuarioDoacao: "2",
    idCategoria: "2",
    nomePet: "Nina",
    raca: "Persa",
    cor: "Branco",
    idade: "3 anos",
    sexo: "Fêmea",
    tamanho: "Médio",
    peso: "5 kg",
    observacoes: "Foi abandonada e agora está sem um lar. Estou fazendo a doação para que alguém possa adotá-la.",
    opcaoVacinado: "Sim",
    opcaoCastrado: "Sim",
    fotoPet: "gato_1.jpg",
    statusAdocao: "0",
    petExcluido: "0",
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
