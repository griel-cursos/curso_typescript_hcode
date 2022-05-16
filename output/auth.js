"use strict";
const novoRegistro = new Auth.LoginRegistro();
const nsRegister = novoRegistro.registro({
    nome: "Roberto",
    email: "roberto@griel.com",
    password: "123456",
    birthAt: new Date()
});
console.log(nsRegister);
//# sourceMappingURL=auth.js.map