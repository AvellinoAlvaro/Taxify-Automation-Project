import loginPageAppActions from "../AppActions/loginPageAppActions.js";
import transactionsPageAppActions from "../AppActions/transactionsPageAppActions.js";
import simpleImportPageAppActions from "../AppActions/simpleImportPageAppActions.js";
import reportSettingsPageAppActions from "../AppActions/reportSettingsPageAppActions.js";
import filingsAutoFilePageAppActions from "../AppActions/filingsAutoFilePageAppActions.js";
import filingsAutoFilePage from "../pages/filingsAutoFilePage.js";

beforeEach(() => {
  const validUsername = Cypress.env("validUsername");
  const validPassword = Cypress.env("validPassword");
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  loginPageAppActions.login(validUsername, validPassword);
});

describe("Arizona TPT2 Reports Generation", () => {
  //Monthly Frequency
  it("Generate Monthly frequency", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    reportSettingsPageAppActions.createReport("273", "Monthly", "2024.10.01");
  });
  //Quarterly Frequency
  it("Generate Quarterly frequency", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    reportSettingsPageAppActions.createReport("273", "Quarterly", "2024.10.01");
  });
  //Annually Frequency
  it("Generate Annually frequency", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    reportSettingsPageAppActions.createReport("273", "Annually", "2024.01.01");
  });
});

describe("Arizona TPT-2 Privilege Tax Report Imports and Report visualization Testing", () => {
  it("Test all Item Types with Tax Type Resale on Monthly Frequency", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    simpleImportPageAppActions.simpleImport(
      "AZ_AllItemTypesResale_Oct.xls",
      "28"
    );
    filingsAutoFilePageAppActions.visualizeReport(
      "Arizona TPT-2 Privilege Tax Report",
      "10",
      "2024"
    );
    filingsAutoFilePage.elements
      .ordersQuantity()
      .should("contain", "28 orders");
    filingsAutoFilePage.elements.grossAmount().should("contain", "2800.00");
    filingsAutoFilePage.elements.taxAmount().should("contain", "$0.00");
    transactionsPageAppActions.deleteOrders(
      "10/10/2024",
      "10/10/2024",
      "Arizona"
    );
  });

  it("Test all the old item types on Monthly Frequency", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    simpleImportPageAppActions.simpleImport(
      "AZ_RetailOldItemTypes_Oct.xls",
      "11"
    );
    filingsAutoFilePageAppActions.visualizeReport(
      "Arizona TPT-2 Privilege Tax Report",
      "10",
      "2024"
    );
    filingsAutoFilePage.elements
      .ordersQuantity()
      .should("contain", "11 orders");
    filingsAutoFilePage.elements.grossAmount().should("contain", "66664.00");
    filingsAutoFilePage.elements.taxAmount().should("not.equal", "$0.00");
    transactionsPageAppActions.deleteOrders(
      "10/10/2024",
      "10/10/2024",
      "Arizona"
    );
  });
  it("Test all the new Item Types introduced with the new changes on Monthly Frequency", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    simpleImportPageAppActions.simpleImport(
      "AZ_RetailNewItemTypes_Oct.xls",
      "17"
    );
    filingsAutoFilePageAppActions.visualizeReport(
      "Arizona TPT-2 Privilege Tax Report",
      "10",
      "2024"
    );
    filingsAutoFilePage.elements
      .ordersQuantity()
      .should("contain", "17 orders");
    filingsAutoFilePage.elements.grossAmount().should("contain", "699999.00");
    filingsAutoFilePage.elements.taxAmount().should("not.equal", "$0.00");
    transactionsPageAppActions.deleteOrders(
      "10/10/2024",
      "10/10/2024",
      "Arizona"
    );
  });
});
