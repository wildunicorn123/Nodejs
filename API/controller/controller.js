// const {express, routes} = require('../controller')re
const express = require('express');
const routes = express.Router();
const bodyParser = require('body-parser')
// Import all model's objects
const {users,} = require('../model');
const { showProducts,showProductById,createProduct,updateProduct,deleteProduct} = require('./product');

//======= User's router =======
routes.get('/users', (req, res)=>{
    users.fetchUsers(req, res)
})
routes.get('/user/:id', (req, res)=>{
    users.fetchUser(req, res)
})
routes.post('/register', bodyParser.json(),
    (req, res)=> {
        users.register(req, res)
    })
routes.put('/user/:id', bodyParser.json(),
    (req, res)=>{
        users.updateUser(req, res)
    })
routes.patch('/user/:id', bodyParser.json(),
    (req, res)=>{
        users.updateUser(req, res)
    })
routes.delete('/user/:id', (req, res)=>{
    users.deleteUser(req, res)
})
//get - display
//post - add or insert data
//put - update the data
//patch - update specific part of data
//delete -delete data
routes.get('/Products', (req, res)=>{
    showProducts(req, res)
})
routes.get('/Products/:id', (req, res)=>{
    showProductById (req, res)
})
routes.post('/Products', bodyParser.json(),
    (req, res)=>{
        createProduct(req, res)
    })
routes.patch('/Products/:id', bodyParser.json(),
    (req, res)=>{
        updateProduct(req, res)
    })
routes.delete('/Products/:id', (req, res)=>{
    deleteProduct(req, res)
})

module.exports = {
    express, routes
}
