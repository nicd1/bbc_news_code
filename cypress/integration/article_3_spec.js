describe('Open Article 3 Page', () => {
    it('successfully loads', () => {
      cy.visit('/') // change URL to match your dev URL
    })

    it('shows bottom nav bar working and redirecting to article 3', function (){
        cy.contains('3').click()
        cy.wait(1000)
        cy.url().should('include', '/article3')
    })

    it('shows loading prior to fetch of data then load header', function (){
        //awaits the GET req
        cy.wait(1000)
        cy.get('h1').should('contain', 'Vestibulum posuere orci ullamcorper nisi porta, sit amet tempus nibh porta')
    })

    it('shows page being dynamically created based upon data type in json', function (){
       cy.get('h2').should('contain', 'Donec est neque, vulputate vitae magna non, aliquam semper lectus')
       cy.get('article').should('have.length', 1)
       //checks that 8 'paragraph' containers are being created
       cy.get('article').find('p').should('have.length', 8)
       //checks that 0 'img' containers are being created
       cy.get('article').find('img').should('have.length', 0)
       //checks that 0 'list' containers are being created
       cy.get('article').find('ul').should('have.length', 0)
    })
  })