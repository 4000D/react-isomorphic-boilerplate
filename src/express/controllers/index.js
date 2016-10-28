import express from 'express'

import todos from './TodoController'

const router = express.Router()

// /api/{...}
router.use('/todos', todos)

export default router
