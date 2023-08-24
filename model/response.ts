export default  class ResponseModel {
	#myValue: string
	#correct: boolean
	#revealed: boolean

	constructor(value: string, correct: boolean, revealed = false) {
		this.#myValue = value
		this.#correct = correct
		this.#revealed = revealed
	}

	static rightAnswer(myValue: string) {
		return new ResponseModel(myValue, true)
	}

	static wrongAnswer(myValue: string) {
		return new ResponseModel(myValue, false)
	}

	get myValue() {
		return this.#myValue
	}
	get correct() {
		return this.#correct
	}
	get revealed() {
		return this.#revealed
	}

	toObject() {
		return {
			myValue: this.#myValue,
			correct: this.#correct,
			revealed: this.#revealed,
		}
	}
}