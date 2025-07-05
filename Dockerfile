FROM node:24-alpine

WORKDIR /app
COPY . .

RUN npm install

EXPOSE 3000

CMD ["sh", "-c", "npm run build && npm run start"]