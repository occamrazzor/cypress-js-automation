/// <reference types="Cypress" />

describe("My First Test Suite", function (){
	it("My FirstTest case", function () {
		cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
		cy.get(".search-keyword").type("ca");
		cy.wait(2000);
		// To verify all four items are displayed need .visible to discard the invisible 5th element
		cy.get(".product:visible").should("have.length", 4);
		// Parent child chaining
		cy.get('.products').as('productLocator')// This is aliasing 
		cy.get('@productLocator').find('.product').should('have.length', 4);
		//cy.get(".products").find(".product").should("have.length", 4); // This is original code without alias
		cy.get(".products").find(".product").eq(2).contains("ADD TO CART").click();
		// Finds all four products and iterates thru the array using each($el, index, $list)
		cy.get(".products").find(".product").each(($el, index, $list) => {
			const textVeg = $el.find("h4.product-name").text();
				if (textVeg.includes("Cashews")) {
					cy.wrap($el).find('button').click()
				}
		});
		//assert if logo text is correctly displayed 
		cy.get('.brand').should('have.text','GREENKART')

		// this is to print in logs
		cy.get('.brand').then(function (logoElement) {
			cy.log(logoElement.text()) //log method prints output,text() its not a cypress command its jquery method

		})
		
		// cy.log(cy.get('.brand').text()) ....throws an error because its not a function
	});
});
console.log('This will be printed in the web browser console');