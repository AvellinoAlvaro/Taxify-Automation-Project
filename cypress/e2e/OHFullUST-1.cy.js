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
  //Monthly Frequencies
  it("Generate Monthly (Express Data Entry) frequency", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    reportSettingsPageAppActions.createReport(
      "130",
      "Monthly (Express Data Entry)",
      "2024.10.01"
    );
  });
  it("Generate Monthly (Free File) frequency", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    reportSettingsPageAppActions.createReport(
      "130",
      "Monthly (Free File)",
      "2024.10.01"
    );
  });

  //Semi-Annually Frequencies
  it("Generate Semi-Annually (Express Data Entry) frequency", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    reportSettingsPageAppActions.createReport(
      "130",
      "Semi-Annually (Express Data Entry)",
      "2024.07.01"
    );
  });
  it("Generate Semi-Annually (Free File) frequency", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    reportSettingsPageAppActions.createReport(
      "130",
      "Semi-Annually (Free File)",
      "2024.07.01"
    );
  });
});

describe("OH FULL UST-1 Imports and Report visualization Testing", () => {
  it("Test all the old item types on Monthly Express Data Entry Frequency", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    simpleImportPageAppActions.simpleImport(
      "OH_RetailOldItemTypes_Oct.xls",
      "11"
    );
    filingsAutoFilePageAppActions.visualizeReport(
      "Ohio Full UST-1 Data File Upload (Express Data Entry)",
      "10",
      "2024"
    );
    filingsAutoFilePage.elements
      .ordersQuantity()
      .should("contain", "11 orders");
    filingsAutoFilePage.elements.grossAmount().should("contain", "66664.00");
    filingsAutoFilePage.elements.taxAmount().should("not.equal", "$0.00");
    transactionsPageAppActions.deleteOrders("10/10/2024", "10/10/2024", "Ohio");
  });

  it("Test all the new Item Types introduced with the new changes on Monthly Frequency", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    simpleImportPageAppActions.simpleImport(
      "OH_RetailNewItemTypes_Oct.xls",
      "17"
    );
    filingsAutoFilePageAppActions.visualizeReport(
      "Ohio Full UST-1 Data File Upload (Express Data Entry)",
      "10",
      "2024"
    );
    filingsAutoFilePage.elements
      .ordersQuantity()
      .should("contain", "17 orders");
    filingsAutoFilePage.elements.grossAmount().should("contain", "699999.00");
    filingsAutoFilePage.elements.taxAmount().should("not.equal", "$0.00");
    transactionsPageAppActions.deleteOrders("10/10/2024", "10/10/2024", "Ohio");
  });
});
