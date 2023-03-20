import freerangeHome from "../../Pages/FreeRangeTester";
const home = new freerangeHome

describe("Ejemplo de POM en la pagina de the freerangetesters",()=>{
    beforeEach(()=>{
        home.navigateToHome()
        cy.title().should("contain","Aprender Testing | Free Range Testers")
    });
    it('Prueba con Pom', () => {
        home.empezarButton().should("have.text","Empezá a aprender!").should("be.visible")
    });
})
