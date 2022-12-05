describe('a describe block',()=>{



    it('Should Visit amazon',()=>{
        
        // cy.fixture('elements.json').then((loc)=>{
        //     cy.get(loc.textBox).should('be.visible').type(loc.ferrari);
        //     cy.get(loc.searchButton).should('exist').click();
        // });

        cy.fixture('elements.json').then((loc)=>{
            cy.searchAnItem(loc.ferrari);
            cy.clickSearchButton();
            cy.verifyResultSet(loc.ferrari);
        });         
    });

    
    it('Should Visit amazon again',()=>{
        
        // cy.fixture('elements.json').then((loc)=>{
        //     cy.get(loc.textBox).type(loc.iPhone);
        //     cy.get(loc.searchButton).click();
        // });

        cy.fixture('elements.json').then((loc)=>{
            cy.searchAnItem(loc.iPhone);
            cy.clickSearchButton();
            cy.verifyResultSet(loc.iPhone);
        });         
 
    });

    it('Should Visit amazon the third time',()=>{
        
        // cy.fixture('elements.json').then((loc)=> {
        //     cy.get(loc.textBox).type(loc.pixelPro);
        //     cy.get(loc.searchButton).click();
        // } );

        cy.fixture('elements.json').then((loc)=>{
            cy.searchAnItem(loc.pixelPro);
            cy.clickSearchButton();
            cy.verifyResultSet(loc.pixelPro);
        });

    });

});