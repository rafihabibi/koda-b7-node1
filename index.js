const formatTanggal = require("./tanggal.js");
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukan Tanggal-Bulan-Tahun: ", (inputTgl) => {
    const hasil = formatTanggal(inputTgl);
    console.log("Output:", hasil);

})