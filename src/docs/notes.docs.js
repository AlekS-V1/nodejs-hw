/**
 * @openapi
 * /notes:
 *   get:
 *     tags:
 *       - Note
 *     summary: Get all notes
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: List of notes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   description:
 *                     type: string
 */

/**
 * @openapi
 * /notes/{noteId}:
 *   get:
 *     tags:
 *       - Note
 *     summary: Get note by ID
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
 *         description: Note found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 description:
 *                   type: string
 *       '404':
 *         description: Note not found
 */

/**
 * @openapi
 * /notes:
 *   post:
 *     tags:
 *       - Note
 *     summary: Create a note
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               description:
 *                 type: string
 *                 example: Buy a book
 *     responses:
 *       '201':
 *         description: Created
 *       '400':
 *         description: Bad Request
 */

/**
 * @openapi
 * /notes/{noteId}:
 *   delete:
 *     tags:
 *       - Note
 *     summary: Delete note by ID
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
 *         description: Note deleted successfully
 *       '404':
 *         description: Note not found
 */

/**
 * @openapi
 * /notes/{noteId}:
 *   patch:
 *     tags:
 *       - Note
 *     summary: Update note by ID
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
 *               description:
 *                 type: string
 *                 example: Updated note text
 *     responses:
 *       '200':
 *         description: Note updated successfully
 *       '400':
 *         description: Bad Request
 *       '404':
 *         description: Note not found
 */
