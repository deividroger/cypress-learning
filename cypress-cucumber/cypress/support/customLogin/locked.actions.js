
Cypress.Commands.add('VerifyLockedMessage',()=>{

    cy.fixture('selectors.json').then((el) =>{
        cy.get(el.errorButton).should('exist').and('have.text').type(el.errorMessage);
    });
});