require('dotenv').config();
const express = require('express');
const connectToDB = require('./database/connection');
const cors=require('cors')
const app = express();
const PORT = process.env.PORT || 5000;
const subcategoryRoutes = require('./routes/subcategoryRoutes.js');
const categoryRoutes = require('./routes/categoryRoutes.js');
const phonepeRoutes=require('./routes/phonepeRoutes.js')




app.use(cors({ origin: ['http://localhost:3000', 'https://goa-tour-wala-frontend.vercel.app'], credentials: true }));
app.use(express.json());

connectToDB();


app.use('/api/categories', categoryRoutes);
app.use('/api/subcategories', subcategoryRoutes);
app.use('/api/phonepe',phonepeRoutes)


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
