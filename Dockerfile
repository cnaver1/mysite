# Step 1: Use the official Node.js image as the base image
FROM node:17-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN chmod -R 777  /app/node_modules/

CMD ["npm" , "run" , "dev"]

EXPOSE 8080