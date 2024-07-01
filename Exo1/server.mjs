import express from 'express';
import itemsRouter from './routers/itemsRouter.js';
const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/", itemsRouter);



app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
  });