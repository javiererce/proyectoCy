class LoginSesion{

    loginSesion01(){
        cy.get("#username").should("be.visible").type("tomsmith")
        cy.get('#password').should("be.visible").type("SuperSecretPassword!")
        cy.get('.fa').should("be.visible").click()
        cy.get('#flash').should("contain","You logged into a secure area!")
        cy.getCookies().should("have.length",5).then((cookie)=>{
            expect(cookie[0]).to.have.property("name","optimizelyPendingLogEvents")
        })
    }

    seteoDeCookies(){
        cy.get("#username").should("be.visible").type("tomsmith")
        cy.get('#password').should("be.visible").type("SuperSecretPassword!")
        cy.get('.fa').should("be.visible").click()
        cy.get('#flash').should("contain","You logged into a secure area!")
        cy.getCookie("cook").should("not.exist")
    }

}


export default LoginSesion