const fs = require('fs');

const path = require('path');
const express = require('express');

const app = express();

app.use(express.urlencoded({extended: false}));

app.get('/currenttime', function(req, res) {
    res.send('<h1>'+ new Date().toISOString() +'</h1>');
});

app.get('/', function(req, res) {
    res.send('<form action ="/store-user" method="POST"><label>Your Name</label><input type="text" name="username"><button></button></form>');
});


app.post('/store-user', function(req, res) {
    console.log(req.body.username);
    const filePath = path.join(__dirname, 'data', 'users.json');
    const fileData = fs.readFileSync(filePath);
    const existingUsers = JSON.parse(fileData);
    existingUsers.push(req.body.username);
    fs.writeFileSync(filePath, JSON.stringify(existingUsers));
    res.send('<h1>Form Submitted</h1>');
});


app.get('/users', function(req, res) {
    const filePath = path.join(__dirname, 'data', 'users.json');
    const fileData = fs.readFileSync(filePath);
    const existingUsers = JSON.parse(fileData);
    let response = '<ul>';
    for (const user of existingUsers) {
        response += '<li>'+user+'</li>';
    }
    response += '</ul>';
    res.send(response);

});


 // localhost:3000/currenttime
app.listen(3000);

// function requestHandler(req, res) {

//     if (req.url === '/currenttime') {
//         res.statusCode = 200;
//         res.end('<h1>'+ new Date().toISOString() +'</h1>');
//     }

//     if (req.url === '/about') {
//         res.statusCode = 200;
//         res.end('<h1>About Us</h1>');
//         return;
//     }
//     if (req.url === '/contact') {
//         res.statusCode = 200;
//         res.end('<h1>Contact Us</h1>');
//         return;
//     }

//     if (req.url === '/date') {
//         res.statusCode = 200;
//         res.end('<h1>'+ new Date().toISOString() +'</h1>');
//         return;
//     }

//     res.statusCode = 200;
//     res.end('<h1>Hello World</h1>');
// }


// const server = http.createServer(requestHandler);
// server.listen(3000);

