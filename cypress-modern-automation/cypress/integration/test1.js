describe('My First Test suite',()=>{
  
    it('My first test case', function(){

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('.search-keyword').type('ca');
        cy.wait(2000);
        cy.get('.product').should('have.length',5);
        cy.get('.product:visible').should('have.length',4);
        cy.get('.products').find('.product').should('have.length',4);

        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click();

        cy.get('.products').find('.product').each(($element)=> {
            const textVeg = $element.find('.product-name').text();
            
            if (textVeg.includes('Cashews')){
                
                cy.wrap($element.find('button')).click();
            }
        });

        cy.get('.brand').should('have.text','GREENKART')


        cy.get('.brand').then((element)=>{
                cy.log( element.text());
        });
            
        


    });

});