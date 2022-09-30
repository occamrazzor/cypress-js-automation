/// <reference types='cypress'/>




describe("My  Seventh Test Suite", function () {
    
	it.only("Href Attribute ", function () {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        // Note need to get value associated with href attribute, need to use JQuery to get property of href nedd to resolve the jquery method with .then and promise
        // 
        cy.get('#opentab').then(function(el){
            
            const url = el.prop('href')
            cy.visit(url)


        })

        
	
    });
    
  
});
console.log('This will be printed in the web browser console');