import questions from '../models/questionbank'
import sessions  from '../models/sessions'

export const createSessions = async (req, res) => {
    const { userId } = req.body
    if (userId === ""){
        return res.status(411).json({status: 411, message:"userId field is required"})
    }
    const newSession = new sessions({userId, prize:0, rounds:[]})
    const newSessionSaved = await newSession.save()
    return res.status(202).json({status: 202, data: {sessionId: newSessionSaved._id}})
}

export const patchSessions = (req, res) => {
    const { userId, questionId, answerId } = req.body
    if (userId === ""){
        return res.status(411).json({status: 411, message:"userId field is required"})
    }
    if (questionId === ""){
        return res.status(411).json({status: 411, message:"questionId field is required"})
    }
    if (answerId === ""){
        return res.status(411).json({status: 411, message:"answerId field is required"})
    }
    const question = questions.find((element) => {
        return element.id === questionId;
      })
    if (question.length === 0){
        return res.status(404).json({status: 404, message:"question not found"})
    }
    const answer = question.options.find((element) => {
        return element.id === answerId
    })
    if (answer.length === 0){
        return res.status(404).json({status: 404, message:"answer not found"})
    }
    newSession.rounds = [
        {
            "question": questionId,
            "answer": answerId,
            "correct": answer.correct
        }
    ]
}