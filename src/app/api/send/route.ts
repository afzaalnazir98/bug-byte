import { NextResponse } from "next/server";
import { Resend } from 'resend';

const resend = new Resend('re_KqVWH73h_63VsoPEJhPFPv1AMPyxJCk8p');

export async function POST(req: any, res: any) {
    try {
       const { name, email,service, message } = await req.json();
       const { data, error } = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'iamafzaalnazir@gmail.com',
          subject: 'New Message from Contact Form',
          html: `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Email:</strong> ${service}</p>
            <p><strong>Message:</strong> ${message}</p>
          `
        });

        if (error) {
            console.error("Error sending email:", error);
            return NextResponse.json({ error: "Error sending email" }, { status: 400 });
        }
        console.log("Email sent successfully:", data);
        return NextResponse.json("Email sent successfully");
    } catch (error) {
        console.error("Error handling form submission:", error);
        return NextResponse.json({ error: "Error handling form submission" }, { status: 500 });
    }
}