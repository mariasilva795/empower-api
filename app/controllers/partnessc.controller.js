const db = require("../models");
const Partness = db.partnessc;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  const partness = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
  };

  Partness.create(partness)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Partness."
      });
    });
};

exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;

  Partness.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving partness."
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Partness.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Partness with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Partness with id=" + id
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Partness.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Partness was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Partness with id=${id}. Maybe Partness was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Partness with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Partness.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Partness was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Partness with id=${id}. Maybe Partness was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Partness with id=" + id
      });
    });
};

exports.deleteAll = (req, res) => {
  Partness.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} partness were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all partness."
      });
    });
};

exports.findAllPublished = (req, res) => {
  Partness.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving partness."
      });
    });
};
