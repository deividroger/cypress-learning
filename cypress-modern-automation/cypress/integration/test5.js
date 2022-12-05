
describe('Automation Practice - Tables',()=>{

    it('Handling Web tables with Cypress using each command',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        cy.get('tr td:nth-child(2)').each((element,index, list) => {
          const text =  element.text();
       
          if(text.includes("Python")){
            
            cy.get('tr td:nth-child(2)').eq(index).next().then(function(price){
                const priceText =  price.text();

                expect(priceText).to.equal('25');
            });
          }
        });
    });

});