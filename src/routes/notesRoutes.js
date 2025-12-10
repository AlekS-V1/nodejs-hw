import { Router } from 'express';
import {
  createNote,
  deleteNote,
  getNoteById,
  getAllNotes,
  updateNote,
} from '../controllers/notesController.js';
import { celebrate } from 'celebrate';
import {
  createNoteSchema,
  getAllNotesSchema,
  noteIdSchema,
  updateNoteSchema,
} from '../validations/notesValidation.js';
import { authenticate } from '../middleware/authenticate.js';

const router = Router();

router.use('/notes', authenticate);

/**
 * @openapi
 * /notes:
 *   get:
 *     tags:
 *       - Note
 *     summary: Get all notes with optional search, filter, and pagination
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         description: Search text for note title or content
 *       - in: query
 *         name: tag
 *         schema:
 *           type: string
 *           enum:
 *             - Work
 *             - Personal
 *             - Meeting
 *             - Shopping
 *             - Ideas
 *             - Travel
 *             - Finance
 *             - Health
 *             - Important
 *             - Todo
 *         description: Filter notes by tag
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         description: Page number
 *       - in: query
 *         name: perPage
 *         schema:
 *           type: integer
 *           default: 10
 *         description: Notes per page
 *     responses:
 *       '200':
 *         description: List of notes
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 notes:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         example: clty1kn9u0000hnq9bopx9h8b
 *                       title:
 *                         type: string
 *                         example: Grocery list
 *                       content:
 *                         type: string
 *                         example: Milk, eggs, bread
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                         example: 2024-05-05T10:15:00Z
 *                       updatedAt:
 *                         type: string
 *                         format: date-time
 *                         example: 2024-05-06T12:30:00Z
 *                       userId:
 *                         type: string
 *                         example: clty1k1230000hnq9bopx9h8a
 *                       tag:
 *                         type: string
 *                         enum:
 *                           - Work
 *                           - Personal
 *                           - Meeting
 *                           - Shopping
 *                           - Ideas
 *                           - Travel
 *                           - Finance
 *                           - Health
 *                           - Important
 *                           - Todo
 *                         example: Todo
 *                 totalPages:
 *                   type: integer
 *                   example: 5
 *       '401':
 *         description: Unauthorized — missing or invalid access token
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     example: Unauthorized
 */

router.get('/notes', celebrate(getAllNotesSchema), getAllNotes);

/**
 * @openapi
 * /notes/{noteId}:
 *   get:
 *     tags:
 *       - Note
 *     summary: Get a single note by ID
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: noteId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the note
 *     responses:
 *       '200':
 *         description: The note
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: clty1kn9u0000hnq9bopx9h8b
 *                 title:
 *                   type: string
 *                   example: Grocery list
 *                 content:
 *                   type: string
 *                   example: Milk, eggs, bread
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: 2024-05-05T10:15:00Z
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   example: 2024-05-06T12:30:00Z
 *                 userId:
 *                   type: string
 *                   example: clty1k1230000hnq9bopx9h8a
 *                 tag:
 *                   type: string
 *                   example: Todo
 *       '404':
 *         description: Note not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Note not found
 */

router.get('/notes/:noteId', celebrate(noteIdSchema), getNoteById);

/**
 * @openapi
 * /notes:
 *   post:
 *     tags:
 *       - Note
 *     summary: Create a new note
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: Title your note
 *               content:
 *                 type: string
 *                 example: Text your note
 *               tag:
 *                 type: string
 *                 example: Work
 *     responses:
 *       '201':
 *         description: Created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: clty1kn9u0000hnq9bopx9h8b
 *                 title:
 *                   type: string
 *                   example: Grocery list
 *                 content:
 *                   type: string
 *                   example: Milk, eggs, bread
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: 2024-05-05T10:15:00Z
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   example: 2024-05-06T12:30:00Z
 *                 userId:
 *                   type: string
 *                   example: clty1k1230000hnq9bopx9h8a
 *                 tag:
 *                   type: string
 *                   example: Todo
 *       '400':
 *         description: Validation error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Title is required
 *       '401':
 *         description: Unauthorized — missing or invalid access token
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Unauthorized
 */

router.post('/notes', celebrate(createNoteSchema), createNote);

/**
 * @openapi
 * /notes/{noteId}:
 *   delete:
 *     tags:
 *       - Note
 *     summary: Delete a note by ID
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: noteId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the note
 *     responses:
 *       '200':
 *         description: Updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: clty1kn9u0000hnq9bopx9h8b
 *                 title:
 *                   type: string
 *                   example: Grocery list
 *                 content:
 *                   type: string
 *                   example: Milk, eggs, bread
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: 2024-05-05T10:15:00Z
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   example: 2024-05-06T12:30:00Z
 *                 userId:
 *                   type: string
 *                   example: clty1k1230000hnq9bopx9h8a
 *                 tag:
 *                   type: string
 *                   example: Todo
 *       '403':
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Unauthorized to update this note
 *       '404':
 *         description: Note not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Note not found
 */

router.delete('/notes/:noteId', celebrate(noteIdSchema), deleteNote);

/**
 * @openapi
 * /notes/{noteId}:
 *   patch:
 *     tags:
 *       - Note
 *     summary: Update an existing note by ID
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: noteId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the note
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: Updated Title
 *               content:
 *                 type: string
 *                 example: Updated content here
 *               tag:
 *                 type: string
 *                 example: Work
 *     responses:
 *       '200':
 *         description: Updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: clty1kn9u0000hnq9bopx9h8b
 *                 title:
 *                   type: string
 *                   example: Grocery list
 *                 content:
 *                   type: string
 *                   example: Milk, eggs, bread
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: 2024-05-05T10:15:00Z
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   example: 2024-05-06T12:30:00Z
 *                 userId:
 *                   type: string
 *                   example: clty1k1230000hnq9bopx9h8a
 *                 tag:
 *                   type: string
 *                   example: Todo
 *       '403':
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Unauthorized to update this note
 *       '404':
 *         description: Note not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Note not found
 */

router.patch('/notes/:noteId', celebrate(updateNoteSchema), updateNote);

export default router;
