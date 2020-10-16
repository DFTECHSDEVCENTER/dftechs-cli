#!/usr/bin/env node
console.log("Hello from DF Community API");
const useage = 1;
const fs = require("fs");
var inquirer = require("inquirer");
const path = require("path");
const { exec } = require("child_process");
const opn = require("opn");
const util = require("util");
const execFile = util.promisify(require("child_process").execFile);

async function gitInitIn() {
  const { gitInitOut } = await execFile("git", ["init"]);
  console.log(gitInitOut);
}
async function npmInitIn() {
  const { npmInitOut } = await execFile("npm", ["init", "-y"]);
  console.log(npmInitOut);
}
function init() {
  console.log("Initializing ....");
  setTimeout(start, 3000);
}
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
      if (answers.initChoice) {
        const initChoice = answers.initChoice;
        switch (initChoice) {
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

// function start3() {
//   console.log("Starting DF Community API");
//   console.log(" ");
//   inquirer
//     .prompt([
//       {
//         type: "list",
//         name: "initChoice",
//         message: "What are the actions do you want to perform?",
//         choices: [
//           "Initial a Project?",
//           "Work with DF Community API",
//           "Visit Our Project !",
//           "Contact Us ..",
//         ],
//       },
//     ])
//     .then((answers) => {
//       if (answers.initChoice) {
//         const initChoice = answers.initChoice;
//         switch (initChoice) {
//           case "Initial a Project?":
//             initProject();
//             break;
//           case "Work with DF Community API":
//             dfcommsAPI();
//             break;
//           case "Visit Our Project !":
//             visitProject();
//             break;
//           case "Contact Us ..":
//             contactUS();
//             break;
//         }
//       } else {
//         console.log("Goodbye 👋");
//       }
//     });
// }

function start() {
  console.log("Starting DF Community API");
  console.log(" ");
  inquirer
    .prompt([
      {
        type: "list",
        name: "initChoice",
        message: "What are the actions do you want to perform?",
        choices: [
          "Initial a Project?",
          "Work with DF Community API",
          "Visit Our Project !",
          "Contact Us ..",
        ],
      },
    ])
    .then((answers) => {
      if (answers.initChoice) {
        const initChoice = answers.initChoice;
        switch (initChoice) {
          case "Initial a Project?":
            initProject();
            break;
          case "Work with DF Community API":
            dfcommsAPI();
            break;
          case "Visit Our Project !":
            visitProject();
            break;
          case "Contact Us ..":
            contactUS();
            break;
        }
      } else {
        console.log("Goodbye 👋");
      }
    });
}

function initGit() {
  gitInitIn();
}
function initNPM() {
  npmInitIn();
}
function initProject() {
  // console.log("Init Project Working !!");
  start2();
}

function dfcommsAPI() {
  console.log("DF Community API Login !!");
}

function visitProject() {
  console.log("Visit Project !!!");
  opn("https://dftechs.dfcommunity.win/projects");
}
function contactUS() {
  console.log("Contact Us ..");
  opn("https://dftechs.dfcommunity.win/contactus");
}
if (useage) {
  inquirer
    .prompt([
      {
        type: "confirm",
        name: "initz",
        message: "Do you want to initialize DF Techs CLI ?",
        default: false,
      },
    ])
    .then((answers) => {
      if (answers.initz) {
        init();
      } else {
        console.log("Goodbye 👋");
      }
    });
}
