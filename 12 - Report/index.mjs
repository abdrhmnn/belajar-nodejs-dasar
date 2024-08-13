// untuk membuat file report secara otomatis ketika terjadi sesuatu di program node js nya

// untuk membuat file nya bisa menggunakan terminal atau process
// disini contohnya menggunakan process jadi untuk yg pakai terminal bisa dilihat dokumentasi nya langsung

import process from "process";

process.report.reportOnFatalError = true;
process.report.reportOnUncaughtException = true;
process.report.reportOnSignal = true;
process.report.filename = "report.json"

function sampleErrors() {
  throw new Error("Error!")
}

sampleErrors()