export class Question{
    /**
     * Generate question objects.
     * @param {string} question This is the text of the questions
     * @param {string[]} choices These are the choices
     * @param {string} answer This is the correct answer
     */
    constructor(question, choices, answer){
        this.question = question;
        this.choices = choices;
        this.answer = answer;
    }
    /**
     * Verify if the choice is the correct answer
     * @param {string} choice The choice to guess the correct answer
     * @returns {boolean} Return True if the answer is correct
     */
    correctAnswer(choice){
        return this.answer == choice;
    }
}







