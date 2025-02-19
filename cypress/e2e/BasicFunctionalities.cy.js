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
describe("Testing Basic Functionalities", () => {
  it("Testing Simple Import", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    simpleImportPageAppActions.simpleImport(
      "AL_Taxable_ChangeCities_Oct24.xls",
      "7"
    );
  });
  it("Testing Order Deletion", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    transactionsPageAppActions.deleteOrders(
      "10/10/2024",
      "10/10/2024",
      "Alabama"
    );
  });

  it("Testing Report Creation", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    reportSettingsPageAppActions.createReport(
      "323",
      "Monthly (Economic Nexus (PDF))",
      "2024.07.01"
    );
  });
  it.only("Testing Report Visualization", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });

    filingsAutoFilePageAppActions.visualizeReport(
      "Colorado Retail Sales and Use Tax Return",
      "7",
      "2024"
    );
    filingsAutoFilePage.elements.grossAmount().should("contain", "0.00");
    filingsAutoFilePage.elements.ordersQuantity().should("contain", "0 orders");
    filingsAutoFilePage.elements.taxAmount().should("contain", "$0.00");
  });
});
