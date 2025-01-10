const express = require('express')
const mongoose = require('mongoose');
const port = 3000
const productRouter = require("./routes/productRoute")
const dotenv = require("dotenv")
dotenv.config()
const DB_URL = process.env.DB_URL;
const PORT = process.env.PORT || 3000


const app = express()
app.use(express.json())
app.use("/product", productRouter)


mongoose.connect(DB_URL)
.then(() => {console.log('Connected!')
    app.listen(PORT, () => {
      console.log(`Example app listening on port ${PORT}, url is http://localhost:${PORT}`
        
      )
    })

  });