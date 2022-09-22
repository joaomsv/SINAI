/// <reference types="Cypress" />

class WastePage {
    getAluminumCheckbox () {
        return cy.get('#aluminumCheckbox')
    }

    getPlasticCheckbox () {
        return cy.get('#plasticCheckbox')
    }

    getGlassCheckbox () {
        return cy.get('#glassCheckbox')
    }

    getNewspaperCheckbox () {
        return cy.get('#newspaperCheckbox')
    }

    getMagazinesCheckbox () {
        return cy.get('#magazinesCheckbox')
    }

    getReportResultsBtn () {
        return cy.get('#to-report')
    }
}

export default WastePage