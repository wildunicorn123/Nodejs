// const Products = require('../model/productmod.js');
const {getProducts,getProductById,insertProduct,updateProductById,deleteProductById} = require('../model/productmod.js');
// import { getProduct, getProductById, insertProduct, updateProductById, deleteProductById } from "../model/productmod.js";
// Get All Products
// export 
const showProducts = (req, res) => {
    getProducts((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
// Get Single Product 
// export 
const showProductById = (req, res) => {
    getProductById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
        res.json({
            status: res.statusCode,
            result
        })
    });
}
// Create New Product
// export
 const createProduct = (req, res) => {
    const data = req.body;
    insertProduct(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });


}
// Update Product
// export 
const updateProduct = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateProductById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
// Delete Product
// export 
const deleteProduct = (req, res) => {
    const id = req.params.id;
    deleteProductById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
module.exports = {
    showProducts,
    showProductById,
    createProduct,
    updateProduct,
    deleteProduct
}