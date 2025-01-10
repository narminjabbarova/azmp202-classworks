const express = require('express')
const mongoose = require('mongoose')

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const { Schema } = mongoose;

const blogSchema = new Schema({
  title: String, 
  author: String,
  body: String,
 
});

const blogModel = mongoose.model("blog", blogSchema);

app.get("/blog", async(req,res)=>{
  const blogs = await blogModel.find()
  res.send(blogs)
})

app.delete("/blog/:id", async(req,res)=>{
  const {id} = req.params;

  try {
    const deletedBlog = await blogModel.findByIdAndDelete(id)
    if(deletedBlog){
      res.status(200).send({message:'blog deleted successfully', deletedBlog})
    } else{
      res.status(400).send({message:'blog not found'})
    }
  } catch (error) {
    res.status(500).send({ message: 'Error deleting the blog', error });  
  }
})










mongoose.connect('mongodb+srv://narminjabbar:narmin2005@cluster0.qce9h.mongodb.net/')
  .then(() => console.log('Connected!'));