require('dotenv').config();

import express, { Application } from 'express';

const host = process.env.HOST;
const port = process.env.PORT;

const mount = async (app: Application) => {
  app.get('/health', function(req, res) {
    res.send({ status: 'pass' });
  });

  app.listen(port, () => {
    console.log(`🚀 Server is running at http://${host}:${port}`);
  });
};

mount(express());
