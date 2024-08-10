// untuk bisa menggunakan modules node js maka tidak bisa dipakai didalam file dgn ekstensi .js
// karena js akan mengganggap itu dgn error
// harus pakai ekstensi .mjs (modules js)

import os from "os";

console.info(os.platform())
console.table(os.cpus())