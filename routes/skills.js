var express = require('express');
var router = express.Router();
let skillsCtrl = require('../controller/skills')
/* GET users listing. */
router.get('/',skillsCtrl.index)
router.get('/new', skillsCtrl.newTodo)
router.get('/:id', skillsCtrl.show)
router.post('/', skillsCtrl.create)
router.delete('/:id', skillsCtrl.delete)

module.exports = router;



