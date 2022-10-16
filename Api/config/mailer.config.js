const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.MAILER_EMAIL ,
        pass: process.env.PASSWORD_MAILER_EMAIL,
    },
});

module.exports.sendRegistrationEmail = (message) => {
    transporter
        .sendMail({
            from:"xancamposweb@gmail.com",
            to: "ironhacklabs@gmail.com",
            subject: "New message from www.xancampos.com",
            html: 
            
        `<h1>Hello Xan</h1>
            
        <p>You have a new email from ${message.email}</p>
        <p>${message.message}</p>`
        })
        .then(() => {
            console.log("email sent!")
        })
        .catch((err) => {
            console.error("error sending email", err)
        })
};