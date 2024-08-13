// digunakan untuk membaca input

import process from "process";
import readLine from "readline"

const input = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
})

input.question("Halo, siapa anda?", (nama) => {
  console.info(`Halo ${nama}`)
  input.close()
})