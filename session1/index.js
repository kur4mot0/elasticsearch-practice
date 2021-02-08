const inquirer = require('inquirer');

function run(){
   inquirer.prompt({
      type: 'rawlist',
      name: "action",
      message: "Action?",
      choices: ["Create Index", "Get Index", "Delete Index"]
   })
   .then(function (answers) {
      console.log(answers);
   })
   .catch()
}

run();