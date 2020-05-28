const { Router } = require('express');
const router = Router();

const { getCorreos, setCorreo} = require('../controllers/correos.controller');

router.route('/')
    .get(getCorreos)
    .post(setCorreo);

module.exports = router;