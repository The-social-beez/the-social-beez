"use server"
import { transporter, mailOptions } from "../../config/nodemailer"

const CONTACT_MESSAGE_FIELDS: { name: string, email: string, subject: string, message: string } = {
    name: "Name",
    email: "Email",
    subject: "Subject",
    message: "Message",
};

const generateEmailContent = (data: Record<string, any>) => {
    const stringData = Object.entries(data).reduce(
        (str, [key, val]) =>
            (str += `${CONTACT_MESSAGE_FIELDS[key as keyof typeof CONTACT_MESSAGE_FIELDS]}: \n${val} \n \n`),
        ""
    );
    const htmlData = Object.entries(data).reduce((str, [key, val]) => {
        return (str += `<h3 class="form-heading" align="left">${CONTACT_MESSAGE_FIELDS[key as keyof typeof CONTACT_MESSAGE_FIELDS]}</h3><p class="form-answer" align="left">${val}</p>`);
    }, "");

    return {
        text: stringData,
        html: `<!DOCTYPE html><html> <!-- (Rest of the HTML template code here) --> </html>`,
    };
};


export const sendMessage = async (formData: FormData) => {
    let fullName = formData.has('fullName') ? formData.get('fullName') : '';
    let email = formData.has('email') ? formData.get('email') : '';
    let message = formData.has('message') ? formData.get('message') : '';

    // Check for whitespaces in fullName, email, and message
    const whitespaceRegex = /\s/;

    const hasWhiteSpaceInFullName: boolean = fullName ? whitespaceRegex.test(fullName.toString()) : true;
    const hasWhiteSpaceInEmail: boolean = email ? whitespaceRegex.test(email.toString()) : true;
    let data = {
        name: fullName?.toString() || "",
        email: email?.toString() || "",
        subject: "New message from thesocialbeez.in!",
        message: message?.toString() || ""
    }

    if (!(fullName?.length === 0 || email?.length === 0)) {
        if (hasWhiteSpaceInFullName) {
            return {
                success: false,
                message: "Whitespaces are not allowed in Name!"
            }
        } else if (hasWhiteSpaceInEmail) {
            return {
                success: false,
                message: "Whitespaces are not allowed in Email!"
            }
        } else {

            if (!(message === "" || message?.length === 0)) {
                // SENDING EMAILS
                try {
                    await transporter.sendMail({
                        ...mailOptions,
                        ...generateEmailContent(data),
                        subject: data.subject,
                    });
                    return {
                        success: true,
                        message: "Message sent successfully!"
                    }
                } catch (err) {
                    console.log(err);
                    return {
                        success: false,
                        message: "Unknown error occurred!"
                    }
                }
                // console.log(`Message from : ${fullName} \nEmail : ${email} \nMessage : ${message}`)
            } else {
                // console.log(`Message from : ${fullName} \nEmail : ${email} \nMessage : No message from user`)
                // SENDING EMAILS
                data = { ...data, message: "No message" }
                try {
                    await transporter.sendMail({
                        ...mailOptions,
                        ...generateEmailContent(data),
                        subject: data.subject,
                    });
                    return {
                        success: true,
                        message: "Message sent successfully!"
                    }
                } catch (err) {
                    console.log(err);
                    return {
                        success: false,
                        message: "Unknown error occurred!"
                    }
                }
            }
        }
    } else {
        return {
            success: false,
            message: "Empty values not allowed!"
        }
    }
}
