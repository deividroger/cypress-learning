Cypress.Commands.add('LaunchPage',()=>{
    cy.visit('/');
});

Cypress.Commands.add('InsertUsername',(username)=>{

    cy.fixture('selectors.json').then((el) =>{
        cy.get(el.usernameField).should('exist').and('be.visible').type(username);
    });
});

Cypress.Commands.add('InsertPassword',()=>{

    cy.fixture('selectors.json').then((el) =>{
    cy.get(el.passwordField).should('exist').and('be.visible').type(el.password);
  });

});

Cypress.Commands.add('ClickLoginButton',()=>{

    cy.fixture('selectors.json').then((el) =>{
    cy.get(el.loginButton).should('exist').and('be.visible').click();
  });

});

Cypress.Commands.add('VerifyProductPage',()=>{

    cy.fixture('selectors.json').then((el) =>{
        cy.get(el.pageTitle).should('exist').and('have.text','Products');
  });
});