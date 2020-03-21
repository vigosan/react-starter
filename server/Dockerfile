FROM node:latest

ENV APP /server
WORKDIR $APP

COPY package.json package-lock.json ./
RUN npm install

COPY . .

CMD ["npm", "run", "start"]
