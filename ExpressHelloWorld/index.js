console.log("Express Hello World Web Server");

const express = require('express');

const app = express();

app.get('/', function(request, response) {

    response.send("<h1>Express HW Web Server</h1>");
});

app.listen(3000, function() {
    console.log("Web Server Listening on port 3000");
});



