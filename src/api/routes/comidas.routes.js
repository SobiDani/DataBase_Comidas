const express = require('express');
const router = express.Router();
const upload = require('../../middlewares/file');
const { isAuth } = require('../../middlewares/auth.middleware');

const {
  getAllComidas,
  getComidaByID,
  createComida,
  patchComida,
  deleteComida,
} = require('../controllers/comidas.controller');

router.get('/', getAllComidas);
router.get('/:id', getComidaByID);
router.post('/', [isAuth], upload.single('imagen'), createComida);
router.patch('/:id', [isAuth],upload.single('imagen'), patchComida);
router.delete('/:id', [isAuth],upload.single('imagen'), deleteComida);

module.exports = router;
