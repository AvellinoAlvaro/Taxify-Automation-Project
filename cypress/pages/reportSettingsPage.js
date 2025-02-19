class reportSettingsPage {
  elements = {
    reportEditBtn: (reportID) =>
      cy.get(`[data-reportid="${reportID}"] > :nth-child(5)`),
    // ArizonaTPTReportEditBtn: () => cy.get('[data-reportid="273"] > :nth-child(5)'),
    // coloradoSUTEditBtn : () => cy.get('[data-reportid="323"] > :nth-child(5)'),
    // OhioUST1EditBtn: () => cy.get('[data-reportid="130"] > :nth-child(5)'),
    createReportBtn: () =>
      cy.contains("Create reports for a specific date range"),
    frequencySelector: () => cy.get("#non-recurring-frequency-ddl"),
    // Format for Period Selector is for Monthly: YYYY.MM.01, For Quarterly: YYYY.MM(01,04,07,10).01 and for Annually: YYYY.01.01 for Semi-Annually: YYYY.MM(01,07).01
    periodSelector: (periodName) =>
      cy.get(`[data-timevalue="${periodName}"]`).first(),
    saveBtn: () => cy.get("#save-non-recurring"),
    confirmationMsg: () => cy.get(".gritter-title"),
  };
}
module.exports = new reportSettingsPage();
