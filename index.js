
const express = require('express');
const users = require('./consts')

const PORT = process.env.PORT || 4000;

const app = express();

app.get('/', (req,res)=>{
    console.log('fetching users')
    res.send(users)
})

app.get('/:id', (req,res)=>{
    console.log('deleting users', req.params);
    
    let users = users.filter(user => user.id === req.params?.id)
    res.send(users)
})




app.listen(PORT, ()=>{
    console.log('Server App is listening on port:', PORT)
})