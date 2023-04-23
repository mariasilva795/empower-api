module.exports = (sequelize, Sequelize) => {
  const Categoryc = sequelize.define("categoryc", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    published: {
      type: Sequelize.BOOLEAN
    }
  });

  return Categoryc;
};
