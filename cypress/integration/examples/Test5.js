/// <reference types="Cypress" />


describe("My  Fifth Test Suite", function (){
	it("My FifthTest case", function () {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        
        cy.get('tr td:nth-child(2)').each(($el, index, $list) => {
            const text = $el.text()
            // use .next to traverse to the next sibling
            if (text.includes('Master Selenium Automation in simple Python Language')) {
                //moving to the sibling from the desired element
                cy.get('tr td:nth-child(2)').eq(index).next().then(function (price) {
                    
                    const priceText = price.text()
                    expect(priceText).to.equal('25')
                    // See notes below
                })


			}
		})
	
	});
});
console.log('This will be printed in the web browser console');

/* Note: Jquery cannot resolve a cypress object
ie cy.get("tr td:nth-child(2)").eq(index).next().{text()Note: this is not allowed because text is a Jquery object and if its attached to Cypress then cypress will not resolve a promise so
need to use .then to resolve the promise after next().}

 cy.get("tr td:nth-child(2)").eq(index).next().then(function(price){
    const priceText = price.text()
    expect(priceText).to.equal('25')
})
 */