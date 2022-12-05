
describe('Automation Practice - Handling TABS',()=>{

    it('Handling TABS with Cypress using each command',()=>{
        
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#opentab').then( function( element){
            const url = element.prop('href');
            cy.visit(url);
        });
    });

});