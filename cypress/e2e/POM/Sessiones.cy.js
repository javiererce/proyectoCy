import LoginSesion from "../../Pages/Sesiones";
const homeLogin = new LoginSesion;

describe("Sesiones y Cookies",()=>{
    beforeEach(()=>{
        cy.visit("https://the-internet.herokuapp.com/login")
        cy.title().should("contain","The Internet")
    });
    it('Sin sesion guardada', () => {
        homeLogin.loginSesion01()
    })
    it('Seteo de Cookie', () => {
        homeLogin.seteoDeCookies()
    })
    
})