import { Router } from 'express'
const router = Router()
import * as questioncontroller from '../controllers/questioncontroller'
import * as sessionscontroller from '../controllers/sessionscontroller'

router.get('/questions/:categoryName', questioncontroller.getQuestion);
router.post('/sessions', sessionscontroller.createSessions)

export default router;