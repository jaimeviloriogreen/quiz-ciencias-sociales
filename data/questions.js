import { Question } from "../models/Question.js";
import { data } from "./data.js";

export const question = data.map(qst => new Question(qst.question, qst.choices, qst.answer));

