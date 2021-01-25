const mysql = require('mysql');
const express = require('express');

const app = express();

//Create connection with mysql

const mysqlConnection = mysql.createConnection({
      host : "127.0.0.1",
      user : "root",
      password : "admin",
      database : "ademo"

});

//Connect with db

mysqlConnection.connect((err) => {
      if(err){
            console.log('Database Error', err);
      }
      else{
            console.log('Mysql connected...');
      }
})



app.listen('3000', () => {
      console.log('Server started on port 3000');
})


//Create DB

app.get('/addPost', (req, res) => {
      let post = {title : "Post One", body : "This is post number one"};
      let sql = 'INSERT INTO student SET ?';
      let query = db.query(sql, post, (err, result) => {
            if(err){
                  throw err;
            }
            else{
                  res.send('Data Inserted');
            }
      })
})

app.get('/getPosts', (req, res) => {
      // let post = {title : "Post One", body : "This is post number one"};
      let sql = 'SELECT * FROM student';
      let query = db.query(sql, (err, result) => {
            if(err){
                  throw err;
            }
            else{
                  console.log('SQL Result', result);
                  res.send('Posts Fetched...');
            }
      })
})

app.get('/getPost/:id', (req, res) => {
      // let post = {title : "Post One", body : "This is post number one"};
      let sql = `SELECT * FROM posts WHERE id = ${req.params.id}`;
      let query = db.query(sql, (err, result) => {
            if(err){
                  throw err;
            }
            else{
                  console.log('SQL Result', result);
                  res.send('Posts Fetched...');
            }
      })
})

app.get('/updatePost/:id', (req, res) => {
      // let post = {title : "Post One", body : "This is post number one"};
      let newTitle = "Post Two";
      let sql = `UPDATE posts SET title = "${newTitle}" WHERE id = ${req.params.id}`;
      console.log('SQL Query', sql);
      let query = db.query(sql, (err, result) => {
            if(err){
                  throw err;
            }
            else{
                  console.log('SQL Result', result);
                  res.send('Post Updated...');
            }
      })
})

app.get('/deletePost/:id', (req, res) => {
      // let post = {title : "Post One", body : "This is post number one"};
      let sql = `DELETE FROM posts WHERE id = ${req.params.id}`;
      let query = db.query(sql, (err, result) => {
            if(err){
                  throw err;
            }
            else{
                  console.log('SQL Result', result);
                  res.send('Posts Deleted...');
            }
      })
})

 app.get('/getUsers/:name', (req, res) => {
      // let post = {title : "Post One", body : "This is post number one"};
      let sql = `SELECT d.*, u.* FROM departments AS d LEFT JOIN users AS u ON u.id = d.user_id WHERE d.department = "${req.params.name}"`;
      let query = db.query(sql, (err, result) => {
            if(err){
                  throw err;
            }
            else{
                  console.log('SQL Result', result);
                  res.send('Users Fetched...');
            }
      })
})
