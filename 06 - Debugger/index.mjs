// untuk debug kode program

// dalam debuging ada beberapa poin, yaitu :
// breakpoint -> menghentikan sementara kondisi eksekusi program

function sayHello(nama){
  debugger // keyword ini menandakan untuk kondisi breakpoint
  return `Hello ${nama}`
}

const firstName = 'abdu';

console.info(sayHello(firstName))

// untuk melakukan debugging nya bisa jalankan perintah di terminal :
// node inspect <namaFile>