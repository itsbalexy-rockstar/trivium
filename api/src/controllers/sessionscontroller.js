import sessions  from '../models/sessions'

export const createSessions = async (req, res) => {
    const sessionEmpty = {
        nickname: "",
        prize: 0,
        round: []
    }
    const { nickname, prize, round } = sessionEmpty
    const newSession = new sessions([nickname, prize, round])
    const newSessionSaved = await newSession.save()
    return res.status(201).json({status: 201, data: [{sessionId: newSessionSaved._id}]})
}