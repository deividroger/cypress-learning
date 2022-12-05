describe('Automation Practice - WebUI Controls',()=>{

    it('WebUI Controls - Checkbox example',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#checkBoxOption1').check();
        cy.get('#checkBoxOption1').should('be.checked').and('have.value','option1');
        cy.get('#checkBoxOption2').should('not.be.checked');

        // cy.get("input[type='checkbox']").check();
        cy.get("input[type='checkbox']").check(['option2','option3']);
        cy.get("input[type='checkbox']").uncheck(['option1']);

    });

    it('WebUI Controls - Static Dropdown example',()=>{
        cy.get('select') .select('Option3').should('have.value','option3');
    });

    it('WebUI Controls - Dynamic Dropdown example',()=>{
       cy.get('#autocomplete').type('braz');

       cy.get('.ui-menu-item div').each((item)=>{
          if(item.text()=== 'Brazil')  {
            cy.wrap(item).click();
          }
       });

       cy.get('#autocomplete').should('have.value','Brazil');

    });

    it('WebUI Controls - Handling visible and invible elements',()=>{
        cy.get('#displayed-text').should('be.visible');
        cy.get('#hide-textbox').click();
        cy.get('#displayed-text').should('not.be.visible');
    });


    it('WebUI Controls - Radio button',()=>{
        cy.get('[value="radio2"]').check().should('be.checked');
    });

});