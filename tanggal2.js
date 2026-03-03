function formatTanggal(inputTgl) {
    const bagian = inputTgl.slice("-");

    if(bagian.length !== 3){
        return "format tanggal salah";
    }

    const hari = parseInt(bagian[0]);
    const bulan = parseInt(bagian[1]);
    const tahun = parseInt(bagian[2]);

    const d =  new Date(hari, bulan - 1, tahun);

    if(d.getFullYear() === tahun && d.getMonth() === bulan -1 && d.getDay() === hari){
        const h = String(hari);
        const b = String(bulan - 1);
        const t = tahun;

        return `${h}/${b}/${t}`
    } else {
        return "Format tanggal Salah";
    }
}


module.exports = formatTanggal;

