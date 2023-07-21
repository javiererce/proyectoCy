import { it } from "mocha"
import LoginOr from "../../Pages/loginPage"
const LoginOrange = new LoginOr;

describe("Pruebas en Orange",()=>{
    before(()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    })
    it('Login en OrangePage', () => {
        LoginOrange.LoginBasic()
    });
   
})