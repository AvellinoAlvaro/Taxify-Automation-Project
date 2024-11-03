import loginPage from "../pages/loginPage";

class loginPageAppActions{

     login = (username, password) =>{
        cy.visit('/app#/dashboard?_k=841qp1');
        loginPage.elements.usernameInput().clear();
        loginPage.elements.usernameInput().type(username);
        loginPage.elements.passwordInput().clear();
        loginPage.elements.passwordInput().type(password);
        loginPage.elements.submitBtn().click();
    };
}
    module.exports = new loginPageAppActions();