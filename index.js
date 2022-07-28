const { prompt } = require("inquirer");
const db = require("./db");
require("console.table");


init();

function init() {
    runPrompts();
}