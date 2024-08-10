// salah satu standard library node js untuk manipulasi file system
// ada jenis libray,
// menggunakan synchronous
// menggunakan asynchronous dgn callback
// menggunakan asynchronous dgn promise

import fs from "fs";
import fsProm from "fs/promises";

const buffer = await fsProm.readFile("05\ -\ File\ System/index.mjs")

console.log(buffer);

await fs.writeFile("text.txt", "halo")
