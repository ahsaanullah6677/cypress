beforeEach( 'Run url'   ,() =>{

  cy.visit('https://www.invozeal.com')

})



describe('My First Test', () => {

  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

    it('About US', () => {
     
    
      cy.get(':nth-child(2) > .nav-link').click()
      cy.get('.col-md-9 > .mb-0').contains('About Us')

    })



    it('Services ', () => {
     
    
      cy.get(':nth-child(3) > .nav-link').click()
      cy.get('.col-md-9 > .mb-0').contains('Services')

    })

    it('Port folio', () => {
     
    
      cy.get(':nth-child(4) > .nav-link').click()
      cy.get('.col-md-9 > .mb-0').contains('Portfolio')

    })

    
    it('Blog', () => {
     
    
      cy.get(':nth-child(5) > .nav-link').click()
      cy.get('.col-md-9 > .mb-0').contains('Blog')

    })

    it('Contact', () => {
     
    
      cy.get(':nth-child(6) > .nav-link').click()
      cy.get('.col-md-9 > .mb-0').contains('Contact')

    })


  })