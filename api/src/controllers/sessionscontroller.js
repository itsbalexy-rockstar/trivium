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