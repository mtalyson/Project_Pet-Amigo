 module.exports = (sequelize, DataTypes) => {
    const categorias = sequelize.define('categorias', {
        categorias: DataTypes.STRING,
    });
    categorias.associate = function(models){
      categorias.hasMany(models.pets,{foreignKey: 'idCategoria', as: 'pets'});
    };
    return categorias;
  }