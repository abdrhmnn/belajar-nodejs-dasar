// membuat server dengan net

import net from "net"

// dri create server ada cb
const server = net.createServer((client) => {
  console.info("Client connected...")
  // event
  client.on("data", (data) => {
    console.info("Receive data from client: ", data.toString())
    client.write(`Hello from server, ${data.toString()}`)
  })
})

server.listen(3000, "localhost")