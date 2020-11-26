module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('categorias', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER(11),
      },
      categorias: {
        allowNull: false,
        type: DataTypes.STRING(45),
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
    return queryInterface.dropTable('categorias');
  }
};