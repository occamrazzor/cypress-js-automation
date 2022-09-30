/// <reference types="Cypress" />


describe("My  Sixth Test Suite", function (){
	it("My SixthTest case", function () {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        //Note Cypress does no have direct mousehover support so need to use JQuery
        // JQuery with show method will display visible/invisible elements how to invoke any Jquery function using Cypress? Use invoke.show()
        cy.get('div .mouse-hover-content').invoke('show')
        cy.contains('Top').click() // Will take the navigation to top of page...(rahulshettyacademy.com/AutomationPractice/#top) 
        cy.url().should('include','top')
	
    });
    
    it.only("Clicking on the hidden element without clicking the Mouse Hover Button", function () {
        
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.contains('Top').click({ force: true })
        cy.url().should('include','top')



    })
});
console.log('This will be printed in the web browser console');