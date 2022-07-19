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
