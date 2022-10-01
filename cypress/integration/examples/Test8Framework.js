/// <reference types='cypress'/>


describe("Framework Test Suite with Json data file in fixtures folder", function () {
    before(function () {
        // note data can be stored in the fixtures folder that can be accessed during runtime
        // runs once before all the tests in the block for setup and fixture takes example file name and .then for promise
        // This return the data from  cy.fixture('example') and resolves the promise and stores the content in data
        // The scope of data is restricted in the fixture block
        cy.fixture('example').then(function (data) {
            this.data=data
            //globalThis.data=data
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

        //////////////////////////////////////////////////////////////
        //	47. Building customized Cypress Commands for reusing the code.
        //  Write function to choose product by name and add multiple products
            //49. cy.pause() <-- this line will pause the cypress during execution. or append .debug()
        cy.get(':nth-child(2) > .nav-link').click()
        // Write a common locator to grab all the text to find desired text. eg Test5.js

     /*    cy.get('h4.card-title').each(($el, index, $list) => {
            if($el.text().includes('Blackberry')) {
                cy.get('button.btn.btn-info').eq(index).click()
            }    
        }) */ // The code above is transffered into the support folder into a function that take productName
        // Here we need to build a function to replication the above code with custom cypress methods in support folder
        // The code below will work however, code on line 52 is parameterized with added code in example.json
        /*  cy.selectProduct('Blackberry')
            cy.selectProduct('Nokia Edge')  */
         /////////////////////////////////////////////////////////////
        //Need to pull up each and every value present in the example.json productName array and repeat the select product for each and every product present in the array by using javascript array syntax
        /* const array1 = ['a', 'b', 'c'];

        array1.forEach(element => console.log(element));
        
        // expected output: "a"
        // expected output: "b"
        // expected output: "c" */
        

        this.data.productName.forEach(function (element) {

            cy.selectProduct(element)
        });
        // Final note everything is encapsulated from your custom commands (support/command.js) and the elements are derived from the fixtures(/fixtures/example.json)

    });
    
  
});
console.log('This will be printed in the web browser console');