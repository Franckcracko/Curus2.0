import firebaseReq from './firebaseReq';

const nodemailer = require('nodemailer');
require('dotenv').config();
export default async function ContactAPI(req, res) {
    const { name, email,id } = req.body;
    const resFirebase = await firebaseReq({data:req.body,id})
    if (!resFirebase) {
        console.log("Ocurrio un error en la llamada de la base de datos")
        return res.status(500).json({ message: "error database" });
    }
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        tls: {
            rejectUnauthorized: false
        },
        auth: {
            user: process.env.EMAIL_CURUS,
            pass: process.env.PASS_EMAIL
        }
    });

    const mailOptions = {
        from: process.env.EMAIL_CURUS,
        to: email,
        subject: `Bienvenido a Curus ${name}`,
        text: 'Gracias por haber comprado nuestro producto.',
    };
    try {
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(`Paso algo ${error}`);
            } else {
                console.log('Mensaje enviado: ' + info.response);
            }
        });
        return res.status(200).json({ message: "succes" });
    } catch (error) {
        console.log("nodemailer");
        return res.status(500).json({ message: "error service mailer" });
    }
}