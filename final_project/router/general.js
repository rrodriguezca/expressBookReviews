const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();
public_users.use(express.json());

public_users.post("/register", (req,res) => {
  let usr = req.query.username;
  let pwd = req.query.password;
  if (!usr | !pwd) {
    return res.status(400).json("Please enter a username and password.");
  }
  var unq = true;
  for (var user in users) {
      if (user["username"]===usr) {
          unq = false;
      }
  }
  if (unq) {
      users.push({"username": usr, "password": pwd})
      return res.status(300).json({message: "User sucessfully registered."});
  }
  else {return res.status(400).json({message: "User already registered previously."});}
});

// Get the book list available in the shop
public_users.get('/',function (req, res) {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn',function (req, res) {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
 });
  
// Get book details based on author
public_users.get('/author/:author',function (req, res) {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

// Get all books based on title
public_users.get('/title/:title',function (req, res) {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

module.exports.general = public_users;
