const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(cors({
  origin: "http://localhost:3000",
}));

app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB', error);
  });

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  phoneNumber: String,
  profilePhoto: String,
  coverPhoto: String,
  personalDetails: Object,
});

const User = mongoose.model('User', userSchema);

app.post('/signup', async (req, res) => {
  const { name, email, phoneNumber, profilePhoto, coverPhoto, personalDetails } = req.body;
  const user = new User({ name, email, phoneNumber, profilePhoto, coverPhoto, personalDetails });
  try {
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(400).send({ message: 'Error creating user', error });
  }
});

// New endpoint to fetch user by email
app.get('/users/email/:email', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.params.email });
    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }
    res.send(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).send({ message: 'Internal Server Error', error });
  }
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
