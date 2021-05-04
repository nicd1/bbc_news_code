describe('Open Article 4 Page', () => {
    it('successfully loads', () => {
      cy.visit('/') // change URL to match your dev URL
    })

    it('shows bottom nav bar working and redirecting to article 4', function (){
        cy.contains('4').click()
        cy.wait(1000)
        cy.url().should('include', '/article4')
    })

    it('shows loading prior to fetch of data then load header', function (){
        //awaits the GET req
        cy.wait(1000)
        cy.get('h1').should('contain', 'Maecenas venenatis lorem ut erat dictum, sed varius est porta')
    })

    it('shows page being dynamically created based upon data type in json', function (){
       cy.get('h2').should('contain', 'Maecenas venenatis lorem ut erat dictum, sed varius est porta')
       cy.get('article').should('have.length', 1)
       //checks that 3 'paragraph' containers are being created
       cy.get('article').find('p').should('have.length', 3)
       //checks that 0 'img' containers are being created
       cy.get('article').find('img').should('have.length', 0)
       //checks that 2 'list' containers are being created
       cy.get('article').find('ul').should('have.length', 2)
    })
  })