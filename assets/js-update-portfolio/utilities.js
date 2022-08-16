const fs = require("fs");
const { licenseBadges } = require("./badges");

viewLicenseList();
viewAnswersList();

//VIEW LIST OF LICENSES
viewLicenseList = () => {
  let sortedLicenseList = licenseBadges
    .map((element) => element.license)
    .sort();
  return console.log(sortedLicenseList);
};

//VIEW THE MOST RECENT README-ANSWERS.TEXT OBJECT
viewAnswersList = () => {
  fs.readFile("answers.txt", "utf8", function (err, jsonString) {
    if (err) throw err;
    let answers = JSON.parse(jsonString);
    return console.log(answers);
  });
};
