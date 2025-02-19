class transactionsPage {
  elements = {
    searchTransactionInput: () => cy.get(".search-term-input"),
    searchButton: () => cy.get(".sc-magnifier"),
    calendarFromInput: () =>
      cy.get(
        '[data-reactid=".0.1.0.0.2.1.1.0"] > .input-calendar > .input-calendar__input'
      ),
    calendarToInput: () =>
      cy.get(
        '[data-reactid=".0.1.0.0.2.1.1.1"] > .input-calendar > .input-calendar__input'
      ),
    editStatusButton: () =>
      cy.get('[data-reactid=".0.1.0.0.2.3.0.0.0.0"] > span'),
    setToVoidedButton: () => cy.contains("Voided"),
    setToHiddenButton: () => cy.contains("Hidden"),
    setToActiveButton: () => cy.contains("Active"),
    confirmButton: () => cy.get('[data-reactid=".3.1.0.0.1.1.1.1.0"]'),
    allOrdersSelectButton: () =>
      cy.get(".search-results-header > .checkbox-container > input"),
    stateSelector: () => cy.get('[data-reactid=".0.1.0.0.3.0.2.$0.0"]'),
    noOrdersText: () => cy.get(".caution"),
    statusUpdateText: () => cy.get(".operation-description > span"),
  };
}
module.exports = new transactionsPage();
