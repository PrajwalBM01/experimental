FROM node:20-alpine

WORKDIR /app

COPY package.json .
RUN npm install --production

COPY . .

EXPOSE 6006

CMD ["node", "server.js"]