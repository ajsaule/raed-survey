axios({
  url:
      window.location.protocol === 'http:'
        ? 'http://localhost:3002/api/sendMail'
        : 'https://raed-survey.vercel.app/api/sendMail',
    method: 'POST',
    data: JSON.stringify(sender.data, null, 3),
  })
  .then((res) => {
    console.log(res.data)
  })
  .catch((error) => {
    if (error.response) {
      // Request made and server responded
      console.log(error.response.data)
      console.log(error.response.status)
      console.log(error.response.headers)
    } else if (error.request) {
      // The request was made but no response was received
      console.log(error.request)
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message)
    }
})