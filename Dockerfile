FROM node:20

WORKDIR /app

COPY package*.json ./
RUN yarn install

COPY .env ./.env

COPY . .

EXPOSE 3000

CMD ["yarn", "run", "start:dev"]
