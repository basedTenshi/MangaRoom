import express from 'express';
import cors from 'cors';
import startDatabase from './database.js';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// req.params, get what's being requested such as "user_id" then pass it as argument to the startDatabase async function and retrieve the promise data
// through then()
app.get('/', (req, res) => {
    const totalMangaTrackedResponse = startDatabase('manga_count').then(data => {res.send(data)});
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})



