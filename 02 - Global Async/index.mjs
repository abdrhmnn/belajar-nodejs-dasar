// by default file dgn ekstensi .mjs dia akan di run secara asynchronous, maka dari itu kita bisa
// langsung kasih await ke kode yang berjalan dgn Promise

// kalo di file .js ya hrs manual kasih keyword async dan await

const nama = "Abdu";

function sayHello(){
  return Promise.resolve(`Hello, ${nama}`)
}

const hasil = await sayHello();
console.info(hasil)