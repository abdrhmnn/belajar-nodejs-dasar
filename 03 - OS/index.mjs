// salah satu standard library node js untuk mendapatkan informasi sistem operasi yang digunakan
import os from "os";

console.info(`Home directory: ${os.homedir()}`)
console.info(`Hostname: ${os.hostname()}`)
console.info(`Total memory: ${os.totalmem()}`)
console.info(`Platform: ${os.platform()}`)