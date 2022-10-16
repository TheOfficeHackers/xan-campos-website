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
            
        `<h3>Hello Xan,</h3>
            
        <p>You have a new email from:</p>
        <p>${message.email}</p>
        <p>Contact number: ${message.phone ? message.phone : "no number"}</p>
        <hr>
        <p><b>${message.name} said: </b></p>
        <p><i>${message.message}</i></p>
        <hr>
        <p>Have a nice day!!</p>`
        })
        .then(() => {
            console.log("email sent!")
        })
        .catch((err) => {
            console.error("error sending email", err)
        })
};