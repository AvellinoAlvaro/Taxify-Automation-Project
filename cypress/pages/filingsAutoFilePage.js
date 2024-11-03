class filingsAutoFilePage{

    elements={

        reportTitle: (title) => cy.contains(title).first(),
        calendarItem: () => cy.get('.date-display-container'),
        periodSelected: (month, year) => cy.get(`[data-year="${year}"] > .months-container > [data-month="${month}"]`), //month = 1-12, year= 2022, 2023, 2024, etc
        ordersQuantity: () => cy.get('.download-report-orders > span'),
        grossAmount: () => cy.get('.report-details-container > :nth-child(4)'),
        recalculateBtn: () => cy.get('.icon-refresh'),
        taxAmount: () => cy.get('.amount-due'),
        downloadBtn: () => cy.get('.download-report > .icon-download-alt'),
        altDownloadBtn: () => cy.get('.icon-download'),
       

    };



}
module.exports = new filingsAutoFilePage();