import fs from 'fs';
import dotenv from 'dotenv';
import express, { Application } from 'express';

dotenv.config();

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT;
const mount = async (app: Application) => {
  app.get('/health', function (_, res) {
    res.send({ status: 'pass' });
  });

  app.listen(port, () => {
    console.log(`🚀 Server is running at http://${host}:${port}`);
  });
};

mount(express());
