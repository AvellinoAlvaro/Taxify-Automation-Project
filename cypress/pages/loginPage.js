class loginPage{

    elements={

        usernameInput: () => cy.get('#inUsername'),
        passwordInput: () => cy.get('#inPassword'),
        submitBtn: () => cy.get('#btnSubmit')

    };



}
module.exports = new loginPage();