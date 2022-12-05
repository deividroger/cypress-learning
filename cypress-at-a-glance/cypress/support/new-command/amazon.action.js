Cypress.Commands.add('searchAnItem',(item)=>{

    cy.fixture('elements.json').then((loc)=>{
        cy.get(loc.textBox).should("be.visible").type(item);
    });
});

Cypress.Commands.add('clickSearchButton',()=>{
    cy.fixture('elements.json').then((loc)=>{
        cy.get(loc.searchButton).should("be.visible").click();
    });
});