import nodemailer from 'nodemailer';
import config from './config.json'

export async function sendEmail(message) {
    const transporter = nodemailer.createTransport(config.mailsettings, {
        from: config.mailsettings.auth.user
    });

    const mailData = {
        to: message.to,
        subject: message.subject,
        html: message.html
    };

    transporter.sendMail(mailData, function(err, info) {
        if (err) console.log(err);
        else console.log(info);
    });
}