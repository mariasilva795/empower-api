const db = require("../models");
const Categoryc = db.categoryc;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  const category = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
  };

  Categoryc.create(category)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Categoryc."
      });
    });
};

exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;

  Categoryc.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving categories."
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Categoryc.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Categoryc with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Categoryc with id=" + id
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Categoryc.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Categoryc was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Categoryc with id=${id}. Maybe Categoryc was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Categoryc with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Categoryc.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Categoryc was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Categoryc with id=${id}. Maybe Categoryc was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Categoryc with id=" + id
      });
    });
};

exports.deleteAll = (req, res) => {
  Categoryc.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} categories were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all categories."
      });
    });
};

exports.findAllPublished = (req, res) => {
  Categoryc.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving categories."
      });
    });
};
