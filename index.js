
const express = require('express');
const users = require('./consts')

const PORT = process.env.PORT || 4000;

const app = express();

app.get('/', (req,res)=>{
    console.log('fetching users')
    res.send(users)
})

app.get('/:id', (req,res)=>{
    console.log('getting user', req.params);
    
    let users = users.filter(user => user.id === req.params?.id)
    res.send(users)
})

app.delete('/:id', (req, res)=>{
    console.log('deleting the user');
    let users = users.filter(user => user.id !== req.params?.id)
    console.log('returning remaining users.')
    res.send(users)
})

app.update('/', (req,res)=>{
    console.log('updating the user')
    let users = users.map(user => {
        if(user.id === req.body.user.id){
            return {
                ...user,
                ...req.body.user
            }
        }

        return user;
    })

    res.send(users)
})




app.listen(PORT, ()=>{
    console.log('Server App is listening on port:', PORT)
})