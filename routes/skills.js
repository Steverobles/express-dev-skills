var express = require('express');
var router = express.Router();
let skillsCtrl = require('../controller/skills')
/* GET users listing. */
router.get('/',skillsCtrl.index)
router.get('/:language', skillsCtrl.show)

module.exports = router;
