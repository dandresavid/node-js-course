const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email,name) => {
    sgMail.send({
        to: email,
        from: 'dandresbr@gmail.com',
        subject: 'Thank you for joining in',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app`
    })

}

const sendCancelationEmail = (email,name) =>{
    sgMail.send({
        to: email,
        from: 'dandresbr@gmail.com',
        subject: `Sorry you have left us ${name}`,
        text: 'Why did you cancel your account?'
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}