### Express-додаток для роботи з колекцією нотаток версія 03

Викоритсовується:

- для безпеки

```
npm i helmet
```

- бібліотека щоб працювати з базою даних https://mongoosejs.com/

```
npm install mongoose
```

- бібліотека щоб бачити всі запити, підключимо pino-http https://github.com/pinojs/pino-http?utm_source=chatgpt.com

```
npm i pino-http --save
```

- бібліотека дозволяє створювати помилки з потрібним статусом і повідомленням https://www.npmjs.com/package/http-errors?utm_source=chatgpt.com

```
npm install http-errors
```

- мову Joi для опису схем об’єктів і валідатор та celebrate це бібліотека що інтегрує Joi безпосередньо у маршрути Express https://www.npmjs.com/package/celebrate

```
npm i celebrate
```

- Використання bcrypt для безпечного хешування паролів

```
npm i bcrypt
```

- middleware cookie-parser підключаємо, так як express не парсить cookies автоматично з req

```
npm i cookie-parser
```

- функціонал відправлення листів

```
npm install nodemailer
```

- бібліотека jsonwebtoken для роботи з JWT

```
npm i jsonwebtoken
```

- Створюємо шаблон листа шаблонізатором

```
npm i handlebars
```

- middleware multer для завантаження зображень

```
npm i multer
```

- хмарний сервіс для керування зображеннями та відео

```
npm install cloudinary
```

# 📘 Swagger JSDoc README Template

Цей шаблон допоможе швидко інтегрувати Swagger JSDoc у ваш Node.js/Express проект та створювати зрозумілу документацію для API.

## 🚀 Встановлення

```bash
npm install swagger-jsdoc swagger-ui-express
```

## ⚙️ Конфігурація

```js
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Документація',
      version: '1.0.0',
      description: 'Документація для вашого проекту',
    },
    tags: [
      {
        name: 'Auth',
        description: 'User authentication endpoints',
      },
      {
        name: 'Note',
        description: 'Operations on the notes collection',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
      schemas: {
        User: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              example: '64f1c2a7e9b1d2c3a4b5c6d7',
            },
            username: {
              type: 'string',
              example: 'johndoe',
            },
            email: {
              type: 'string',
              example: 'johndoe@example.com',
            },
          },
        },
        Note: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              description: 'Unique identifier for the note (CUID string)',
              example: 'clty1kn9u0000hnq9bopx9h8b',
            },
            title: {
              type: 'string',
              description: 'The note title',
              example: 'Grocery list',
            },
            content: {
              type: 'string',
              description: 'The content of the note',
              example: 'Milk, eggs, bread',
            },
            createdAt: {
              type: 'string',
              description: 'Timestamp when the note was created',
              format: 'date-time',
              example: '2024-05-05T10:15:00Z',
            },
            updatedAt: {
              type: 'string',
              description: 'Timestamp when the note was last updated',
              format: 'date-time',
              example: '2024-05-06T12:30:00Z',
            },
            userId: {
              type: 'string',
              description: 'ID of the user who owns this note',
              example: 'clty1kn9u0000hnq9bopx9h8a',
            },
            tag: {
              type: 'array',
              Enum: 'Work, Personal, Meeting, Shopping, Ideas, Travel, Finance, Health, Important, Todo',
              example: 'Todo',
            },
          },
        },
      },
    },
  },
  apis: ['./routes/*.js'], // шлях до файлів з JSDoc-коментарями
};

const specs = swaggerJsdoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
```

## 📝 Приклад JSDoc для маршруту

```YAML

/**
 * @openapi
 * /users:
 *   get:
 *     summary: Отримати список користувачів
 *     description: Повертає масив усіх користувачів.
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *         description: Успішна відповідь
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */
```

```js
app.get('/users', (req, res) => {
  res.json([{ id: 1, name: 'Oleksandr' }]);
});
```

## 🧩 Приклад опису схеми (Model)

```YAML

/**
 * @openapi
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - id
 *         - name
 *       properties:
 *         id:
 *           type: integer
 *           description: Унікальний ID користувача
 *         name:
 *           type: string
 *           description: Ім’я користувача
 *       example:
 *         id: 1
 *         name: Oleksandr
 */

```

## 📂 Структура проекту

src/
├── config/
│ └── swagger.js
├── constants/
│ └── tags.js
│ └── time.js
├── controllers/
│ └── authController.js
│ └── notesController.js
│ └── userController.js
├── db/
│ └── connectMongoDB.js
├── docs/
│ └── auth.docs.js
│ └── notes.docs.js
│ └── user.docs.js
├── middleware/
│ └── authenticate.js
│ └── errorHandler.js
│ └── logger.js
│ └── multer.js
│ └── notFoundHandler.js
├── models/
│ └── note.js
│ └── session.js
│ └── user.js
├── routes/
│ └── authRoutes.js
│ └── notesRoutes.js
│ └── userRoutes.js
├── services/
│ └── auth.js
├── templates/
│ └── reset-password-email.js
├── utils/
│ └── saveFileToCloudinary.js
│ └── sendMail.js
├── validations/
│ └── authValidation.js
│ └── notesValidation.js
├── server.js

## 🌐 Використання

Запусти сервер:

```bash
npm run dev
```

Відкрий документацію: http://localhost:3000/api-docs

## 👥 Команда

Автор: Oleksandr Vakulin

Технології: Node.js, Express, Swagger JSDoc
