const { express, routes } = require('./controller/controller');
// const express = require ('express');
const cors = require ('cors');
const bodyParser = require ('body-parser');
// const routes = require ('./controller/controller.js');
// const path = require('path')
const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);
app.get('/', (req, res)=>{
    res.json({
        status: res.statusCode,
        msg: "You're home"
    })
    // res.sendFile()
})
app.listen(5000, () => console.log('Server running at http://localhost:5000'));

