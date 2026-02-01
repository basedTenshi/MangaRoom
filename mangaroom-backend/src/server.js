import express from 'express';
import cors from 'cors';
import { startDatabase} from './database.js';


const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// API Endpoints
// Uses the get method on the app object, which receives the request from the client
// The main deciding factor for which API Endpoints would be called is the request URL which is the one with "/"
// After the endpoints receives them, an imported startDatabase function is initialized to retrieve data

app.get("/totalMangaTracked", (req, res) => {
    const totalMangaTrackedResponse = startDatabase('manga_count').then(data => {res.send(data)});
})

app.get("/totalChaptersRead", (req, res) => {
    const totalChaptersRead = startDatabase('manga_chapters_count').then(data => {res.send(data)})
})

app.get("/userAveragePace", (req, res) => {
    const userAveragePace = startDatabase('user_average_pace').then(data => {res.send(data)})
})

app.get("/paceMangaTitle", (req, res) => {
    const paceMangaTitle = startDatabase('pace_manga_title').then(data => {res.send(data)})
})

app.get("/userPredictedFinish", (req, res) => {
    const userPredictedFinish = startDatabase('user_predicted_finish').then(data => {res.send(data)})
})

app.get("/userTargetPace", (req, res) => {
    const userTargetPace = startDatabase('user_target_pace').then(data => {res.send(data)})
})

app.get("/userPredictedAverage", (req, res) => {
    const userPredictedAverage = startDatabase('user_predicted_average').then(data => {res.send(data)})
})

app.get("/userMangaStatus", (req, res) => {
    const userMangaStatus = startDatabase('user_manga_status').then(data => {res.send(data)})
})


app.post("/startSession", async(req, res) => {
    const getEmail = req.body.Email;
    const getPass = req.body.Password;
    let sessionConfirmation;


    async function initChecking() {
        const checkAccount = await startDatabase('user_information', getEmail, getPass)

        const accountExists =
            {
                "Entered Email": getEmail,
                "Entered Password": getPass,
                "Checked Email": checkAccount['email'],
                "Checked Password": checkAccount['password']
            }

        if (accountExists["Checked Email"] === accountExists["Entered Email"] && accountExists["Checked Password"] === accountExists["Entered Password"]) {
            sessionConfirmation = true
        }
        else {
            sessionConfirmation = false
        }

        if (sessionConfirmation === true) {
            res.status(200).json(
                {"access": true, "message": "Log-in successful!" }
            )
        }
        else {
            res.status(401).json(
                {"access": false, "message": checkAccount}
            )
        }
    }

    await initChecking()

})

app.post("/signUpAccount", async(req, res) => {
    const getUsername = req.body.Username;
    const getEmail = req.body.Email;
    const getPassword = req.body.Password;

    const createAccount = await startDatabase('sign_up', getUsername, getEmail, getPassword);


    res.json(createAccount[0])
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})



