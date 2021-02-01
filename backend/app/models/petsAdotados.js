module.exports = (sequelize, DataTypes) => {
    const petsadotados = sequelize.define('petsadotados', {
        idUsuario: DataTypes.INTEGER,
        idUsuarioDoador: DataTypes.INTEGER,
        idPet: DataTypes.INTEGER,
    });

    petsadotados.associate = function(models) {
        petsadotados.belongsTo(models.usuarios, {foreignKey:'idUsuario', as:'usuarios'})
        petsadotados.belongsTo(models.pets, {foreignKey:'idPet', as:'pets'})
    }

    return petsadotados;
}