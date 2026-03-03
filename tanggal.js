const moment = require("moment");

function formatTanggal(inputTgl) {
    const tanggal = moment(inputTgl, "DD-MM-YYY");

    if(tanggal.isValid()){
        return tanggal.format("DD/MM/YYYY");
    } else {
        console.log("Format tanggal salah");
    }
}

module.exports = formatTanggal;