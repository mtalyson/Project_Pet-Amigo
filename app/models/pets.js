module.exports = (sequelize, DataTypes) => {
    const pets = sequelize.define('pets', {
        idUsuarioDoacao: DataTypes.INTEGER,
        idCategoria: DataTypes.INTEGER(11),
        nomePet: DataTypes.STRING,
        raca: DataTypes.STRING,
        cor: DataTypes.STRING,
        idade: DataTypes.STRING,
        sexo: DataTypes.STRING,
        tamanho: DataTypes.STRING,
        peso: DataTypes.STRING,
        observacoes: DataTypes.STRING,
        opcaoVacinado: DataTypes.STRING,
        opcaoCastrado: DataTypes.STRING,
        fotoPet: DataTypes.STRING,
        statusAdocao: DataTypes.BOOLEAN,
        petExcluido: DataTypes.BOOLEAN,
    });

    pets.associate = function(models) {
        pets.belongsTo(models.categorias, {foreignKey: 'idCategoria', as: 'categorias'})
    }

    return pets;
}
