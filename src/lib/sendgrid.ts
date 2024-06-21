import * as sgMail from '@sendgrid/mail'
const sgApiKey = process.env.SENDGRID_API_KEY
sgMail.setApiKey(sgApiKey)
 type requestObj = {
    to: string,
    from: string,
    email: string,

}
async function sendContactEmail({
    formData, 
    response
    } : {
        formData: requestObj,
        response: {}
        }) {

    const message = {
        to: formData.to,
        from: formData.from,
        

    }

    await sgMail.send()
}

export default sendContactEmail;
