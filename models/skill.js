

const skills = [
    {id: 1234567, skill: 'javascript', done: false},
    {id:2345678, skill: ' python', done: false},
    {id:3456789, skill: 'CSS', done: true}
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
    
}
//the create model
function create(skill) {
    skill.id = Date.now() % 10000000
    skill.done = false;
    skills.push(skill)
    }
    
 function deleteOne (id) {
        id = parseInt(id)
        const idx = skills.findIndex(skill => skill.id === id)
        skills.splice(idx, 1)
    }

function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
  return skills.find(skills => skills.id === id);
}

//delete TODO




