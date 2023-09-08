const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const {Contact, initializeDB} = require(".");

const app = express();

var HTTP_PORT = process.env.PORT || 8080;

function onHttpStart()
{
  console.log("Express http server lsitening on: " + HTTP_PORT)
}

app.use(bodyParser.urlencoded({extended : true}));

app.post('/submit-form', async (req, res) => {
  try {
    // Create a new Contact document based on the submitted form data
    const newContact = new Contact({
      name: req.body.name,
      email: req.body.email,
      subject: req.body.subject,
      message: req.body.message,
    });

    // Save the new contact to the database
    await newContact.save();

    res.json({ success: true, message: 'Message saved successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error saving message' });
  }
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
