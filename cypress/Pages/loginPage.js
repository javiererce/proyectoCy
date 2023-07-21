class LoginOr{
    LoginBasic(){
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should("contain","OrangeHRM")
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should("exist").type("Admin")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should("exist").type("admin123")
        cy.get('.oxd-button').click()
    }

}

export default LoginOr