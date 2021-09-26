import questions from '../models/questionbank'
import sessions  from '../models/sessions'

export const getQuestion = (req, res) => {
    const categoryName = req.params.categoryName
    const questionsByCategory = questions.filter((element) => {
        return element.category === categoryName;
      })
    if (questionsByCategory.length === 0){
        return res.status(422).json({status: 422, message:"Incorrect category"})
    }
    const randomNumber = (Math.floor(Math.random()*questionsByCategory.length))
    const question = questionsByCategory[randomNumber]
    return res.status(200).json({status: 200, data: {question}})
}

export const createSession = async (req, res) => {
    const { nickname, prize, round } = req.body
    const newSession = new sessions([nickname, prize, round])
    const newSessionSaved = await newSession.save()
    return res.status(201).json({status: 201, data: [newSessionSaved._id]})
}

