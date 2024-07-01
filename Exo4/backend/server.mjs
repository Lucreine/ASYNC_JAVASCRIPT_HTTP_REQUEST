import express from 'express';
import exoFourRouter from './Routers/exerciceFour-router.mjs';

const port = 3000
const app = express();

app.get("/", (req, res) => {
  res.send("Hello on my web server, this is the four exercice");
});

app.use(express.json({limit: "50mb"}));
app.use("/api/", exoFourRouter);

app.listen(port, ()=>{
  console.log(`server started on port http://localhost:${port}`)
});