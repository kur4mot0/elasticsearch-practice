const inquirer = require('inquirer');
const axios = require('axios');
const ELASTIC_URL = "http://localhost:9200";

async function elasticCreateIndex(indexName) {
   // TODO: Create index by HTTP
   // PUT http://localhost:9200/<indexName>;
   const endpoint = ELASTIC_URL+"/"+indexName;
   const response = await axios.put(endpoint);
   console.log(response.data);
}

async function elasticGetIndex(indexName)
{
   const endpoint = ELASTIC_URL+"/"+indexName;
   const response = await axios.get(endpoint);
   console.log(response.data);
}

async function elasticDeleteIndex(indexName)
{
   const endpoint = ELASTIC_URL+"/"+indexName;
   const response = await axios.delete(endpoint);
   console.log(response.data);
}

function CreateIndex() {
   inquirer
   .prompt([
      {
         type: "input",
         name: "indexName",
         message: "Please provide an index name: "         
      }
   ])
   .then(function (answers)
   {
      elasticCreateIndex(answers.indexName);
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
   .then(function (answers)
   {
      elasticGetIndex(answers.indexName);      
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
   .then(function (answers)
   {
      elasticDeleteIndex(answers.indexName)
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
      switch (answers.action) {
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