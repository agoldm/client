import CryptoJS from "crypto-js";

export function formatCurrency(value) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " ₪";
}

export const crypt = {
    encrypt: (clear, secret = "ABC") => {
        var cipher = CryptoJS.AES.encrypt(clear, secret);
        cipher = cipher.toString();
        return cipher;
    },
    decrypt: (cipher, secret = "ABC") => {
        var decipher = CryptoJS.AES.decrypt(cipher, secret);
        decipher = decipher.toString(CryptoJS.enc.Utf8);
        return decipher;
    }
};

export function formatDateJS(_date = null) {

    const date = _date ? new Date(_date) : new Date();
  
    let month = '' + (date.getMonth() + 1);
    let day = '' + date.getDate();
    let year = date.getFullYear();
  
    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;
  
    return [year, month, day].join('-');
  
  }
