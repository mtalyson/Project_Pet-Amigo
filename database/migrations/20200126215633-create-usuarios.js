module.exports = {
  up: (queryInterface,DataTypes) => {
      return queryInterface.createTable('usuarios',
      {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER(11),
      },
      nomeUsuario: {
        allowNull: false,
        type: DataTypes.STRING(50)
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING(255)
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING(65),
      },
      eAdmin: {
        allowNull: false,
        type: DataTypes.BOOLEAN(),
      },
      fotoUsuario: {
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
      return queryInterface.dropTable('usuarios');
  }
};
