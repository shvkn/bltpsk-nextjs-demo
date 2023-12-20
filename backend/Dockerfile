FROM node:16-alpine as builder

WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .

RUN npm ci --omit=dev
COPY . .

EXPOSE 3001
CMD ["node", "server.js"]