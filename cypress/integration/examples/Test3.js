/// <reference types="Cypress" />

describe("My  Third Test Suite", function (){
	it("My ThirdTest case", function () {
		cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
		//Note: for checking the behaviour of the element like checkbox use .should and be.checked
		cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
		//Goal is to validated the option1 is selected, so for properties use have for comparision
		cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
		// Select all the checkboxes and check method will accept the value property of the checkboxes
		cy.get('input[type="checkbox"]').check(['option2', 'option3'])
		
		//Static dropdowns select and pass it the option name or value attribue of the option 
		cy.get('select').select('option2').should('have.value','option2')

		// Dynamic dropdown Selection
		cy.get('#autocomplete').type('ind')
		cy.get('.ui-menu-item div').each(($el, index, $list)=>{
			if ($el.text() === 'India') {
				cy.wrap($el).click()
			}
		})

		cy.get('#autocomplete').should('have.value', 'India')

		cy.get('#displayed-text').should('be.visible')
		cy.get('#hide-textbox').click()
		cy.get('#displayed-text').should('not.be.visible')
		cy.get('#show-textbox').click()
		cy.get('#displayed-text').should('be.visible')

		//using value attribute to select the radio button because its unique
		cy.get('[value="radio2"]').check().should('be.checked')


	});
});
console.log('This will be printed in the web browser console');