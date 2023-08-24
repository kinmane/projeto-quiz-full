import QuestionModel from "../../../model/question";
import ResponseModel from "../../../model/response";

const question: QuestionModel[] = [
	new QuestionModel(306, 'Qual bicho transmite a Doença de Chagas?', [
		ResponseModel.wrongAnswer('Abelha'),
		ResponseModel.wrongAnswer('Barata'),
		ResponseModel.wrongAnswer('Pulga'),
		ResponseModel.rightAnswer('Barbeiro'),
	]),
	new QuestionModel(202, 'Qual fruto é conhecido no Norte e Nordeste como "Jerimum"?', [
		ResponseModel.wrongAnswer('Caju'),
		ResponseModel.wrongAnswer('Côco'),
		ResponseModel.wrongAnswer('Chuchu'),
		ResponseModel.rightAnswer('Abóbora'),
	]),
]

export default question