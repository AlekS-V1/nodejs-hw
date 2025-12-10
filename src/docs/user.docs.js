/**
 * @openapi
 * /users/me/avatar:
 *   patch:
 *     tags:
 *       - User
 *     summary: Update the current user's avatar
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               avatar:
 *                 type: string
 *                 format: binary
 *                 description: Image file to upload as avatar
 *     responses:
 *       '200':
 *         description: Avatar updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Avatar updated
 *                 avatarUrl:
 *                   type: string
 *                   example: https://cdn.example.com/avatars/user123.png
 *       '400':
 *         description: Bad Request (invalid file format or missing file)
 *       '401':
 *         description: Unauthorized (missing or invalid token)
 */
