/// <reference types="Cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************
// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
/**
 * @type {Cypress.PluginConfig}
 */

const path = require('path');
const cucumber = require('cypress-cucumber-preprocessor').default
const browserify = require('@cypress/browserify-preprocessor');
const fs = require('fs')
let browserName = '';
let specName = '';

const options = {
  typescript: require.resolve('typescript'),
};
const b = browserify(options);

module.exports = (on, config) => {
  const options = browserify.defaultOptions
  options.browserifyOptions.extensions.unshift('.ts');
  options.browserifyOptions.plugin.unshift(['tsify', { project: '/cypress/tsconfig.json' }]);

  const c = cucumber({
    ...browserify.defaultOptions,
    ...options,
  })

  on('file:preprocessor', file => {
    if (file.filePath.includes('.feature')) {
      return c(file);
    }
    return b(file);
  })

  // get the feature's name
  on('before:spec', (spec) => {
    specName = spec.name;
  });

  on('before:browser:launch', (browser, launchOptions) => {
    // create necessary files
    browserName = browser.name
    createFolder('cypress/results');
    createFolder('cypress/results/json');
    createFolder('cypress/results/json/screenshots');
    createFolder(`cypress/results/json/screenshots/${browserName}`);
    createFolder('cypress/fixtures/videos')
  });

  on('after:run', function (results) {
    const jsonFolder = path.resolve(__dirname, '../cucumber-json/');
    const jsonFiles = []
    results.runs.forEach(feature => {
      const featureName = feature.spec.name.split('/')[1].split('.')[0];
      fs.readdirSync(jsonFolder).filter(file => file.includes(featureName)).forEach(file => jsonFiles.push(path.resolve(__dirname, '../cucumber-json/', file)))
      jsonFiles.forEach(json => {
        const file = require(json)
        file[0].metadata = {
          "browser": {
            "name": results.browserName,
            "version": results.browserVersion
          },
          "device": "Local Machine",
          "platform": {
            "name": results.osName.startsWith('win') ? 'windows' : results.osName,
            "version": results.osVersion
          }
        }
        fs.writeFileSync(`cypress/cucumber-json/${featureName}-${results.browserName}.cucumber.json`, JSON.stringify(file))
      })
    })
    jsonFiles.filter(file => {
      return !(file.includes('chrome') || file.includes('firefox') || file.includes('edge'))
    }).forEach(fileName => {
      fs.rmSync(fileName)
    })
  })

  on('after:screenshot', function (details) {
    const path = details.path.split("screenshots\\")[1]

    const teste = path.split('\\').filter(folders => {
      return !folders.includes('.png')
    });

    let browserPath = `cypress/results/json/screenshots/${browserName}`
    teste.forEach(folder => {
      browserPath += `/${folder}`;
      createFolder(browserPath)
    });

    const newPath = `cypress/results/json/screenshots/${browserName}/${path}`
    fs.rename(details.path, newPath)
  })
}

// create files 
function createFolder(folder) {
  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder);
  }
}