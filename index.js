import formatTanggal from './formatterDate.js';
import { createInterface } from 'readline';

function askQuestion(answer) {
  const rl = createInterface({
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
  const inputTgl = await askQuestion('Masukkan Tanggal-Bulan-Tahun:', 
  );
  const hasil = formatTanggal(inputTgl);
  console.log('output:', hasil);
}
main();