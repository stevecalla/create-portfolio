/*
Step #1: prompt for readme information
Step #1a: list of questions
Step #2: save answers to answers.txt
Step #3: read answers from answers.txt; pass to handle answer
Step #4 getAnswers() called handleAnswers()
Step #5 handleAnswers() determines which license badge to add to the answwers object & gerates the readme file
*/

const fs = require("fs").promises;
const inquirer = require("inquirer"); //Step #1
const { promptQuestion } = require("./questions"); //Step #1a
const { writeAnswers } = require("./writeAnswers"); //Step #2
// const { getAnswers } = require("./getAnswers"); // Step #3

// const fs = require("fs").promises;
const template = require("./htmlTemplate");
// const { writeAnswers } = require("./writeAnswers"); // Step #2: save answers to readme-answers.txt
const { newProject } = require("./htmlProjectTemplate");
let { projects } = require("./projects.js");

let main = async () => {
  instructions();
  const promptAnswers = await inquirer.prompt(promptQuestion);
  // await writeAnswers(JSON.stringify(promptAnswers));
  // getAnswers();
  await createNewProject(promptAnswers); //creates project from input
  const data = await fs.readFile("newProject.txt"); //reads project from txt
  await fs.appendFile('projects.txt', data); //appends project
  const allProjects = await fs.readFile("projects.txt", "utf8"); //get all projects
  
  promptAnswers.projects = allProjects; //appends all project html to answer object
  writeAnswers(JSON.stringify(promptAnswers)); //writes all answer object to text file
  fs.writeFile('../../index-draft.html', template.htmlTemplate(promptAnswers), function (err) {if (err) throw err;}); //creates final html file
  nextSteps(); 

  //section: read json source of truth
  const getProjects = await fs.readFile("projects.json", "utf-8");
  //parse json into an array
  let parsedProjects = JSON.parse(getProjects);
  console.log('parsed = ', parsedProjects)
  //section: create an object of project answers
  let projectAnswers = {
      projectWebsiteURL: promptAnswers.projectWebsiteURL,
      projectWebsiteTitle: promptAnswers.projectWebsiteTitle,
      projectImage: promptAnswers.projectImage,
      projectImageALTTag: promptAnswers.projectImageALTTag,
      projectTitle: promptAnswers.projectTitle,
      projectSubTitle: promptAnswers.projectSubTitle,
  };
  console.log('project input = ', projectAnswers);
  //section: modify the array - add or delete
  parsedProjects.push(projectAnswers);
  console.log(parsedProjects);
  //section: write json soucre of truth back to original
  await fs.writeFile("projects.json", JSON.stringify(parsedProjects), function (err) {
    if (err) throw err;
    // console.log('It\'s saved!');
  });
  //section: use array to create html for projects
  let projectString = "";
  parsedProjects.forEach(element => {
    projectString += newProject(element); 
  })
  console.log(projectString);

  //inject html for project into answers.txt
  //render html for projects
}

async function createNewProject(answers) {
  await fs.writeFile('newProject.txt', newProject(answers), function (err) {
    if (err) throw err;
    console.log('createdNewProject')
  })
}

instructions = () => {
  console.log(`\n------------------`);
  console.log(
    "The following prompts will create a professional README for a project. Please answer each question. If a question is not answered a header for that section will appear in the README. After completion of all prompts, the README will be available in the current directory, and should be edited to include the final content."
  );
  console.log(`------------------\n`);
};

nextSteps = () => {
  console.log(`\n------------------`);
  console.log(
    `The README.md starter is now available in your current directory. This starter includes placeholders for static images or video along with a variety of other placeholders to enhance and customize the README. Please edit as necessary to finalize.`
  );
  console.log(`------------------\n`);
};

main();
