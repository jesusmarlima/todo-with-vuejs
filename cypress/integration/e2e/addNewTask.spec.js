context("Todo",()=>{
  it("visit home page", () => {
    cy
      .visit('/')
        cy.get('.form-control').should(($fc) => {
          expect($fc).to.have.value('')
        });
  });

  it("add todos", () => {
    cy
      .visit('/')
      for (var x=0; x < 3; x++) {
        cy.get('.form-control')
          .type(`learn more about cypress ${x}`)
          .get('.btn')
          .click()
      }
      cy
        .get('li')
        .should(($lis) => {
          expect($lis).to.have.length(3)
          expect($lis.eq(0)).to.contain("learn more about cypress 0")
        });
  });

  it('blank todo and get error message', () => {
    cy
      .get('.btn').click()
      .get('.alert').should('be.visible')
  });

  it('type somethng and clean error message', () => {
    cy
      .get('.form-control').type('somthing')
      .get('.alert').should('not.be.visible')
  });

  it('change item to done', () => {
    cy.get('input').eq(1).check()
    cy.get('.fas.fa-check.fa-xs').should('be.visible')
  });

  it('clear all should clear all lists', () => {
    cy.get('.btn.btn-secondary.btn-lg.btn-block')
      .click()
    cy.get('.fas.fa-check.fa-xs').should('not.be.visible')
    cy.get('li').should('not.be.visible')

  });

});