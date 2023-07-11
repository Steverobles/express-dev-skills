const skills = [
    {language: 'javascript', done: true},
    { language: ' python', done: false},
    {language: 'CSS', done: true}
];

module.exports = {
    getAll,
    getOne
    
}

function getAll() {
    return skills;
}

function getOne(language) {
    language = parseInt(language);
  return skills.find(skill => skill.language === language);
}



