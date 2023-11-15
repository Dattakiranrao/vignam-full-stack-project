const connectToMongo = require('./db')
const express = require('express')
const cors = require('cors')
connectToMongo();

const app = express()
const port = 8000
app.use(cors())
app.use(express.json())

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// Available Routes
app.use('/api', require('./routes/class'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

