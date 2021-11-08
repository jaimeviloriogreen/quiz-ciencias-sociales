//@ts-check
export class Render{
    /**
     * Render questions
     * @param {string} quest Question to render
     */
    showQuestion(quest){
        const questionTitle = document.querySelector(".quiz__questions");
        questionTitle.textContent = quest;
    }

    /**
     * Render choices
     * @param {string[]} choices Choices of every questions
     */
    showChoices(choices, callback){
        const choicesContainer = document.querySelector(".quiz__choices");

        this.clearHTML(choicesContainer);

        for(let i = 0; i < choices.length; i++){
            const button = document.createElement("button");
            button.className = "quiz__buttons";
            button.dataset.option = `${i}`;
            button.textContent = choices[i];

            button.addEventListener("click", ()=> callback(button.dataset.option));

            choicesContainer.append(button);
            
        }
    }

    /**
     * Render de score and the length of Question Object
     * @param {number} score The final score
     * @param {number} length length of Question Object
     */
    showScore(score, length){
        const quiz = document.querySelector(".quiz");
        const choicesContainer = quiz.querySelector(".quiz__choices");

        const div = document.createElement("div");
        const h2 = document.createElement("h2");
        
        div.className = "score";
        h2.className = "score__title";
        h2.textContent = "Score";

        div.append(h2);

        div.dataset.score = `${score}/${length}`;
        this.clearHTML(choicesContainer);
        quiz.removeChild(quiz.childNodes[5]);

        //@ts-ignore
        quiz.childNodes[10].style.visibility = "hidden";

        choicesContainer.append(div);
    }

    /**
     * Show the progress of the quiz
     * @param {number} x Current question
     * @param {number} y Total questions
     */
    showProgress(x,y){
        const footer = document.querySelector(".quiz__footer");
        const current = footer.querySelector(".quiz__x");
        const total = footer.querySelector(".quiz__y"); 

        current.textContent = `${x}`;
        total.textContent = `${y}`;

    }

    /**
     * Clean the HTML element of a container
     * @param {Element} element An HTML Element
     */
    clearHTML(element){
        while(element.lastElementChild){
            element.removeChild(element.lastElementChild)
        }
    }
}