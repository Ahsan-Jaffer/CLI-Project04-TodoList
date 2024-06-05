#! /usr/bin/env node
import inquirer from "inquirer";

let todos = [];

let answer = true
while(answer){

    let todosQuestion = await inquirer.prompt([
        {
            name : "firstQuestion",
            type : "input",
            message : "What would you like to add in your Todos ? "
        },
        {
            name : "secondQuestion",
            type : "confirm",
            message : "Would you like to add more in your Todos",
            default : "true"
        },
    ]);
    
    let {firstQuestion , secondQuestion} = todosQuestion
    todos.push(firstQuestion)
    console.log(todos);

    answer = secondQuestion;
}

