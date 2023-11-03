const dbConfig = require('../Config/db.config.js');

const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(
	dbConfig.DB,
	dbConfig.USER,
	dbConfig.PASSWORD,
	{
		host: dbConfig.HOST,
		dialect: dbConfig.dialect,
		port: dbConfig.port
	},
)

sequelize.authenticate()
.then(() => {
	console.log('Conectado')
})
.catch(err => {
	console.log("Error" + err)
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.Veiculo = require('./veiculoModel.js')(sequelize, DataTypes)

db.sequelize.sync({force: false})
.then(() => {
	console.log('Conexão OK')
})

module.exports = db