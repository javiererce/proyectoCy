import { beforeEach } from "mocha"
require('@cypress/xpath');

describe("Pruebas 01 de APIS con Cypress",()=>{
    it('El endpoint POST responde con status 200', () => {
        cy.request({
            url:"https://jsonplaceholder.typicode.com/posts"
        }).then((response)=>{
            expect(response.status).to.eq(200)
        })
    })
    it('El endpoint GET tiene 100 entradas', () => {
        cy.visit("https://jsonplaceholder.typicode.com/")
        cy.request("/posts").its("body").should("have.length",100)
    })
    it('Validar el titulo del POST Nnumero 1 ', () => {
        cy.visit("https://jsonplaceholder.typicode.com/")
        cy.request("/posts/1").its("body")
        .should("have.property","title","sunt aut facere repellat provident occaecati excepturi optio reprehenderit")
    })
    it('Validar el JSON del endpoint POST', () => {
        cy.request("POST","https://jsonplaceholder.typicode.com/posts",{
            userId:1,
            id:1,
            title:"sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            body:"quia et suscipit suscipit recusandae consequuntur expedita et cumreprehenderit molestiae ut ut quas totamnostrum rerum est autem sunt rem eveniet architecto"
        }).then((response) => {
            expect(response.body).to.have.property("title","sunt aut facere repellat provident occaecati excepturi optio reprehenderit")
            expect(response.body).to.have.property("userId",1)
        })
    })
    it('Validar el ID del JSON del endpoint POST', () => {
        cy.request("POST","https://jsonplaceholder.typicode.com/posts")
          
    })
});