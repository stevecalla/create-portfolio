const fs = require("fs").promises;
const inquirer = require("inquirer");
const { promptQuestion } = require("./questions");
const { writeAnswers } = require("./writeAnswers");
const template = require("./htmlPageTemplate");
const { newProject } = require("./htmlProjectTemplate");
// let { projects } = require("./projects.js");

let main = async () => {
  instructions();
  //section run inquirer
  const promptAnswers = await inquirer.prompt(promptQuestion);

  //section: read project.json source of truth
  const getProjects = await fs.readFile("projects.json", "utf-8");
  //parse json into an array
  let parsedProjects = JSON.parse(getProjects);
  // console.log('parsed = ', parsedProjects);

  //section: create an object of project answers
  let projectAnswers = {
    projectWebsiteURL: promptAnswers.projectWebsiteURL,
    projectWebsiteTitle: promptAnswers.projectWebsiteTitle,
    projectImage: promptAnswers.projectImage,
    projectImageALTTag: promptAnswers.projectImageALTTag,
    projectTitle: promptAnswers.projectTitle,
    projectSubTitle: promptAnswers.projectSubTitle,
  };
  // console.log('project input = ', projectAnswers);

  //section: modify the array - add or delete
  await parsedProjects.push(projectAnswers);
  // console.log(parsedProjects);

  //section: write json soucre of truth back to original
  await fs.writeFile(
    "projects.json",
    JSON.stringify(parsedProjects),
    function (err) {
      if (err) throw err;
      // console.log('It\'s saved!');
    }
  );
  //section: use array to create html for projects
  let projectString = "";
  await parsedProjects.forEach((element) => {
    projectString += newProject(element);
  });
  // console.log(projectString);

  //section append project html to answer object
  promptAnswers.projects = projectString; //appends all project html to answer object
  //section write answer object to the answer txt file
  await writeAnswers(JSON.stringify(promptAnswers)); //writes all answer object to text file
  //section: generates the final html
  await fs.writeFile(
    "../../index-draft.html",
    template.htmlTemplate(promptAnswers),
    function (err) {
      if (err) throw err;
    }
  ); //creates final html file
  nextSteps();
};

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
