it('registration modal eyes', () => {

        cy.visit('/register')

        cy.get(registrationModal.registrationModal).should('be.visible')

        cy.eyesOpen({

            testName: 'MC - registration'

        })

        cy.eyesCheckWindow('Registration modal step 1')

        cy.eyesClose()

    })