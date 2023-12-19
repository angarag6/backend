import express from "express";

const express = require("express");
const port = 8001;
const app = express();
const users = [ 
  {
  id: 1,
  name: "an",
},
{
  id: 2,
  name: "nak",
},
{
  id: 3,
  name: "ko",
},
]
app.get("/", (req, res) => {
  res.send({success:true, users: users}).end();
});
app.post("/", (req, res) => {
  res.send({success:true, users: users}).end();
});
app.put("/", (req, res) => {
  res.send({success:true, method: 'put'}).end();
});
app.listen(port, () => {
  console.log("hh");
});
