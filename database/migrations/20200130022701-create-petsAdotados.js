module.exports = {
  up: (queryInterface, DataTypes) => {
      return queryInterface.createTable('petsAdotados', 
      { id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER()
      },
      idUsuario:{
        allowNull: false,
        type: DataTypes.INTEGER(),
        references: {
          model: 'usuarios',
          key: 'id'
        }
      },
      idPet:{
        allowNull: false,
        type: DataTypes.INTEGER(),
        references: {
          model: 'pets',
          key: 'id'
        }
      },
      idUsuarioDoador:{
        allowNull: false,
        type: DataTypes.INTEGER(),
      },
      nomeUsuarioDoador:{
        allowNull: false,
        type: DataTypes.STRING(),
      },
      emailUsuarioDoador:{
        allowNull: false,
        type: DataTypes.STRING(),
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
      return queryInterface.dropTable('petsAdotados');
  }
};
