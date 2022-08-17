const promptQuestion = [
  {
    prefix: "⠋🟡 1)",
    type: "input",
    name: "name",
    message: `\x1b[36mWhat is Your Name\x1b[0m`,
    default: "Steve Calla",
    suffix: " 🟡",
    validate(answer) {
      if (!answer) {
        return "Please, provide your name!";
      }
      return true;
    },
    filter(answer) {
      return answer.trim();
    },
  },
  {
    prefix: "⠋🟡 2)",
    type: "input",
    name: "motto",
    message: "What is your motto?",
    default: "SIEZE THE DAY",
    suffix: " 🟡",
    filter(answer) {
      return answer.trim();
    },
  },
  {
    prefix: "⠋🟡 3)",
    type: "input",
    name: "aboutMe",
    message: "Please provide a 3 to 4 sentence about me description?",
    default: "What can I say? I live in Boulder, Colorado. I'm currently studying full-stack coding at Denver Unversity and expect to graduate in December 2022. I'm have an extensive marketing background, and have managed marketing analytics as well as e-commerce in a variety of industries. I am super curious to learn the coding trade and incorporate that into my marketing career in some fashion. I'm particularly facinated by how much fun it is to solve coding puzzles (across the universe of HTML, CSS and Javascript) and to make the user experience effective and accessible.",
    suffix: " 🟡",
    filter(answer) {
      return answer.trim();
    },
  },
  {
    prefix: "⠋🟡 4)",
    name: "emailAddress",
    type: "input",
    message: "Please enter your email address?",
    default: "callasteven@gmail.com",
    validate(answer) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(answer)) {
        return "Please provide a valid email address!";
      }
      return true;
    },
  },
  {
    prefix: "⠋🟡 5)",
    type: "input",
    name: "phoneNumber",
    message: "What is your phone number (format: 123-345-6789)?",
    default: "201-934-7068",
    suffix: " 🟡",
    // validate(answer) {
    //   if (!answer) {
    //     return "Please, provide your name!";
    //   }
    //   return true;
    // },
    filter(answer) {
      return answer.trim();
    },
  },
  {
    prefix: "⠋🟡 6)",
    type: "input",
    name: "gitHubUserName",
    message: "Please enter your GitHub user name?",
    default: "stevecalla",
    suffix: " 🟡",
    filter(answer) {
      return answer.trim();
    },
  },
  {
    prefix: "⠋🟡 8)",
    type: "input",
    name: "projectWebsiteURL",
    message: "Please enter the project website URL?",
    default: "https://stevecalla.github.io/bessie-the-dog/",
    suffix: " 🟡",
    filter(answer) {
      return answer.trim();
    },
  },
  {
    prefix: "⠋🟡 9)",
    type: "input",
    name: "projectWebsiteTitle",
    message: "Please enter the project website title?",
    default: "Bessie the Dog Photo Gallery",
    suffix: " 🟡",
    filter(answer) {
      return answer.trim();
    },
  },
  {
    prefix: "⠋🟡 10)",
    type: "input",
    message: "Please add the path/URL for a static image of the project (i.e. ./assets/images/bessie_the_dog_app.png)?",
    name: "projectImage",
    default: "./assets/images/bessie_the_dog_app.png",
    suffix: " 🟡",
    filter(answer) {
      return answer.trim();
    },
  },
  {
    prefix: "⠋🟡 11)",
    type: "input",
    message: "Please add the project image ALT tag?",
    name: "projectImageALTTag",
    default: "Bessie the Dog",
    suffix: " 🟡",
    filter(answer) {
      return answer.trim();
    },
  },
  {
    prefix: "⠋🟡 12)",
    type: "input",
    message: "Please add the project title?",
    name: "projectTitle",
    default: "Bessie the Dog",
    suffix: " 🟡",
    filter(answer) {
      return answer.trim();
    },
  },
  {
    prefix: "⠋🟡 13)",
    type: "input",
    message: "Please add the project subtitle?",
    name: "projectSubTitle",
    default: "Dog's Life",
    suffix: " 🟡",
    filter(answer) {
      return answer.trim();
    },
  },
];

module.exports = {
  promptQuestion,
};