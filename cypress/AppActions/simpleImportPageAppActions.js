import simpleImportPage from "../pages/simpleImportPage";


class simpleImportPageAppActions{

    simpleImport = (fileName, numberOfOrders) => {
        
        simpleImportPage.elements.importDataButton().click();
        simpleImportPage.elements.simpleImportButton().click();
        simpleImportPage.elements.itemFileRdoButton().check();
        simpleImportPage.elements.fileInputMenu().selectFile(`cypress/ExcelImports/${fileName}`, {force: true});
        simpleImportPage.elements.confirmButton().click();
        cy.wait(8000);
        simpleImportPage.elements.statusMessage().should('contain', `${numberOfOrders} orders were successfully processed`);
        cy.url().should('include','TaxifyImportChannel');
    }


}

module.exports = new simpleImportPageAppActions();