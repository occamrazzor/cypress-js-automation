/// <reference types="Cypress" />

describe("My  Second Test Suite", function (){
	it("My SecondTest case", function () {
		cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
		cy.get(".search-keyword").type("ca");
		cy.wait(2000);
	
		// Parent child chaining
		cy.get('.products').as('productLocator')// This is aliasing 
				
		// Finds all four products and iterates thru the array using each($el, index, $list)
		cy.get(".products").find(".product").each(($el, index, $list) => {
			const textVeg = $el.find("h4.product-name").text();
				if (textVeg.includes("Cashews")) {
					cy.wrap($el).find('button').click()
				}
		});
		cy.get('.cart-icon > img').click()
		cy.contains('PROCEED TO CHECKOUT').click()
		cy.contains('Place Order').click()
	});
});
console.log('This will be printed in the web browser console');