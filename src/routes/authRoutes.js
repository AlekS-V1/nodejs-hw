import { celebrate } from 'celebrate';
import { Router } from 'express';
import {
  loginUserSchema,
  registerUserSchema,
  requestResetEmailSchema,
  resetPasswordSchema,
} from '../validations/authValidation.js';
import {
  loginUser,
  logoutUser,
  refreshUserSession,
  registerUser,
  requestResetEmail,
  resetPassword,
} from '../controllers/authController.js';

const router = Router();

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
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  email:
 *                    type: string
 *                    example: user@example.com
 *                  password:
 *                    type: string
 *                    example: password123
 *       '400':
 *         description: User already exists
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: User exists
 */

router.post('/auth/register', celebrate(registerUserSchema), registerUser);

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
 *                 example: user@example.com
 *               password:
 *                 type: string
 *                 example: password123
 *     responses:
 *       '200':
 *         description: Login successful, returns tokens
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  username:
 *                    type: string
 *                    example: user@example.com
 *                  email:
 *                    type: string
 *                    example: user@example.com
 *                  avatar:
 *                    type: string
 *                    example: https://example.com/avatar.jpg
 *       '401':
 *         description: Invalid credentials or user not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Invalid credentials
 */

router.post('/auth/login', celebrate(loginUserSchema), loginUser);

/**
 * @openapi
 * /auth/refresh:
 *   post:
 *     tags:
 *       - Auth
 *     summary: Refresh the current session tokens
 *     responses:
 *       '200':
 *         description: Tokens refreshed successfully
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  example: Session refreshed successfully
 *       '400':
 *         description: No active session found
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  example: No active session found
 *       '401':
 *         description: Invalid or expired refresh token
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  example: Invalid or expired token
 */

router.post('/auth/refresh', refreshUserSession);

/**
 * @openapi
 * /auth/logout:
 *   post:
 *     tags:
 *       - Auth
 *     summary: Logout user and invalidate session
 *     responses:
 *       '200':
 *         description: Successfully logged out
 *       '400':
 *         description: No active session found
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  example: No active session found
 */

router.post('/auth/logout', logoutUser);

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

router.post(
  '/auth/request-reset-email',
  celebrate(requestResetEmailSchema),
  requestResetEmail,
);

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
 *               password:
 *                 type: string
 *                 example: NewStrongPass456!
 *     responses:
 *       '200':
 *         description: Password reset successfully
 *       '400':
 *         description: Invalid or expired reset token
 */

router.post(
  '/auth/reset-password',
  celebrate(resetPasswordSchema),
  resetPassword,
);

export default router;
