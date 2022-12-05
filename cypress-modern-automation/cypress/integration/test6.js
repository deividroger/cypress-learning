
describe('Automation Practice - Mouse Hover',()=>{

    it('Handling MOUSE HOVER with Cypress using each command',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        //cy.get("div.mouse-hover-content").invoke('show');

        cy.contains('Top').click({force:true});
        cy.url().should('include','top');
        
    });

});