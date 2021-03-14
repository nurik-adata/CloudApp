const express = require('express');
const router = express.Router();

const petsService = require('../pet-service');

router.get('/pets', (req, res) => {
  petsService.get(req, res);
});

router.put('/pet', (req, res) => {
  petsService.create(req, res);
});

router.post('/pet', (req, res) => {
  petsService.update(req, res);
});

router.delete('/pet/:id', (req, res) => {
  petsService.destroy(req, res);
});

module.exports = router;