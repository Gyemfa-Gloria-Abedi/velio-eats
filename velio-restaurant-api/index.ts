// server.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());


// Routes
// app.post('/submit-form', async (req, res) => {
//   try {
//     const formData = new FormModel(req.body);
//     await formData.save();
//     res.status(201).json({ message: 'Form data saved successfully' });
//   } catch (error) {
//     res.status(500).json({ error: 'Error saving form data' });
//   }
// });

app.get("/", async (req, res) => {
    res.status(200).json({message: "Hello world"})
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});  
