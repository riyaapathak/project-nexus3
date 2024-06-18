const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());

let customerDetails = [];

app.post('/submit-form', (req, res) => {
    const { name, email, message } = req.body;
    if (name && email && message) {
        customerDetails.push({ name, email, message });
        res.status(200).send('Form submitted successfully!');
    } else {
        res.status(400).send('All fields are required.');
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
