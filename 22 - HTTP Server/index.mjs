// contoh dengan http server

import http from "http"

const server = http.createServer((request, response) => {
  // dari client
  console.info(request.url)
  console.info(request.method)

  // dari server send to client
  response.write("Hello from server!")
  response.end()
})

server.listen(3000)