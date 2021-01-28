module.exports = (sequelize,DataTypes) => {
    const usuarios = sequelize.define('usuarios', {
        nomeUsuario: DataTypes.STRING(50),
        email: DataTypes.STRING(255),
        password: DataTypes.STRING(65),
        eAdmin: DataTypes.BOOLEAN,
        fotoUsuario: DataTypes.STRING,
    });

    return usuarios;
}