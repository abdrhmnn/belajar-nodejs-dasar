// salah satu standard library node js untuk mendapatkan informasi lokasi file, directory / folder

import path from "path";

const file = "/Users/Abdu/contoh.txt"

console.info(`Directory name: ${path.dirname(file)}`)
console.info(`File name: ${path.basename(file)}`)
console.info(`Ekstension file: ${path.extname(file)}`)
console.info(`Current directory: ${__dirname}`)