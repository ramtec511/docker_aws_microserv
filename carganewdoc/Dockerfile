FROM node:14.18-alpine

WORKDIR /usr/src/appdos

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3010

CMD ["npm","run","start"]