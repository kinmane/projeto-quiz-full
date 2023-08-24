export default class QuestionModel {
	#id: number;
	#statement: string;
	#response: any[]
	#correctAnswer: boolean
	// #answered: boolean

	constructor(id: number, statement: string, response: any[], correctAnswer = false) {
		this.#id = id;
		this.#statement = statement;
		this.#response = response;
		this.#correctAnswer = correctAnswer;
		// this.#answered = false;
	}
}