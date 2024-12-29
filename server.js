const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs');
const db = require('./database/db');
const bodyParser = require('body-parser');
const userRoute = require('./routes/usersRoutes');
require('dotenv').config();

const port = process.env.PORT || 3008;

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res)=>{
    res.send("hi i'm ready to serve");
});

app.route('/api/users/:id').get((req, res) => {
    const id = parseInt(req.params.id);

    const user = users.find(user => user.id === id);
    if (user) {
        return res.json(user);
    }else{
        return res.status(404).send('User not found');
    }
}).put((req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(user => user.id === id);
    if (user) {
        user.first_name = req.body.first_name;
        user.last_name = req.body.last_name;
        user.email = req.body.email;
        user.gender = req.body.gender;
        user.job_title = req.body.job_title;
        return res.json(user);
    }else{
        return res.status(404).send('User not found');
    }
});


app.post('/api/users', (req, res) => {
    const body = req.body;
    users.push({id: users.length + 1, ...body});
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
        return res.status(200).send('User added successfully');
    });
    return res.send('Error adding user');
});



app.get('/api/users', (req, res) => {
    return res.json(users);
});

app.get('/users', (req, res) => {
    const html = `
    <ul>
        ${users.map(user =>    `<li>${user.first_name} ${user.last_name}</li>`).join('')}
    </ul>
    `;
    res.send(html);
});

app.use('/api/v2/', userRoute);

app.listen(port, () =>{
    console.log("Server is running on port 3000");
});


