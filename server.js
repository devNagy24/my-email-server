const express = require('express');
const sgMail = require('@sendgrid/mail');
const app = express();
const cors = require('cors');

const config = require('./config.js');


sgMail.setApiKey(config.SENDGRID_API_KEY);



// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.use(express.json());

// Enable CORS
app.use(cors());

app.get('/', (req, res) => {
    // Handle the request
    res.send('Hello, world!');
});


app.post('/sendApprovalEmail', (req, res) => {
    const { email, name } = req.body;

    const msg = {
        to: email,
        from: 'dnagy@redwind.net', // Replace with your email
        subject: 'Meeting Approved',
        text: `Dear ${name}, your meeting has been approved.`,
        html: `<strong>Dear ${name},</strong><br><br>Your meeting has been approved.`,
    };

    sgMail.send(msg)
        .then(() => res.status(200).send("Email sent successfully"))
        .catch((error) => {
            console.error(error);
            if (error.response) {
                console.error(error.response.body)
            }
            res.status(500).send("Error in sending email");
        });
});

app.post('/sendRejectionEmail', (req, res) => {
    const { email, name } = req.body;

    const msg = {
        to: email,
        from: 'dnagy@redwind.net', // Replace with your email
        subject: 'Meeting Rejected',
        text: `Dear ${name}, your meeting has been rejected.`,
        html: `<strong>Dear ${name},</strong><br><br>Your meeting has been rejected.`,
    };

    sgMail.send(msg)
        .then(() => res.status(200).send("Email sent successfully"))
        .catch((error) => {
            console.error(error);
            if (error.response) {
                console.error(error.response.body)
            }
            res.status(500).send("Error in sending email");
        });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
