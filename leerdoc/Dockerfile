FROM node:14.18-alpine

WORKDIR /usr/src/apptres

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3030

CMD ["npm","run","start"]