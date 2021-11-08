// @ts-check
import { question } from "./data/questions.js";
import { Quiz } from "./models/Quiz.js";
import { Render } from "./models/Render.js";

// Data-Score


main();

function main(){  
    const quiz = new Quiz(question);
    const render = new Render();

    renderPage(render, quiz);
}

/**
 * 
 * @param {Render} render The main Render Object
 * @param {Quiz} quiz The main Quiz Objet
 */
function renderPage(render, quiz){
    if(quiz.questionsEnded()){
       console.log();
       render.showScore(quiz.score, quiz.question.length);

    }else{
        const quest = quiz.questionByIndex().question;
        const choices = quiz.questionByIndex().choices;

        render.showQuestion(quest);

        render.showChoices(choices, (currentChoice)=>{
            quiz.questionGuess(currentChoice);
            renderPage(render, quiz);
        });

        render.showProgress(quiz.questionIndex+1 , quiz.question.length);
    }
}

