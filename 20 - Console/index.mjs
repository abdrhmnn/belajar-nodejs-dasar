// untuk print text ke stdout

// jadi console itu seperti console.log, console.info, console.table, dll
// namun console sendiri itu merupakan Object

import { Console } from "console";
import fs from "fs"

// buat console sendiri

const file = fs.createWriteStream("application.log")

// custome output yang dihasilkan oleh object Console
const log = new Console({
  stdout: file,
  stderr: file
})

// ini gak akan muncul di terminal tapi dia akan dimasukkan ke dalam file stream
log.info("Hasil log...")
log.error("Ada error di line 10...")

const dataTable = {
  nama: "abdu",
  city: "jkt"
}

log.table(dataTable)