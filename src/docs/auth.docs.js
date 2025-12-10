/**
 * @openapi
 * /auth/register:
 *   post:
 *     tags:
 *       - Auth
 *     summary: Register a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: johndoe@example.com
 *               password:
 *                 type: string
 *                 example: StrongPass123!
 *     responses:
 *       '201':
 *         description: User registered successfully
 *       '400':
 *         description: Bad Request
 */

/**
 * @openapi
 * /auth/login:
 *   post:
 *     tags:
 *       - Auth
 *     summary: User login
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Login successful, returns tokens
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 accessToken:
 *                   type: string
 *                 refreshToken:
 *                   type: string
 */

/**
 * @openapi
 * /auth/refresh:
 *   post:
 *     tags:
 *       - Auth
 *     summary: Refresh access token
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               refreshToken:
 *                 type: string
 *                 example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
 *     responses:
 *       '200':
 *         description: New access token issued
 *       '401':
 *         description: Invalid or expired refresh token
 */

/**
 * @openapi
 * /auth/logout:
 *   post:
 *     tags:
 *       - Auth
 *     summary: Logout user and invalidate session
 *     requestBody:
 *       required: false
 *     responses:
 *       '200':
 *         description: User logged out successfully
 *       '401':
 *         description: Unauthorized
 */

/**
 * @openapi
 * /auth/request-reset-email:
 *   post:
 *     tags:
 *       - Auth
 *     summary: Request password reset email
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: johndoe@example.com
 *     responses:
 *       '200':
 *         description: Reset email sent successfully
 *       '404':
 *         description: User not found
 */

/**
 * @openapi
 * /auth/reset-password:
 *   post:
 *     tags:
 *       - Auth
 *     summary: Reset user password using token
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               resetToken:
 *                 type: string
 *                 example: 123456abcdef
 *               newPassword:
 *                 type: string
 *                 example: NewStrongPass456!
 *     responses:
 *       '200':
 *         description: Password reset successfully
 *       '400':
 *         description: Invalid or expired reset token
 */
