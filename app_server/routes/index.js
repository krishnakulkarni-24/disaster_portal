var express = require('express');
var router = express.Router();
var ctrl=require('../controller/main');
router.get('/',ctrl.index);
router.get('/services',ctrl.services);
router.get('/contact',ctrl.contact);
module.exports = router;
