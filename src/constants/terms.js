const data = {
    username: {en: "Username", he: "שם משתמש"},
    password: {en: "Password", he: "סיסמא"},
}

export default function(key, lang="he"){
    return data[key][lang];
}
