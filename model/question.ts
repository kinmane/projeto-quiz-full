import ResponseModel from "./response";

export default class QuestionModel {
	#id: number
	#statement: string
	#response: ResponseModel[]
	#correctAnswer: boolean

	constructor(id: number, statement: string, response: ResponseModel[], correctAnswer = false) {
		this.#id = id
		this.#statement = statement
		this.#response = response
		this.#correctAnswer = correctAnswer
	}

	get id() {
		return this.#id
	}
	get statement() {
		return this.#id
	}
	get response() {
		return this.#id
	}
	get correctAnswer() {
		return this.#id
	}
	get answered() {
		for (let response of this.#response) {
			if (response.revealed) return true
		}
		return false
	}

	toObject() {
		return {
			id: this.#id,
			statement: this.#statement,
			response: this.#response.map(resp => resp.toObject()),
			correctAnswer: this.#correctAnswer,
		}
	}
}