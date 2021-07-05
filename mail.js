
const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: process.env.api_key, 
        domain: process.env.host_name
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (email, subject, text, cb) => {
    const mailOptions = {
        from: email, // TODO replace this with your own email
        to: "hemanth.m1480@gmail.com", // TODO: the receiver email has to be authorized for the free tier
        subject ,
        text
    };

    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            cb(err, null);
        }
        cb(null, data);
    });
}

module.exports = sendMail;