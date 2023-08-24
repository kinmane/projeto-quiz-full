export default  class ResponseModel {
	#myValue: string
	#correct: boolean
	#revealed: boolean

	constructor(value: string, correct: boolean, revealed = false) {
		this.#myValue = value;
		this.#correct = correct;
		this.#revealed = revealed;
	}

	get myValue() {
		return this.#myValue;
	}
	get correct() {
		return this.#correct;
	}
	get revealed() {
		return this.#revealed;
	}
}