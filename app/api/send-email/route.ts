import nodemailer, { Transporter } from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server'; // For Next.js API routes

// Create the transporter with Gmail credentials
const transporter: Transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER as string, // Ensure EMAIL_USER is set as a string
        pass: process.env.EMAIL_PASS as string, // Ensure EMAIL_PASS is set as a string
    },
});

export async function POST(req: NextRequest) {
    try {
        // Parse form data from the request body
        const formData = await req.json();
        const { name, email, role } = formData;

        console.log('Received form data:', formData);

        // Define the email options
        const mailOptions = {
            from: process.env.EMAIL_USER as string, // Sender's email address
            to: process.env.EMAIL_USER as string,   // Recipient's email address
            subject: 'New Signup from Form', // Email subject
            html: `<h3>You have a new signup!</h3><p>Name: ${name}</p><p>Email: ${email}</p><p>Role: ${role}</p>`, // HTML body content
        };

        // Send the email using the transporter
        const info = await transporter.sendMail(mailOptions);

        console.log('Email sent:', info.messageId);

        // Return a success response
        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);

        // Return an error response
        return NextResponse.json({ message: 'Error sending email' }, { status: 500 });
    }
}
