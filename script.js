const h2 = document.createElement("h2");
h2.textContent = "My name is Manuel Avila, I am hoping to become a Software Engineer.";
document.querySelector("body").appendChild(h2);

const technicalSkills = document.getElementById('technical-skills');

const skills = [
  'JavaScript',
  'HTML',
  'CSS',
  'And a lot of creativity'
];

const skillList = document.createElement('ul');

skills.forEach(skill => {
  const skillElement = document.createElement('li');
  skillElement.textContent = skill;
  skillList.appendChild(skillElement);
});

technicalSkills.appendChild(skillList);



