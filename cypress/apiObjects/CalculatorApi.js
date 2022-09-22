/// <reference types="Cypress" />

class CalculatorApi {
    getEGrid () {
        return cy.intercept('GET','/carbon-footprint-calculator/data/egrid.csv')
    }
}

export default CalculatorApi