import express, { request, response } from 'express';
import bp from 'body-parser';
import mongoose, { get, mongo } from 'mongoose';
import Url from './Schema/Url.js'
import dotenv from dotenv
const PORT = 8000;
const MONGODB_URL = 'mongodb+srv://admin:1234@cluster0.bbg8bpy.mongodb.net/?retryWrites=true&w=majority'

const app = express();
app.use(bp.json());

app.get('/' , async (request,response) => {
  const res = await Url.find();
  response.send({success:true,res}).end();
})

app.post('/' , async (request,response) => {
  const newUrl = await Url.create(request.body);
  response.send({success:true,urls:newUrl}).end();
})


app.listen(PORT, async () => {
  try {
    await mongoose.connect(MONGODB_URL);
  } catch (error) {
    console.log('error');
  }
  console.log('connected');
})