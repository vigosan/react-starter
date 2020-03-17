FROM cypress/base:10

ENV E2E /e2e
WORKDIR $E2E

COPY package.json package-lock.json ./
RUN npm install

COPY . .

CMD ["npm", "t"]

