module.exports = {
  up: (queryInterface, DataTypes) => {
      return queryInterface.createTable('enderecos',
       { 
         id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER(11),
         },
         idUsuario:{
          allowNull:false,
            type:DataTypes.INTEGER(11),
            references: {         
              model: 'usuarios',
              key: 'id'
            },
         },
         logradouro:{
           allowNull:false,
           type:DataTypes.STRING(50),
         },
         casa:{
           allowNull:false,
           type:DataTypes.STRING(50),
         },
         quadra:{
           allowNull:false,
           type:DataTypes.STRING(50),
         },
         bairro:{
           allowNull:false,
           type:DataTypes.STRING(50),
         },
         cidade:{
           allowNull:false,
           type:DataTypes.STRING(50),
         },
         estado:{
           allowNull:false,
           type:DataTypes.STRING(50),
         },
         cep:{
           allowNull:false,
           type:DataTypes.STRING(50),
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
  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('enderecos');
  }
};
