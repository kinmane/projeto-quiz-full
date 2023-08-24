import question from "../questionDatabase";

export default (req, res) => {
	const idSelected = +req.query.id

	const uniqueQuestion = question.filter(question => question.id === idSelected)

	if(uniqueQuestion.length === 1) {
		const selectQuestion = uniqueQuestion[0]
		res.status(200).json(selectQuestion.toObject())
	} else {
		res.status(204).send()
	}

	res.status(200).json(question[0].toObject())
}
