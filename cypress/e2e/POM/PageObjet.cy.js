import freerangeHome from "../../Pages/FreeRangeTester";
import '@shelex/cypress-allure-plugin';
const home = new freerangeHome


describe("Ejemplo de POM en la pagina de the freerangetesters",()=>{
    beforeEach(()=>{
        home.navigateToHome()
        cy.title().should("contain","Free Range Testers")
    });
    it('Prueba con Pom', () => {
        //home.empezarButton().should("have.text","Empezá a aprender!").should("be.visible")
    });
})
