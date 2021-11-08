// @ts-check
import { Question } from "./Question.js";

export class Quiz{
    questionIndex = 0;
    score = 0;

    /**
     * Recieve an array of Questions
     * @param {Question[]} question 
     */
    constructor(question){
        this.question = question;
    }

    /**
     * Get question object found by Index
     * @returns {Question} Return a question object 
     */
    questionByIndex(){
        return this.question[this.questionIndex];
    }

    /**
     * Verify if lenght of question and quetion index are equal
     * @returns {boolean} True if questions has ended
     */
    questionsEnded(){
        return this.question.length === this.questionIndex;
    }
    
    /**
     * Increment score and question index verifing user choice
     * @param {string} answer The user choice
     */
    questionGuess(answer){
        if(this.questionByIndex().correctAnswer(answer)){
            this.score++;
        }
        this.questionIndex++;
    }
}