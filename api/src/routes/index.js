import { Router } from 'express'

const router = Router()

router.get('/status', (req, res) => res.send('OK Brayan'));

export default router;