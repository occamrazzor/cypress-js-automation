class ProductPage{
    checkOutButton() {
        return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')
    }

    prodCheckOut() {
        return cy.contains('Checkout')
    }

    prodEnterCountry() {
        return cy.get('#country')
    }

    prodSelectCountry() {
        return cy.get('.suggestions > ul > li > a')
    }
}
export default ProductPage;