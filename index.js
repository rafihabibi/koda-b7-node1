const formatTanggal = require('./tanggal.js');
const readline = require('redline');

function askQuestion(answer) {
  const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

  return new Promise(resolve => {
    rl.question(answer, (inputTgl) => {
      rl.close();
      resolve(inputTgl);
    });
  });
}

async function main() {
  const inputTgl = askQuestion("Masukkan Tanggal-Bulan-Tahun:", 
  )
  const hasil = formatTanggal(inputTgl);
  console.log("output:", hasil);
}
main();
