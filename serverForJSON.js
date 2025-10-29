// Import the HTTP module
const http = require('http');
const fs = require('fs');
const cors = require('cors');
const data = fs.readFileSync('dashboard_data.json', 'utf8');

const json = JSON.parse(data);
const totalMangaTracked = json['tracking']['totalMangaTracked'];

//we need to render the data on front-end


// Create a server object
const serverForJSON = http.createServer(
    (req, res) => {
    // Set the response HTTP header with HTTP status and Content type
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Send the response body as 'Hello, World!'
    res.end('Hello, World!\n');
});

// Define the port to listen on const PORT = 3000;

// Start the server and listen on the specified port
serverForJSON.listen(3000, 'localhost', () => {
    console.log(`Server running at http://localhost:${3000}/`);
});