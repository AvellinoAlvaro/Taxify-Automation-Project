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

describe("CO SUT Reports Generation", () => {
  //Monthly Frequencies Reports Generation for October 2024

  it("Generate Monthly (Sales Tax - PDF) frequency", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    reportSettingsPageAppActions.createReport(
      "323",
      "Monthly (Sales Tax (PDF))",
      "2024.10.01"
    );
  });

  it("Generate Monthly (Sales Tax - XML) frequency", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    reportSettingsPageAppActions.createReport(
      "323",
      "Monthly (Sales Tax (XML))",
      "2024.10.01"
    );
  });

  it("Generate Monthly (Economic Nexus - PDF) frequency", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    reportSettingsPageAppActions.createReport(
      "323",
      "Monthly (Economic Nexus (PDF))",
      "2024.10.01"
    );
  });

  it("Generate Monthly (Economic Nexus - XML) frequency", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    reportSettingsPageAppActions.createReport(
      "323",
      "Monthly (Economic Nexus (XML))",
      "2024.10.01"
    );
  });

  it("Generate Monthly (Use Tax - State Tax Only) frequency", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    reportSettingsPageAppActions.createReport(
      "323",
      "Monthly (Use Tax - State Tax Only)",
      "2024.10.01"
    );
  });
  it("Generate Monthly (Use Tax Only) frequency", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    reportSettingsPageAppActions.createReport(
      "323",
      "Monthly (Use Tax Only)",
      "2024.10.01"
    );
  });

  //Annually Frequencies Reports Generation for year 2024

  it("Generate Annually (Sales Tax - PDF) frequency", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    reportSettingsPageAppActions.createReport(
      "323",
      "Annually (Sales Tax (PDF))",
      "2024.01.01"
    );
  });

  it("Generate Annually (Sales Tax - XML) frequency", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    reportSettingsPageAppActions.createReport(
      "323",
      "Annually (Sales Tax (XML))",
      "2024.01.01"
    );
  });

  it("Generate Annually (Economic Nexus - PDF) frequency", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    reportSettingsPageAppActions.createReport(
      "323",
      "Annually (Economic Nexus (PDF))",
      "2024.01.01"
    );
  });

  it("Generate Annually (Economic Nexus - XML) frequency", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    reportSettingsPageAppActions.createReport(
      "323",
      "Annually (Economic Nexus (XML))",
      "2024.01.01"
    );
  });

  it("Generate Annually (Use Tax - State Tax Only) frequency", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    reportSettingsPageAppActions.createReport(
      "323",
      "Annually (Use Tax - State Tax Only)",
      "2024.01.01"
    );
  });
  it("Generate Annually (Use Tax Only) frequency", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    reportSettingsPageAppActions.createReport(
      "323",
      "Annually (Use Tax Only)",
      "2024.01.01"
    );
  });

  //Quarterly Frequencies Reports Generation for Quarter 4 of 2024

  it("Generate Quarterly (Sales Tax - PDF) frequency", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    reportSettingsPageAppActions.createReport(
      "323",
      "Quarterly (Sales Tax (PDF))",
      "2024.10.01"
    );
  });

  it("Generate Quarterly (Sales Tax - XML) frequency", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    reportSettingsPageAppActions.createReport(
      "323",
      "Quarterly (Sales Tax (XML))",
      "2024.10.01"
    );
  });

  it("Generate Quarterly (Economic Nexus - PDF) frequency", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    reportSettingsPageAppActions.createReport(
      "323",
      "Quarterly (Economic Nexus (PDF))",
      "2024.10.01"
    );
  });

  it("Generate Quarterly (Economic Nexus - XML) frequency", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    reportSettingsPageAppActions.createReport(
      "323",
      "Quarterly (Economic Nexus (XML))",
      "2024.10.01"
    );
  });

  it("Generate Quarterly (Use Tax - State Tax Only) frequency", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    reportSettingsPageAppActions.createReport(
      "323",
      "Quarterly (Use Tax - State Tax Only)",
      "2024.10.01"
    );
  });
  it("Generate Quarterly (Use Tax Only) frequency", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    reportSettingsPageAppActions.createReport(
      "323",
      "Quarterly (Use Tax Only)",
      "2024.10.01"
    );
  });
});

describe("CO SUT Imports and Report visualization Testing", () => {
  it("Test all Item Types with Tax Type Resale on Monthly Frequency", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    simpleImportPageAppActions.simpleImport(
      "CO_AllItemTypesResale_Oct.xls",
      "28"
    );
    filingsAutoFilePageAppActions.visualizeReport(
      "Colorado Retail Sales and Use Tax Return",
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
      "Colorado"
    );
  });

  it("Test all the old item types on Monthly Frequency", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    simpleImportPageAppActions.simpleImport(
      "CO_RetailOldItemTypes_Oct.xls",
      "11"
    );
    filingsAutoFilePageAppActions.visualizeReport(
      "Colorado Retail Sales and Use Tax Return",
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
      "Colorado"
    );
  });

  it("Test all the new Item Types introduced with the new changes on Monthly Frequency", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    simpleImportPageAppActions.simpleImport(
      "CO_RetailNewItemTypes_Oct.xls",
      "17"
    );
    filingsAutoFilePageAppActions.visualizeReport(
      "Colorado Retail Sales and Use Tax Return",
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
      "Colorado"
    );
  });
});
