module.exports = {
  up: (queryInterface, DataTypes) => {
      return queryInterface.createTable('pets', 
      { id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER(11),
        },
        
        idUsuarioDoacao:{
          allowNull: false,
          type: DataTypes.INTEGER(),
          references: {
            model: 'usuarios',
            key: 'id'
          }
        },

        idCategoria: {
          allowNull: false,
          type: DataTypes.INTEGER(11),
          references: {
            model: 'categorias',
            key: 'id'
          }
        },

      nomePet: {
        allowNull: false,
        type: DataTypes.STRING(50)
      },

      raca: {
        allowNull: false,
        type: DataTypes.STRING(50)
      },

      cor: {
        allowNull: false,
        type: DataTypes.STRING(20)
      },

      idade: {
        allowNull: false,
        type: DataTypes.STRING(20)
      },

      sexo: {
        allowNull: false,
        type: DataTypes.STRING()
      },

      tamanho: {
        allowNull: false,
        type: DataTypes.STRING()
      },

      peso: {
        allowNull: false,
        type: DataTypes.STRING()
      },

      observacoes: {
        allowNull: false,
        type: DataTypes.STRING()        
      },

      opcaoVacinado: {
        allowNull: false,
        type: DataTypes.STRING()
      },

      opcaoCastrado: {
        allowNull: false,
        type: DataTypes.STRING()
      },

      fotoPet: {
        allowNull: false,
        type: DataTypes.STRING()
      },

      statusAdocao: {
        allowNull: false,
        type: DataTypes.BOOLEAN()
      },
      
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.literal('CURRENT_TIMESTAMP()'),
      },

      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.literal('CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP()'),
      },

    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('pets');
  }
};
