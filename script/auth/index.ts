namespace Auth {

    interface IUsuario {
        email: string;
        password: string;
    }

    interface ICadastro {
        nome: string;
        email: string;
        password: string;
        birthAt: Date;
    }
    
    export class LoginRegistro {

        login(user: IUsuario) {
            return user
        }

        registro(newUser: ICadastro) {
            return newUser;
        }

    }

    export class Recuperacao {

        recuperarSenha() {
            return "Enviando email"
        }

        recuperarUsuario() {
            return "Enviando email"
        }

    }
}