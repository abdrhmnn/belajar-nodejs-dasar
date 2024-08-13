// untuk bekerja dengan HTTP dan HTTPS

import https from "https"

// contoh hit menggunakan standart library https
const url = "https://enkye2vpdfx1.x.pipedream.net"
const request = https.request(url, {
  method: "POST",
  headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    }
  },
  (msg) => {
    msg.on("data", (result) => {
      console.info("Receive data: ", result.toString())
    })
  }
)

const body = JSON.stringify({
  nama: 'abdu',
  city: 'jkt'
})

request.write(body)
request.end()