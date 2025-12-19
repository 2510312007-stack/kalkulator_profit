const express = require('express');
const router = express.Router();
const controller = require('../controllers/profitController');

router.get('/', controller.home);
router.get('/form', controller.form);
router.post('/calculate', controller.calculate);

module.exports = router;
