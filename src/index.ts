import express from 'express';


const app = express();
const PORT = process.env.PORT || 3000;

app.get('/films', (req, res) => {
  res.json([{"id": "1", "title": "JerkA, The", "original_title": "Jerk, The"}, {"id": "2", "title": "Goonies, The", "original_title": "Goonies, The"}])
})

app.get('/', (req, res) => {
  res.send(`Number five... is alive!!AB12 Port: ${PORT}.`)
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})