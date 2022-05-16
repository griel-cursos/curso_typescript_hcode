"use strict";
var Auth;
(function (Auth) {
    class LoginRegistro {
        login(user) {
            return user;
        }
        registro(newUser) {
            return newUser;
        }
    }
    Auth.LoginRegistro = LoginRegistro;
    class Recuperacao {
        recuperarSenha() {
            return "Enviando email";
        }
        recuperarUsuario() {
            return "Enviando email";
        }
    }
    Auth.Recuperacao = Recuperacao;
})(Auth || (Auth = {}));
//# sourceMappingURL=index.js.map