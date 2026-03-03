import moment from 'moment';

function formatTanggal(inputTgl) {
    const tanggal = moment(inputTgl, 'DD-MM-YYY');

    if(tanggal.isValid()){
        return tanggal.format('DD/MM/YYYY');
    } else {
        return 'Format tanggal salah';
    }
}

export default formatTanggal;