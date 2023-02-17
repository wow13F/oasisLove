let btn = document.querySelector('button')
function sendPost() {
  console.log(1234)
  axios.post('http://127.0.0.1:3007/api/reguser').then(function (res) {
    console.log(res)
  })
}
