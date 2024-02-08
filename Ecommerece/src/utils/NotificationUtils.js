
const nodemailer = require("nodemailer");


const sendEmail= (emails, subject, html, text)=>{

    const emailIds = emails.join(", ")

    var transporter = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "46e4218ad81ba6",
          pass: "078d7da3f83f6c"
        }
      });

    let mailDetails = {
        from: "subhajitchodhury34@gmail.com",
        to: emailIds,
        subject: subject,
    }
    if(html){
        mailDetails.html = html;
    }
    if(text){
        mailDetails.text = text;
    }

    transporter.sendMail(mailDetails, function(err,data){
        if(err){
            console.error("Error sending email:", err.message);
            console.log(`Failed to send email to ${emailIds}`);
        }else{
            console.log(`Email Sent successfully to ${emailIds}`);
        }
    })
}

module.exports = {
    sendEmail
}