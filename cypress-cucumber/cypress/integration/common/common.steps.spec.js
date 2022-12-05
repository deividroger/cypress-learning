Given(/^I launch the SwagLab site$/,()=>{
    cy.LaunchPage();
});

Then(/^I insert the password$/,()=>{
    cy.InsertPassword();
});

When(/^I click the Login button$/,()=>{
    cy.ClickLoginButton();
});


Then(/^I insert the "([^"]*)" username$/,(userType)=>{
    
    cy.fixture('selectors.json').then((el) =>{
        
        switch (userType) {
            case 'standard':
                cy.InsertUsername(el.standard);
                break;
            case 'problem':
                cy.InsertUsername(el.problem);
                break;
            case 'glitch':
                cy.InsertUsername(el.glitch);
                break;
            case 'locked':
                cy.InsertUsername(el.locked);
                break;
        }    
    });
});