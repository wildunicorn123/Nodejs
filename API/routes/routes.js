// const express = require('express');
// const routes = express.Router();
// //get - display
// //post - add or insert data
// //put - update the data
// //patch - update specific part of data
// //delete -delete data
// routes.get('/Products', (req, res)=>{
//     products.getProduct(req, res)
// })
// routes.get('/Products/:id', (req, res)=>{
//     products.getProductById(req, res)
// })
// routes.post('/Products', bodyParser.json(),
//     (req, res)=>{
//         products.insertProduct(req, res)
//     })
// routes.patch('/Products/:id', bodyParser.json(),
//     (req, res)=>{
//         products.updateProductById(req, res)
//     })
// routes.delete('/Products/:id', (req, res)=>{
//     products.deleteProductById(req, res)
// })

// module.exports = {
//     express, routes
// }


// import express from 'express';
// import showProducts from "../controller/product.js";
// import showProductById from "../controller/product.js";
// // import createProduct from "../controller/product.js";
// import updateProduct from "../controller/product.js";
// import deleteProduct  from "../controller/product.js";

// const router = express.Router();
// router.get('/Products', showProducts);
// router.get('/Product/:id', showProductById);
// router.post('/Product', createProduct); 
// router.put('/Product/:id', updateProduct);
// router.delete('/Product/:id', deleteProduct);
  
// export default router;
