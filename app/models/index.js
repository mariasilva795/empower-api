const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.usersc = require("./usersc.model.js")(sequelize, Sequelize);
db.categoryc = require("./categoryc.model.js")(sequelize, Sequelize);
db.partnessc = require("./partnessc.model.js")(sequelize, Sequelize);

module.exports = db;
