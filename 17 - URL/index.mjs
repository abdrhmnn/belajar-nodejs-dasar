// untuk bekerja dengan URL

import { URL } from "url";

const url = new URL("https://www.test.com/belajar?s=abdu")

url.host = "www.test2.com" // ubah host url nya
url.searchParams.append("status", "benar") // nambah search params di url

console.info(url.protocol)
console.info(url.href)
console.info(url.port)
console.info(url.pathname)