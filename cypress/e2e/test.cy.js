/// <reference types="cypress" />

describe('Sinai Tests',()=>{

    it('Calculate carbon footprint: Simple happy flow',()=>{
        cy.intercept('GET','/carbon-footprint-calculator/data/egrid.csv').as('egrid')
        cy.visit('https://www3.epa.gov/carbon-footprint-calculator/')

        cy.get('#ppl-in-household-input').type('1')
        cy.get('#zip-code-input').type('12345')
        cy.get('#get-started').click()

        cy.wait('@egrid')
        cy.get('#primaryHeatingSource').select(1)
        cy.get('#naturalGasTextInput').type('23')
        cy.get('#electricityTextInput').type('44')
        cy.get('#electricityGreenTextInput').type('10')
        cy.get('#fuelTextInput').type('72')
        cy.get('#propaneTextInput').type('37')

        cy.get('#energyAC').type('5')
        cy.get('#energyHeat').type('5')
        cy.get('#lightsToReplace').type('5')
        cy.get('#pwrMgmtSelect').select(1)
        cy.get('#increaseGreenInput').type('10')
        cy.get('#coldWaterSelect').select(1)
        cy.get('#loadsPerWeek').type('10')
        cy.get('#AirDrySelect').select(1)
        cy.get('#percentageAirDrySelect').select(1)
        cy.get('#fridgeSelect').select(1)
        cy.get('#furnaceSelect').select(1)
        cy.get('#windowSelect').select(1)
        cy.get('#to-transportation').click()

        cy.get('#numVehiclesInput').select(1)
        cy.get('#maintCurrentSelect').select(1)
        cy.get('#vehicle1Miles').type('240')
        cy.get('#vehicle1Select').select(1)
        cy.get('#vehicle1GasMileage').type('21.4')
        cy.get('#maintReduceSelect').select(1)
        cy.get('#reduceMilesInput1').type('120')
        cy.get('#reduceMilesSelect1').select(1)
        cy.get('#replaceVehicleInput1').type('25')
        cy.get('#to-waste').click()

        cy.get('#aluminumCheckbox').check()
        cy.get('#plasticCheckbox').check()
        cy.get('#glassCheckbox').check()
        cy.get('#newspaperCheckbox').check()
        cy.get('#magazinesCheckbox').check()
        cy.get('#to-report').click()

        cy.get('#progress-complete').should('contain.text','Congratulations! You have completed all the calculator sections.')
    })
})