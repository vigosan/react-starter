FROM node:latest

RUN apt-get update && \
    apt-get install -y \
    libgtk2.0-0 \
    libnotify-dev \
    libgconf-2-4 \
    libnss3 \
    libxss1 \
    libasound2 \
    xvfb

ENV E2E /e2e
WORKDIR $E2E

COPY package.json package-lock.json ./
RUN npm install

COPY . .

CMD ["cypress", "verify"]
