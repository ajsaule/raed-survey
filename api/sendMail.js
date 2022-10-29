//Don't change this file

const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const handler = async (req, res) => {
  const {
    
  } = req.body

  const emails = [
    {
      to: 'andrejsaule8@gmail.com',
      from: 'andrejsaule8@gmail.com',
      subject: '🚨 🔔 Athans Painting Website Enquiry',
      html: `
              Name: ${nameContents} <br>
              Email: ${emailContents} <br>
              Contact: ${mobileContents} <br>
              Address: ${addressContents || 'Not provided'} <br>
              Postcode: ${postcodeContents || 'Not provided'} <br>
              Suburb: ${suburbContents || 'Not provided'} <br>
              Message: ${messageContents} <br>
              `,
    }, 
    // {
    //   to: 'info@athanspainting.com.au',
    //   from: 'andrejsaule8@gmail.com',
    //   subject: '🚨 🔔 Athans Painting Website Enquiry',
    //   html: `
    //           Name: ${nameContents} <br>
    //           Email: ${emailContents} <br>
    //           Contact: ${mobileContents} <br>
    //           Address: ${addressContents || 'Not provided'} <br>
    //           Postcode: ${postcodeContents || 'Not provided'} <br>
    //           Suburb: ${suburbContents || 'Not provided'} <br>
    //           Message: ${messageContents} <br>
    //           `,
    // }, 
  ]
  if (req.headers.referer === 'https://raed-survey.vercel.app/' || req.headers.referer === 'http://localhost:3003' ) {
    try {
      await sgMail.send(emails)
      res.send(req.Headers)
      res.status(204).end()
    } catch (err) {
      console.log('err123', err)
      res.status(500)
    }
  }
}

const allowCors = fn => async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', 'https://raed-survey.vercel.app/')
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3003')

  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET,OPTIONS,PATCH,DELETE,POST,PUT',
  )
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
  )

  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }
  return await fn(req, res)
}

module.exports = allowCors(handler)
