import { beforeEach, it } from "mocha"
require('@cypress/xpath');

describe("Ejercicio de Apis con json-server",()=>{
    let datos;
    it("Test Api Get 01", () => {
        datos = cy.request("http://localhost:3000/posts")
        datos.its("status").should("equal",200)
    });
    it("Test Api Get 02", () => {
        datos = cy.request("http://localhost:3000/posts").should((response)=>{
            expect(response.status).to.eq(200)
        })
    });
    it("Test Api 03", () => {
        cy.request({
            method: "GET",
            url: "http://localhost:3000/posts",
            headers: {
                accept: "application/json"
            }
        }).then(response =>{
            let datos;
            datos = JSON.parse(JSON.stringify(response.body))
            expect(datos[0]).has.property("title","Ejercicio Json-Server")
            expect(datos[0]).has.property("author","typicode")
        })

    });

})