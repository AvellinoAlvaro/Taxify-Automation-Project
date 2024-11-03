import reportSettingsPage from "../pages/reportSettingsPage";

class reportSettingsPageAppActions{

     createReport = (reportID,frequency,period1) =>{
        cy.visit('web/MyAccount/WineryReportSettings.aspx');
        reportSettingsPage.elements.reportEditBtn(reportID).click();
        reportSettingsPage.elements.createReportBtn().click();
        cy.wait(1000);
        reportSettingsPage.elements.frequencySelector().select(frequency, {force: true});

        reportSettingsPage.elements.periodSelector(period1).click();
        reportSettingsPage.elements.saveBtn().click();
        reportSettingsPage.elements.confirmationMsg().should('exist').contains('Reports have been created');

     }
}
    module.exports = new reportSettingsPageAppActions();