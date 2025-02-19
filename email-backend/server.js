// const express = require('express')
// const nodemailer = require('nodemailer')
// const cors = require('cors')

// const app = express()
// const PORT = process.env.PORT || 3000

// // Middleware
// app.use(cors())
// app.use(express.json())

// // Configure nodemailer
// const transporter = nodemailer.createTransport({
//   service: 'gmail', // Use your email service (e.g., Gmail, Outlook)
//   auth: {
//     user: 'omitiranisrael@gmail.com', // Your email
//     pass: 'israelogo', // Your email password or app password
//   },
// })

// // Endpoint to send email
// app.post('/send-email', (req, res) => {
//   const { email } = req.body

//   const mailOptions = {
//     from: 'omitiranisrael@gmail.com', // Your email
//     to: 'omitiranisrael@gmail.com', // Send to yourself
//     subject: 'New Investment Inquiry',
//     text: `You have a new inquiry from: ${email}`,
//   }

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       return res.status(500).send(error.toString())
//     }
//     res.status(200).send('Email sent: ' + info.response)
//   })
// })

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`)
// })
