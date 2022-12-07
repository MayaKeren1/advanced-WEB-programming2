import express from 'express';
import data from './data.js';
import mongoose from 'mongoose';

import seedRouter from './routes/seedRoutes.js';
import productRouter from './routes/productRoutes.js';



mongoose
  .connect('mongodb+srv://pro:DDwiYcBcxZDXEHDR@cluster0.iqfprtk.mongodb.net/projectWeb2')
  .then(() => {
    console.log('connected to db');
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();
app.use('/api/seed', seedRouter);
app.use('/api/products', productRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
