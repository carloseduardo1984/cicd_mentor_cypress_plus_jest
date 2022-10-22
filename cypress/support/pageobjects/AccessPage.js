import HomeElements from '../elements/HomeElements'
const MyElements = new HomeElements
const url = Cypress.config("baseUrl")

class AccessPage {
    // Opening homepage
    accessSite() { 
        cy.visit(url)
    }

    // click on some element
   select_language() { 
        cy.get(MyElements.language_settings()).click()
        cy.get(MyElements.english_language()).click()
    }

    /* some function to learn > 
    cy.contains().select()
    cy.get().should()
    cy.get().type()
    cy.intercept()
    */
    
}

export default AccessPage;