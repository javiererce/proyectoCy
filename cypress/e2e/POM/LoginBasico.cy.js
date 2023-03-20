import { beforeEach } from "mocha"
require('@cypress/xpath');
import LoginBasico from "../../Pages/LoginBasico";
const loginBasico = new LoginBasico

describe("Login de https://the-internet.herokuapp.com/login",()=>{
    beforeEach(()=>{
        cy.visit("https://the-internet.herokuapp.com/login")
    });

    it('Validar el Login con datos validos', () => {
        loginBasico.LoginDatosValidos()
    });

    it('Validar mensaje de error cuando nos logueamos con datos incorrectos', () => {
        loginBasico.validarMensajeError()
    });

});