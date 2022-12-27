const report = require("multiple-cucumber-html-reporter");

report.generate({
    jsonDir: "cypress/cucumber-json/", // ** Path of .json file ** //
    reportPath: "./cypress/reports/cucumber-htmlreport.html",
});