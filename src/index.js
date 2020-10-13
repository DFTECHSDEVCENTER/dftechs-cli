#!/usr/bin/env node
console.log("Hello from DF Community API");
const useage = 1;
const fs = require("fs");
var inquirer = require("inquirer");
const path = require("path");
const { exec } = require("child_process");
const opn = require("opn");

function init(){
  console.log("Initializing ....");
  setTimeout(start, 3000);
}
function start(){
  console.log("Starting DF Community API");
  console.log(" ");
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
          switch(initChoice)
          {
              case 'Initial a Project?' :
              initProject();
              break;
              case 'Work with DF Community API' :
              dfcommsAPI();
              break;
              case 'Visit Our Project !' :
              visitProject();
              break;
              case 'Contact Us ..' :
              contactUS();
              break;
          }
      } else {
        console.log("Goodbye 👋");
      }
    });
}

function initProject(){
  console.log("Init Project Working !!")
}

function dfcommsAPI(){
  console.log("DF Community API Login !!")
}

function visitProject(){
  console.log("Visit Project !!!")
  opn('https://dftechs.dfcommunity.win/projects');
}
function contactUS(){
  console.log("Contact Us ..");
  opn('https://dftechs.dfcommunity.win/contactus');
}
if (useage) {
  inquirer
    .prompt([
      {
        type: "confirm",
        name: "initz",
        message:
          "Do you want to initialize DF Techs CLI ?",
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