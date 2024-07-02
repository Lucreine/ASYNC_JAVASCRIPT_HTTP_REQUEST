import express from 'express';
import exoFourRouter from './Routers/exerciceFour-router.mjs';
import cors from 'cors';

const port = 4000
const app = express();

app.get("/", (req, res) => {
  res.send("Hello on my web server, this is the four exercice");
});

app.use(express.json());
app.use(cors());

app.use("/", exoFourRouter);

app.listen(port, ()=>{
  console.log(`server started on port http://localhost:${port}`)
});