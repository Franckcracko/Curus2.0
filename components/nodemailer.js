'use client';
import nodemailer from "nodemailer";

const email = "soporte.curus@gmail.com";
export const transporter = nodemailer.createTransport({
    service:"gmail",
    auto:{
        user:email,
        pass: "qylpdtuitpemcarb"
    }
})
export const mailOptions = {
    from:email,
    to:email,
}