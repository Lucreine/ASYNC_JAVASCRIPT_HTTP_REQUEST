import express from 'express';

const port = 3000
const app = express();

app.get("/", (req, res) => {
  res.send("Hello on my web server, this is the second exercice");
});

app.listen(port, ()=>{
  console.log(`server started on port http://localhost:${port}`)
});