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

export const createSession = async (req, res) => {
    const { nickname, prize, round } = req.body
    const newSession = new sessions([nickname, prize, round])
    const newSessionSaved = await newSession.save()
    return res.status(201).json({status: 201, data: [newSessionSaved._id]})
}

export const updateSession = (req, res) => {
    const sessionId = req.params.sessionId
    const options = req.body
    const questionId = options.questionId
    const answerId = options.answerId
    // const respuesta = {
    //     sessionId: sessionId,
    //     questionId: options.questionId,
    //     answerId: options.answerId
    // }
    // const respuesta2 = {
    //     sessionId,
    //     questionId,
    //     answerId
    // }
    // return res.send({
    //     respuesta,
    //     respuesta2
    // })
    const errorStatus = 411
    if (questionId === ""){
        return res.status(411).json({
            status: errorStatus,
            message: "questionId field is required"
        })
    }
    if (answerId === ""){
        return res.status(411).json({
            status: errorStatus,
            message: "answerId field is required"
        })
    }
    const questionIdValidation = questionId <= 1 && questionId >= 50
    if (questionIdValidation){
        return res.status(400).json({
            status: 404,
            message: "questionId is not found"
        })
    }
    

    // const { userId, questionId, answerId } = req.body
    // if (userId === ""){
    //     return res.status(411).json({status: 411, message:"userId field is required"})
    // }
    // if (questionId === ""){
    //     return res.status(411).json({status: 411, message:"questionId field is required"})
    // }
    // if (answerId === ""){
    //     return res.status(411).json({status: 411, message:"answerId field is required"})
    // }
    // const question = questions.find((element) => {
    //     return element.id === questionId;
    //   })
    // if (question.length === 0){
    //     return res.status(404).json({status: 404, message:"question not found"})
    // }
    // const answer = question.options.find((element) => {
    //     return element.id === answerId
    // })
    // if (answer.length === 0){
    //     return res.status(404).json({status: 404, message:"answer not found"})
    // }
    // sessions.rounds = [
    //      {
    //          "question": questionId,
    //          "answer": answerId,
    //          "correct": answer.correct
    //      }
    //  ]
//      const sessionId = req.params.sessionId
//      sessions.findOneAndUpdate({ _id: sessionId }, {
//          $set: [sessions.rounds]
//      },(err, info)=>{
//          if (err){
//              return res.json({
//                  resultado: false,
//                  msg: 'No se pudo modificar el cliente',
//                  err
//              })
//          } else{
//              return res.json({
//                  resultado: true,
//                  info: [sessions.rounds]
//              })
//          }
//      })
}