// yes you will have to edit

let Skill = require('../models/skill')

module.exports ={
    index,
    show,
    newTodo,
    create,
    delete: deleteSkill
};

function newTodo(req, res) {
    res.render('skills/new', {title: 'New Skill'})
}

function create(req, res) {
    Skill.create(req.body)
    res.redirect('/skills')
 }

function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id)
    res.redirect('/skills')
}

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll()
    })
}

function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id),
    });

 }


