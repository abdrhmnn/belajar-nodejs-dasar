// untuk kompresi menggunakan Gzip

import zlib from "zlib"
import fs from "fs"

// compress file menjadi binary yg disimpan di dalam file
const source = fs.readFileSync("index.mjs")
const compress = zlib.gzipSync(source)

fs.writeFileSync("index.mjs.txt", compress)

// decompress file yg sudah di compress
const source_compress = fs.readFileSync("index.mjs.txt")
const decompress = zlib.unzipSync(source_compress)

console.info(decompress.toString())