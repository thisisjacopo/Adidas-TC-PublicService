FROM node:12

WORKDIR /publicservice

COPY package*.json ./

RUN npm install

COPY . /publicservice

EXPOSE 5000

CMD [ "npm", "run", "start:dev" ]