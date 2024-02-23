const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const Hospital = require('./models/hospitalModel.js');
const registrationRoutes = require('./routes/registrationRoutes.js');

const app = express();
dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));

// let hospital1 = new Hospital({
//     hospitalName:"kiran",
//     hospitalId:"ki12",
//     email:"kiran@gmail.com",
//     password:"kiran",
//     address:"kiran"
// });
// hospital1.save().then(res => {console.log(res)});

app.get('/', (req, res) => {
    res.send('Hello World!');
  });

// Routes
app.use('/api/registration', registrationRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
