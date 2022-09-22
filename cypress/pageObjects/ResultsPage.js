/// <reference types="Cypress" />

class ResultsPage {
    getProgressCompleteMsg () {
        return cy.get('#progress-complete')
    }
}

export default ResultsPage