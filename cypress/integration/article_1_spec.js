describe('Open Article 1 Page', () => {
    it('successfully loads', () => {
      cy.visit('/') // change URL to match your dev URL
    })

    it('shows loading prior to fetch of data then load header', function (){
        //checks that url redirects to 'article1' when app is visited
        cy.url().should('include', '/article1')
        cy.get('span').should('contain', 'Loading...')

        //awaits the GET req
        cy.wait(1000)
        cy.get('h1').should('contain', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit')
    })

    it('shows page being dynamically created based upon data type in json', function (){
       cy.get('h2').should('contain', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit')
       cy.get('article').should('have.length', 1)
       //checks that 3 'paragraph' containers are being created
       cy.get('article').find('p').should('have.length', 3)
       //checks that 1 'img' containers are being created
       cy.get('article').find('img').should('have.length', 1)
       //checks that 1 'list' containers are being created
       cy.get('article').find('ul').should('have.length', 1)
    })
  })