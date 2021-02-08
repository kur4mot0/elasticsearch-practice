const inquirer = require('inquirer');

function CreateIndex() {
   inquirer
   .prompt([
      {
         type: "input",
         name: "indexName",
         message: "Please provide an index name: "         
      }
   ])
   .then(function (answer)
   {
      console.log(answer);
   })
   .catch()
}

function GetIndex() {
   inquirer
   .prompt([
      {
         type: "input",
         name: "indexName",
         message: "Please provide an index name: "         
      }
   ])
   .then(function (answer)
   {
      console.log(answer);
   })
   .catch()
}

function DeleteIndex() {
   inquirer
   .prompt([
      {
         type: "input",
         name: "indexName",
         message: "Please provide an index name: "         
      }
   ])
   .then(function (answer)
   {
      console.log(answer);
   })
   .catch()
}

function run(){
   inquirer
   .prompt({
      type: 'rawlist',
      name: "action",
      message: "Action?",
      choices: ["Create Index", "Get Index", "Delete Index"]
   })
   .then(function (answers) {
      switch (answers['action']) {
         case "Create Index":
            CreateIndex();
            break;
         case "Get Index":
            GetIndex();
            break;
         case "Delete Index":
            DeleteIndex();
            break;         
      }
   })
   .catch()
}

run();