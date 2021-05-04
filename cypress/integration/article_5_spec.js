describe('Open Article 5 Page', () => {
    it('successfully loads', () => {
      cy.visit('/') // change URL to match your dev URL
    })

    it('shows bottom nav bar working and redirecting to article 5', function (){
        cy.contains('5').click()
        cy.wait(1000)
        cy.url().should('include', '/article5')
    })

    it('shows loading prior to fetch of data then load header', function (){
        //awaits the GET req
        cy.wait(1000)
        cy.get('h1').should('contain', 'Nulla nibh erat, pharetra at ultricies nec, tincidunt luctus arcu')
    })

    it('shows page being dynamically created based upon data type in json', function (){
       cy.get('h2').should('contain', 'Nulla nibh erat, pharetra at ultricies nec, tincidunt luctus arcu')
       cy.get('article').should('have.length', 1)
       //checks that 1 'paragraph' containers are being created
       cy.get('article').find('p').should('have.length', 1)
       //checks that 2 'img' containers are being created
       cy.get('article').find('img').should('have.length', 2)
       //checks that 0 'list' containers are being created
       cy.get('article').find('ul').should('have.length', 0)
    })
  })