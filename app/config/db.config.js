module.exports = {
  HOST: "localhost",
  USER: "nico",
  PASSWORD: "admin123",
  DB: "my_store",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

