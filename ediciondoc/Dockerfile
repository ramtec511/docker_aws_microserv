FROM node:14.18-alpine

WORKDIR /usr/src/appcuatro

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3050

CMD ["npm","run","start"]