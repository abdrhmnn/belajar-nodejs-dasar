// untuk kontrak aliran data di node js (seperti stream untuk baca, tulis, dll)

// stream juga turunan dari Events

import fs from "fs"

// write file
const writer = fs.createWriteStream("target.log")
writer.write("Hello ")
writer.write("Test")
writer.end()

// read file
const reader = fs.createReadStream("target.log")
reader.addListener("data", (hasil) => {
  console.info(hasil.toString())
})