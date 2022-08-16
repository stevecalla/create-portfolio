const fs = require("fs");
const template = require("./htmlTemplate");
const { licenseBadges } = require("./badges"); //todo
const { writeAnswers } = require("./writeAnswers"); // Step #2: save answers to readme-answers.txt
const { projects } = require("./projects");
const { newProject } = require("./htmlProjectTemplate");

handleAnswers = (answers) => {
  // WRITE THE NEW ANSWERS OBJECT TO THE SOURCE OF TRUTH README-ANSWERS.TXT FILE
  writeAnswers(JSON.stringify(answers));


  // PUSH NEW PROJECT INTO THE PROJECTS DATA SET
  ADD NEW PROJECT INFO TO THE HTML PROJECT TEMPLATE
  APPEND HTML PROJECT TEMPLATE TO PROJECTS TEXT
  THEN READ PROJECT TEXT
  CREATE OBJECT PROPERTY FOR PROJECT TEXT
  // console.log(newProject);

  fs.appendFile('projects.txt', newProject, (err) => {
    err ? console.error(err) : console.log('Commit logged!')
  });

  answers.projects = projects;

  fs.writeFile(
    '../../index-draft.html',
    template.htmlTemplate(answers), //todo
    function (err) {
      if (err) throw err;
      // console.log('It\'s saved!');
    }
  );
};

module.exports = {
  handleAnswers,
};