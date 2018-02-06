const app = require('express').Router();
const db = require('../db');
const { models } = db;
const { User} = models;
//const Product = db.models.Product;

module.exports = app;

app.get('/', (req, res, next)=> {
    User.findAll()
        .then( users => res.render('users', { title: 'Users', users }))
        .catch( err=> next(err));
})

/*app.get('/:id', (req, res, next)=> {
    User.findById(req.params.id)
        .then( user => res.render('user', { user }))
        .catch( err=> next(err));
})
*/

app.post('/', (req, res, next)=> {
    User.create(req.body)
        .then( user => res.redirect('/users'))
        .catch( err => next(err));
    //res.send(req.body);
});

app.delete('/:id', (req, res, next)=> {
    User.findById(req.params.id) 
        .then(user => user.destroy())
        .then(()=> res.redirect('/users'));
})

