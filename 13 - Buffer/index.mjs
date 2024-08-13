// yaitu object yg berisikan urutan byte dengan panjang tetap

const buffer = Buffer.from("Abdu"); // konversi string ke bentuk buffer (array yg isinya angka tipe byte)

buffer.reverse()

console.info(buffer.toString())

// dengan buffer juga bisa melakukan encoding ke tipe lainnya dgn default encoding "utf8"
console.info(buffer.toString("hex"))
console.info(buffer.toString("base64"))