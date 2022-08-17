// // const fs = require("fs");
// const fs = require("fs").promises;
// const template = require("./htmlTemplate");
// const { writeAnswers } = require("./writeAnswers"); // Step #2: save answers to readme-answers.txt
// const { newProject } = require("./htmlProjectTemplate");

// handleAnswers = async (answers) => {
//   const project = await createNewProject(answers); //creates project from input
//   const data = await fs.readFile("newProject.txt"); //reads project from txt
//   const append = await fs.appendFile('projects.txt', data); //appends project
//   const allProjects = await fs.readFile("projects.txt", "utf8"); //get all projects
//   answers.projects = allProjects; //appends all project html to answer object
//   writeAnswers(JSON.stringify(answers)); //writes all answer object to text file
//   fs.writeFile('../../index-draft.html', template.htmlTemplate(answers), function (err) {if (err) throw err;}); //creates final html file
// }

// async function createNewProject(answers) {
//   await fs.writeFile('newProject.txt', newProject(answers), function (err) {
//     if (err) throw err;
//     console.log('createdNewProject')
//   })
// }

// module.exports = {
//   handleAnswers,
// };


// handleAnswers = (answers) => {
//   console.log('1')
//   fs.writeFile('newProject.txt', newProject(answers), function (err) {
//     if (err) throw err;
//     console.log('2')
//     fs.readFile("newProject.txt", "utf8", function (err, data) {
//       if (err) throw err;
//       console.log('3 = ', data)
//       fs.appendFile('projects.txt', data, (err) => {
//         if (err) {console.error(error)}
//         console.log('4 = ', data)
//         fs.readFile("projects.txt", "utf8", function (err, jsonString) {
//           if (err) throw err;
//           let projects = jsonString;
//           answers.projects = projects;
//           writeAnswers(JSON.stringify(answers));
//           fs.writeFile(
//             '../../index-draft.html',
//             template.htmlTemplate(answers),
//             function (err) {
//               if (err) {
//                 throw err;
//               }
//             }
//           );
//         });
//       });
//     })
//   })
// };