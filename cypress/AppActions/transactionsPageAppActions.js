import transactionsPage from "../pages/transactionsPage";

class transactionsPageAppActions {
  deleteOrders = (dateFrom, dateTo, state) => {
    cy.visit("Web/Taxify/Transactions.aspx#/searchTransactions");
    //transactionsPage.elements.searchTransactionInput().type(transactionId);
    transactionsPage.elements.calendarFromInput().clear();
    cy.wait(1500);
    transactionsPage.elements.calendarFromInput().click().type(dateFrom);
    transactionsPage.elements.calendarFromInput().type("{enter}");
    transactionsPage.elements.calendarToInput().clear();
    cy.wait(200);
    transactionsPage.elements.calendarToInput().click().type(dateTo);
    transactionsPage.elements.calendarToInput().type("{enter}");
    transactionsPage.elements.stateSelector().click();
    cy.contains(state).click();
    cy.wait(1500);
    transactionsPage.elements.allOrdersSelectButton().click();
    transactionsPage.elements.editStatusButton().click();
    transactionsPage.elements.setToVoidedButton().click();
    transactionsPage.elements.confirmButton().click();
    transactionsPage.elements
      .noOrdersText()
      .should("contain", "No Matching Transactions");
  };
  hideOrders = (dateFrom, dateTo, state) => {
    cy.visit("Web/Taxify/Transactions.aspx#/searchTransactions");
    //transactionsPage.elements.searchTransactionInput().type(transactionId);
    transactionsPage.elements.calendarFromInput().clear();
    cy.wait(1500);
    transactionsPage.elements.calendarFromInput().click().type(dateFrom);
    transactionsPage.elements.calendarFromInput().type("{enter}");
    transactionsPage.elements.calendarToInput().clear();
    cy.wait(200);
    transactionsPage.elements.calendarToInput().click().type(dateTo);
    transactionsPage.elements.calendarToInput().type("{enter}");
    transactionsPage.elements.stateSelector().click();
    cy.contains(state).click();
    cy.wait(1500);
    transactionsPage.elements.allOrdersSelectButton().click();
    transactionsPage.elements.editStatusButton().click();
    transactionsPage.elements.setToHiddenButton().click();
    transactionsPage.elements.confirmButton().click();
    transactionsPage.elements.statusUpdateText.should(
      "contain",
      "Status update complete!"
    );
  };
  activateOrders = (dateFrom, dateTo, state) => {
    cy.visit("Web/Taxify/Transactions.aspx#/searchTransactions");
    //transactionsPage.elements.searchTransactionInput().type(transactionId);
    transactionsPage.elements.calendarFromInput().clear();
    cy.wait(1500);
    transactionsPage.elements.calendarFromInput().click().type(dateFrom);
    transactionsPage.elements.calendarFromInput().type("{enter}");
    transactionsPage.elements.calendarToInput().clear();
    cy.wait(200);
    transactionsPage.elements.calendarToInput().click().type(dateTo);
    transactionsPage.elements.calendarToInput().type("{enter}");
    transactionsPage.elements.stateSelector().click();
    cy.contains(state).click();
    cy.wait(1500);
    transactionsPage.elements.allOrdersSelectButton().click();
    transactionsPage.elements.editStatusButton().click();
    transactionsPage.elements.setToActiveButton().click();
    transactionsPage.elements.confirmButton().click();
    transactionsPage.elements.statusUpdateText.should(
      "contain",
      "Status update complete!"
    );
  };
}
module.exports = new transactionsPageAppActions();
