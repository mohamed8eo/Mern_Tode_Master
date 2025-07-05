import express from 'express';
import { createTodo, getTodos, updateTodo, deleteTodoById , getTodoById} from '../controllers/todo.controllers.js';
// import { requireAuth } from '@clerk/express';

const router = express.Router();

router.get('/', getTodos);
router.post('/', createTodo);
router.get('/:id', getTodoById);
router.delete('/:id', deleteTodoById);
router.put('/:id', updateTodo);

export default router;
