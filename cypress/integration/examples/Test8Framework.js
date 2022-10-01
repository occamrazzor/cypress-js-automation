/// <reference types='cypress'/>


describe("Framework Test Suite with Json data file in fixtures folder", function () {
    before(function () {
        // note data can be stored in the fixtures folder that can be accessed during runtime
        // runs once before all the tests in the block for setup and fixture takes example file name and .then for promise
        // This return the data from  cy.fixture('example') and resolves the promise and stores the content in data
        // The scope of data is restricted in the fixture block
        cy.fixture('example').then(function (data) {
            this.data=data

        })
    })
    
	it('framework test', function () {
       // 3 validation below
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        // CSS Select using Parent child cascade form->input->class form-control: nth-child(1) out of 10
        // however angular manipulates the class attributes dynamically as such fails, so use the name attribute
        //cy.get('form input.form-control:nth-child(1)').type('occam') <--This will fail
        cy.get('input[name="name"]:nth-child(2)').type(this.data.name)
        cy.get('select').select(this.data.gender) //Static drop down list use select
        //cy.get('input[class='ng-pristine ng-valid ng-touched']')
        // Another way is solve this promise and use .text method refer to Test5.js
        cy.get(':nth-child(4) > .ng-untouched').should('have.value', this.data.name)

        //To verify minlength property is valid ie.minlength > 2 ...inspect Name input attribute value
        // To validate any attribute use the attr or use .prop using promise eg Test7.js
        cy.get('input[name="name"]:nth-child(2)').should('have.attr', 'minlength', '2')

        // To verify if radio button is Entrepreneur (disabled) if its behaviour then use .should(be.  else if you are returning property then use .should(have.value) eg. Test3.js
        cy.get('#inlineRadio3').should('be.disabled')




         
	
    });
    
  
});
console.log('This will be printed in the web browser console');