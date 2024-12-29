const express = require('express');
const router = express.Router();
const app = express();
const users = require('../models/Users');

router.post('/users', async (req, res) => {
    try{
        const data = req.body;
        const User = new users(data);
        const response = await User.save()
        if(response) return res.status(200).send('User added successfully');
    }catch(e){
        console.error(e);
        return res.status(500).send('Server Error');
    }
});

router.get('/users', async (req, res) => {
    try{
        const response = await users.find({});
        if(response) return res.status(200).json(response);
    }catch(err){
        console.error(err);
        return res.status(500).send('Server Error');
    }
});

router.get('/users/:workType', async (req, res) => {
    try{
        const workType = req.params.workType;
        if(workType === 'IT' || workType === 'Manager' || workType === 'HR' || workType === 'Research Associate'){
            const response = await users.find({job_title: workType});
            if(response) return res.status(200).json(response);
        }else{
            res.status(400).send(`Invalid work type ${workType}`);
        }
    }catch(err){
        console.error(err);
        return res.status(500).send('Server Error');
    }
});

router.delete('/users/:id', async (req, res) => {
    try{
        const id = parseInt(req.params.id);
        const response = await users.deleteOne({id: id});
        if(response) return res.status(200).send('User deleted successfully');
    }catch(err){
        console.error(err);
        return res.status(500).send('Server Error');
    }
});

module.exports = router;