# bltpsk-nextjs-demo
Демо – проект на фреймфорке Next.js + Redux (RTK Query).

### 1. Установка
```bash
git clone git@github.com:shvkn/bltpsk-nextjs-demo.git

cd bltpsk-nextjs-demo
```

### Запуск с Docker Сompose
```bash
docker compose up
```
Проект будет доступен по адресу http://localhost:3000/

### 2. Зависимости
```bash
npm ci
```

### 3. Запуск без Docker
Launch backend server
```bash
cd backaend
npm ci
node server.js
cd ..
```
Launch frontend
```bash
npm run build
npm run start
```

### Технологии
- [Typescript](https://expressjs.com) - Strongly typed programming language
- [Next.js](https://nextjs.org/) - React web framework
- [Node.js](https://nodejs.org/en) - JavaScript runtime environment
- [Express.js](https://expressjs.com) - Web framework for Node.js
- [Eslint](https://eslint.org) -  Tool for identifying and reporting on patterns found in ECMAScript/JavaScript code
- [Prettier](https://prettier.io) - Code formatter