import filingsAutoFilePage from "../pages/filingsAutoFilePage";

class filingsAutofilePageAppActions{

     visualizeReport = (targetTitle, targetMonth , targetYear) =>{

        cy.visit('Web/ReportsV2/Reports.aspx#autoFileReports');
        filingsAutoFilePage.elements.calendarItem().click();
        filingsAutoFilePage.elements.periodSelected(targetMonth, targetYear).click();
        filingsAutoFilePage.elements.reportTitle(targetTitle).click();
        filingsAutoFilePage.elements.recalculateBtn().click();
        cy.wait(5000);
        filingsAutoFilePage.elements.downloadBtn().click();


     }
}
    module.exports = new filingsAutofilePageAppActions();