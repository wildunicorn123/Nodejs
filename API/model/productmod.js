// import connection
const db = require('../config/db.js');
// Getting All Products
// class Products{
 const 
getProducts = (result) => {
        db.query("SELECT * FROM Products", (err, results) => {             
            if(err){
                console.log(err);
                result (err, null);
            } else {
                result(null, results);
            }
        });   
    }
      const   
    getProductById = (id, result) => {
        db.query("SELECT * FROM Products WHERE prodID = ?", [id], (err, results) => {             
            if(err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, results[0]);
            }
        //      res.json({
        //     status: res.statusCode,
        //     result
        // })
        });   
    }
      const 
     insertProduct = (data, result) => {
        db.query("INSERT INTO Products SET ?", [data], (err, results) => {             
            if(err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, results);
            }
        });   
    }
    const
      updateProductById = (data, id, result) => {
        db.query("UPDATE Products SET prodName = ?, amount= ? WHERE prodID= ?", [data.prodName, data.amount, id], (err, results) => {             
            if(err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, results);
            }
        });   
    }
      const 
    deleteProductById = (id, result) => {
        db.query("DELETE FROM Products WHERE prodID = ?", [id], (err, results) => {             
            if(err) {
                console.log(err);
                result (err, null);
            } else {
                result(null, results);
            }
        });   
    }
// }
 module.exports = {
    getProducts,
    getProductById,
    insertProduct,
    updateProductById,
    deleteProductById
}