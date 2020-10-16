var inquirer = require("inquirer");
function start2() {
  console.log("Getting Ready to Initiallize your Project ...");
  console.log(" ");
  inquirer
    .prompt([
      {
        type: "checkbox",
        name: "initProject",
        message: "What are the things you want to initiate?",
        choices: [
          "Initiate NPM Project",
          "Initiate Git Repository",
          "Initiate Static Website Projet",
          // "Contact Us ..",
        ],
      },
    ])
    .then((answers) => {
      if (answers.initProject) {
        const initProject = answers.initProject;
        switch (initProject) {
          case "Initiate NPM Project":
            initGit();
            break;
          case "Initiate Git Repository":
            initNPM();
            break;
          case "Initiate Static Website Projet":
            initHTML();
            break;
          // case "Initiate ":
          //   contactUS();
          //   break;
        }
      } else {
        console.log("Goodbye 👋");
      }
    });
}
module.exports = { start2 };
