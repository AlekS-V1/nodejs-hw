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
