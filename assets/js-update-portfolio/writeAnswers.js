const fs = require("fs").promises;

let writeAnswers = async (answers) => {
  await fs.writeFile("answers.txt", answers, function (err) {
    if (err) throw err;
    // console.log('It\'s saved!');
  });
};

module.exports = {
  writeAnswers,
};
