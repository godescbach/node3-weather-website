
// fetch('http://puzzle.mead.io/puzzle').then((response) => {
//   response.json().then((data) => {
//     console.log(data)
//   })
// })

// fetch('http://localhost:3000/weather?address=Boston').then((response) => {
//   response.json().then((data) => {
//     if(data.error) {
//       console.log(data.error)
//     } else {
//       console.log(data)
//     }
//   })
// })

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

messageOne.textContent = 'Loading ...'
messageTwo.textContent = ''

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const location = search.value
  console.log(location)
  fetch('/weather?address=' + location).then((response) => {
  response.json().then((data) => {
    if(data.error) {
      // console.log(data.error)
      messageOne.textContent = data.error
      messageTwo.textContent = ''
    } else {
      messageOne.textContent = data.location
      messageTwo.textContent = data.forecast
      // console.log(data)
    }
  })
})
})