const express = require('express');
const connectDB = require('./DB/Connection');
const app = express();
require('dotenv').config();

connectDB();
app.use(express.json({ extended: false }));
//post
app.use('/api/productModel', require('./Api/Products'));
app.use('/api/categoryModel', require('./Api/Categories'));
//get
app.use('/api/getCategories', require('./Api/getCategories'));
app.use('/api/getProducts', require('./Api/getProducts'));
//getOneProduct
app.use('/api/getProduct', require('./Api/getProduct'));
//getOneCategory
app.use('/api/getCategory', require('./Api/getCategory'));
//Delete
app.use('/api/deleteProduct', require('./Api/deleteProduct'));
app.use('/api/deleteCategory', require('./Api/deleteCategory'));
//Update
app.use('/api/updateProduct', require('./Api/updateProduct'));

const Port = process.env.PORT || 3000;
console.log(Port);

app.listen(Port, () => console.log('Server initialized'));