import net from "net"

const connection = net.createConnection({ port: 3000, host: "localhost" })

// handle ketika ada respon dari server
connection.on("data", (data) => {
  console.info("Receive data from server: ", data.toString())
})

// send data to server
connection.write(`Abdu`)