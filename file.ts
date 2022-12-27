#!use/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import { type } from "os";

const sleep=()=>{
    return new Promise((res)=>{
        setTimeout(res, 2000);
    })
}

async function welcome(){
   let rainbow= chalkAnimation.karaoke('Let Start Calculations');
   await sleep();
   rainbow.stop();
}

await welcome();

async function askQuestion(){
    
 const answers = await inquirer
.prompt([
  {
    type:'list',
    name:'operator',
    message:'Which operation you want to perform?\n',
    choices: ['Addition', 'Substraction', 'Multiplication', 'Division'],
  },
  {
    type:'number',
    name:'num1',
    message:'Enter number 1'
  
  },
  {
    type:'number',
    name:'num2',
    message:'Enter number 2'
  }

])

    if(answers.operator == 'Addition'){
      console.log( chalk.red(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`))
    }
    else if(answers.operator == 'Substraction'){
      console.log(chalk.red(`${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`))
    }
    else if(answers.operator == 'Multiplication'){
      console.log(chalk.red(`${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2}`))
    }
    else if(answers.operator == 'Division'){
      console.log(chalk.red(`${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`))
    }

}

do{
  await askQuestion();

  var start = await inquirer
  .prompt({
      type:'input',
      name:'restart',
      message:'Do you want to Perform Arithmetic Operations Again? Press y or n',
    })
}
while(start.restart == 'y' || start.restart == 'Y')

console.log(("The End"));