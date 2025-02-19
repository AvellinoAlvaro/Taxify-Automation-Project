class simpleImportPage {
  elements = {
    importDataButton: () => cy.contains("Import Data"),
    simpleImportButton: () => cy.get('[data-reactid=".0.3.1.0"] > a > img'),
    itemFileRdoButton: () =>
      cy.get("#ctl00_ctl00_PageMainContent_Main_rdoItem"),
    fileInputMenu: () => cy.get("input[type=file]"),
    confirmButton: () => cy.get("#ctl00_ctl00_PageMainContent_Main_btnNext"),
    statusMessage: () => cy.get(".last-processed"),
  };
}
module.exports = new simpleImportPage();
