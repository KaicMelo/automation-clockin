const report = require("multiple-cucumber-html-reporter");
const fs = require('fs')
const path = require('path')
const jsonFolder = path.resolve(__dirname, './cypress/cucumber-json/');
const jsonFiles = []
fs.readdirSync(jsonFolder).filter(file => file.includes('.json')).forEach(file => jsonFiles.push(path.resolve(__dirname, './cypress/cucumber-json/', file)))

jsonFiles.forEach(file => {
  const json = require(file)
  const clone = JSON.parse(JSON.stringify(json))

  clone.forEach((feature) => {

    const imagePath = path.resolve(__dirname, `cypress/results/json/screenshots/${clone[0].metadata.browser.name}/feature/` + feature.uri)
    const images = fs.readdirSync(imagePath)
    feature.elements.forEach((scenario) => {
      const imageScenario = images.filter(print => print.includes(scenario.name))
      scenario.steps.forEach((step) => {
        if (step.result.status == 'failed' || step.keyword.includes('Então') && step.result.status != 'skipped') {
          const bitmap = fs.readFileSync(imagePath + '/' + imageScenario[0]);
          step["embeddings"] = [
            {
              "mime_type": "image/png",
              "data": new Buffer.from(bitmap).toString('base64')
            }
          ]
        }
      })
    })

    fs.writeFileSync(`cypress/cucumber-json/${feature.uri.split('.')[0]}-${clone[0].metadata.browser.name}.cucumber.json`, JSON.stringify(clone));

  })
})
report.generate({
  jsonDir: "cypress/cucumber-json/",  // ** Path of .json file ** //
  reportPath: "./reports/cucumber-htmlreport.html",
});