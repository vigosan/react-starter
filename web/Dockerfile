FROM node:alpine

ENV APP /web
WORKDIR $APP

COPY package.json package-lock.json ./
RUN npm install

COPY . .

CMD ["npm", "run", "start"]
