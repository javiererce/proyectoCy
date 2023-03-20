class LoginBasico{
    LoginDatosValidos(){
        cy.title().should("contain","The Internet")
        cy.get('#username').should("be.visible").type("tomsmith")
        cy.get('#password').should("be.visible").type("SuperSecretPassword!")
        cy.get('.fa').should("be.visible").click({force:true})
        cy.get('#flash').should("contain"," You logged into a secure area!")
        cy.get('.subheader').should("exist")
    }
    validarMensajeError(){
        cy.title().should("contain","The Internet")
        cy.get('#username').should("be.visible").type("tomsitha")
        cy.get('#password').should("be.visible").type("SuperSecreaword!")
        cy.get('.fa').should("be.visible").click({force:true})
        cy.get('#flash').should("be.visible").should("contain"," Your username is invalid!")
    }
}

export default LoginBasico