context("Todo",()=>{

  let todos = [
    "Please wash the baby",
    "Ask for more time to prepare LT",
    "look at the before and after buttons"
  ];

  beforeEach(()=>{
    cy.visit('/');
    todos.forEach((td) => {
      cy.get('.form-control')
        .type(`${td}`)
        .get('[data-cy=addTask]').click()
    });
  });

  it("Visit home page", () => {
    cy.get("h1").should('have.text','Vue Todo with Vuex ');
    cy.get("button").should((btns) => {
      expect(btns).to.have.length(2);
      expect(btns.eq(0)).to.have.text("Add task");
      expect(btns.eq(1)).to.have.text("load todos from api")
    });
    cy.get('.form-control').should((fc) => {
      expect(fc).to.have.prop("placeholder",'task here')
    })
  });

  it("Add todos and check the first", () => {
    cy.get('li').should((lis) => {
      expect(lis).to.have.length(3);
      expect(lis.first()).to.contain(todos[0]);
    });
  });

  it('Try to add blank todo and get error message', () => {
    cy.get('[data-cy=addTask]').click()
      .get('.alert').should('be.visible')
  });

  it('Call API and fill the todos', () => {
    cy.server();
    cy.route('https://jsonplaceholder.typicode.com/todos',
      [
        { id:1,
          title:"THIS IS Easy TO MOCK"
        },
        { id:2,
          title:"MOCKED VALUES"
        }
      ]
    );
    cy.get('[data-cy=callApi]').click();
    cy.get('li').should((lis) => {
      expect(lis).to.have.length(5);
    });
  });


  it('type somethng and clean error message', () => {
    cy.get('.form-control').type('somthing')
      .get('.alert').should('not.be.visible')
  });

  it('change item to done', () => {
      cy.get('input').eq(1).check();
      cy.get('.todoText').should('be.visible')
  });

  it('clear all should clear all lists', () => {
    cy.get('input').eq(1).check();
    cy.get('.btn.btn-secondary.btn-lg.btn-block').click();
    cy.get('.todoText').should('not.be.visible');
    cy.get('li').should('not.be.visible')
  });
});
