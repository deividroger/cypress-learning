
Cypress.Commands.add('VerifyProductImages',()=>{

    cy.fixture('selectors.json').then((el) =>{
        cy.get(el.productImage).should('exist').and('have.length',12);
    });
});


