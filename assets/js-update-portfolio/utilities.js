const fs = require("fs").promises;
let { projects } = require("./projects.js");


//CREATE ORIGINAL PROJECT SOURCE OF TRUTH
createProjectJsonFile = () => {
  //get projects array
  projects = JSON.stringify(projects);
  
  //write projects to json file
  fs.writeFile("projects.json", projects, function (err) {
    if (err) throw err;
    // console.log('It\'s saved!');
  });
}

createProjectJsonFile();

// viewAnswersList();

// //VIEW THE MOST RECENT README-ANSWERS.TEXT OBJECT
// viewAnswersList = () => {
//   fs.readFile("answers.txt", "utf8", function (err, jsonString) {
//     if (err) throw err;
//     let answers = JSON.parse(jsonString);
//     return console.log(answers);
//   });
// };