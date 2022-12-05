Cypress.Commands.add('verifyResultSet',(item)=>{
    
    cy.fixture('elements.json').then((loc)=>{
        cy.get(loc.resultHeader).should("be.visible")
            .invoke('text').then((result)=>{
                expect(result).to.include("results for")
        });

        cy.get(loc.itemHeader).should("be.visible")
            .invoke('text').then((result)=>{
                expect(result).to.include(item)
        });
    });
});