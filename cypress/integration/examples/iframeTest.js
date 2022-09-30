/// <reference types='cypress' />
/// <reference types='cypress-iframe'/>
import 'cypress-iframe'

describe("iframe test Suite", function () {
    
	it.only("Accessing iframe from Main website ", function () {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        // Accessing iframe from the main website. Note: Need to install iframe plugin:> npm install -D cypress-iframe
        // The plugin install can be verifed in package-lock.json
        // Objective: To land on iframe and navigate to Mentorship link and add 2 packages

        cy.frameLoaded('#courses-iframe') // This will load the iframe into cypress object
        // First switch to the iframe then find the link and select using index form the list(more than one mentorship is available on the website). Note: navigate to the actual webpage to search for the elements.
        cy.iframe().find('a[href*="mentorship"]').eq(0).click() 

        cy.iframe().find('h1[class*="pricing-title"]').should('have.length', 2
              
	
    });
    
  
});
console.log('This will be printed in the web browser console');