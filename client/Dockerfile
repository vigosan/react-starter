FROM node:latest

ENV APP /client
WORKDIR $APP

COPY package.json package-lock.json ./
RUN npm install

COPY . .

CMD ["npm", "run", "start"]
