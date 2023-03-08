// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('bloqueToolsQA', (name,email,dir1,dir2) => {
    cy.get('#userName').should("be.visible").type(name)
    cy.get("#userEmail").should("be.visible").type(email)
    cy.get("#currentAddress").should("be.visible").type(dir1)
    cy.get("#permanentAddress").should("be.visible").type(dir2)
    cy.ge("submit").should("be.visible").click({force:true})
 })
