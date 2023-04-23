module.exports = (sequelize, Sequelize) => {
  const Partness = sequelize.define("partnessc", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    link: {
      type: Sequelize.STRING
    },
    image: {
      type: Sequelize.STRING
    },
    published: {
      type: Sequelize.BOOLEAN
    }
  });

  return Partness;
};
