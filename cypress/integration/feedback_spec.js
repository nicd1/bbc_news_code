describe('Open Feedback Page', () => {
    it('successfully loads', () => {
      cy.visit('/') // change URL to match your dev URL
    })

    it('shows bottom nav bar working and redirecting to feedback page', function (){
        cy.contains('Feedback').click()
        cy.wait(1000)
        cy.url().should('include', '/feedback')
    })

    it('shows loading prior to fetch of data then load header', function (){
        //awaits the GET req
        cy.wait(1000)
        cy.get('h1').should('contain', 'Feedback')
    })

    it('shows page being created based upon Feedback.js', function (){
        //checks for subheader deletion
       cy.get('h2').should('have.length', 0)
       //checks for article deletion
       cy.get('article').should('have.length', 0)
       //checks that 1 'paragraph' containers are being created in the main body
       cy.get('main').find('p').should('have.length', 1)
       //checks that img containers have been deleted
       cy.get('main').find('img').should('have.length', 0)
       //checks that 0 'list' containers are being created
       cy.get('main').find('ul').should('have.length', 0)
        //clicks stars one at a time to ensure they work
       cy.get('.MuiRating-label').click({ multiple: true })
    })
  })