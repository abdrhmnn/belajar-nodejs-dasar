// yaitu untuk mendapatkan informasi terhadap proses nodejs yang sedang berjalan

// Process juga merupakan instance dari Events jadi bisa diberikan listener di dalamnya

import process from "process";

// untuk jenis event nya itu ada banyak, bs di lihat didokumentasi nya langsung
// disini contohnya kalo program nodejs telah selesai maka listener nya berjalan
process.addListener("exit", (exitCode) => {
  console.info("Program telah berhenti: ", exitCode)
})