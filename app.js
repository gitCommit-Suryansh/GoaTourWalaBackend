require('dotenv').config();
const express = require('express');
const connectToDB = require('./database/connection');
const cors=require('cors')
const app = express();
const PORT = process.env.PORT || 5000;
const subcategoryRoutes = require('./routes/subcategoryRoutes.js');
const categoryRoutes = require('./routes/categoryRoutes.js');




app.use(cors({ origin: '*', credentials: true }));
app.use(express.json());

connectToDB();


app.use('/api/categories', categoryRoutes);
app.use('/api/subcategories', subcategoryRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
