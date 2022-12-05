describe('My First Test suite',()=>{
  
    it('My second test case', function(){

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('.search-keyword').type('ca');
        cy.wait(2000);
       
        cy.get('.products').find('.product').each(($element)=> {
            const textVeg = $element.find('.product-name').text();
            
            if (textVeg.includes('Cashews')){
                
                cy.wrap($element.find('button')).click();
            }
        });

        cy.get('.cart-icon > img').click();
        cy.contains('PROCEED TO CHECKOUT').click();
        cy.contains('Place Order').click();
    });

});