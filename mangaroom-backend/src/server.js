import express from 'express';
import startDatabase from './database.js';

const app = express();
const port = 3000;

// req.params, get whats being requested such as "user_id" then pass it as argument to the startDatabase async function and retrieve the promise data
// through then()
app.get('/', (req, res) => {
    const database = startDatabase(req.params).then(data => {res.json(data)});
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})



