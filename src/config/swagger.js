import swaggerJSDoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.1.0',
    info: {
      title: 'NotesHub Manager API',
      description: 'API for managing notes and user authentication',
      version: '1.0.0',
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
              type: 'string',
              description: 'Category tag assigned to the note',
              enum: [
                'Work',
                'Personal',
                'Meeting',
                'Shopping',
                'Ideas',
                'Travel',
                'Finance',
                'Health',
                'Important',
                'Todo',
              ],
              example: 'Todo',
            },
          },
          required: ['id', 'title', 'createdAt', 'updatedAt', 'userId', 'tag'],
        },
      },
    },
  },
  apis: ['./src/docs/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
