module.exports = (sequelize, DataTypes) => {
    const enderecos = sequelize.define('enderecos', {
       logradouro: DataTypes.STRING,
       casa: DataTypes.STRING,
       quadra: DataTypes.STRING,
       bairro: DataTypes.STRING,
       cidade: DataTypes.STRING,
       estado: DataTypes.STRING,
       cep: DataTypes.STRING,
    });
    
    enderecos.associate = function(models){
        enderecos.belongsTo(models.usuarios,{foreignKey: 'idUsuario', as: 'usuarios'});
    };

    return enderecos;
  }