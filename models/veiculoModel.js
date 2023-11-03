// Definindo a estrutura de um veículo

module.exports = (sequelize, DataTypes) => {

    const Veiculo = sequelize.define("veiculo",{
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        locadora: {
            type: DataTypes.STRING,
            allowNull: false
        },
        modelo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        marca: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ano: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        motor: {
            type: DataTypes.STRING,
            allowNull: false
        },
        portas: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        cambio: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ar_condicionado: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    })

    return Veiculo
}