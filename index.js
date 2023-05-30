const express = require('express')
const app = express()
const cors = require("cors");
const port = process.env.PORT ||3000

const chefs = require("./data/ChefsData.json");


app.use(cors());


app.get('/', (req, res) => {
  res.send('Hello World!')
})

// all data api 
app.get("/chefs", (req, res) => {
  res.send(chefs);
});

// single chef data collection 
app.get("/chefs/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const singleData = chefs.find((chef) => chef.id === id);
  res.send(singleData);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


