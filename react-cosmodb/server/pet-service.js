const Pet = require('./pet-model');
const ReadPreference = require('mongodb').ReadPreference;

require('./mongo').connect();

function get(req, res) {
  const docquery = Pet.find({}).read(ReadPreference.NEAREST);
  docquery
    .exec()
    .then(pets => {
      res.json(pets);
    })
    .catch(err => {
      res.status(500).send(err);
    });
}

function create(req, res) {
  const { id, name, description, price } = req.body;

  const pet = new Pet({ id, name, description, price});
  pet
    .save()
    .then(() => {
      res.json(pet);
    })
    .catch(err => {
      res.status(500).send(err);
    });
}

function update(req, res) {
  const { id, name, description, price } = req.body;

  Pet.findOne({ id })
    .then(pet => {
      pet.name = name;
      pet.description = description;
      pet.price = price;
      pet.save().then(res.json(pet));
    })
    .catch(err => {
      res.status(500).send(err);
    });
}

function destroy(req, res) {
  const { id } = req.params;

  Pet.findOneAndRemove({ id })
    .then(pet => {
      res.json(pet);
    })
    .catch(err => {
      res.status(500).send(err);
    });
}

module.exports = { get, create, update, destroy };