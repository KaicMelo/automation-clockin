This project was created to automate Clock In Web tests with Cypress
- environment - mobile/totvsbrasil

Install dependencies - npm i

To run this project you can:
    if you want to run all features in all browsers and generate the reports
        - npm run test
    if you want to run all features in a specific browser
        - npm run cy-run-{browsername}
    if you want select a specific feature
        - npm run cy-open
    if you want to generate the reports
        - npm run cucumber:report:generate

Folders and files:
    - Cypress
        - fixtures - test mass
        - integration/featues - features files in BDD
        - plugins/Index.js - file contains cucumber's options, browser's options
        - results/json/screenshots - Images 
        - support/page-objects - page elements
        - support/step-definitions - automation step sequence
        - tsconfig.json - typescript configuration
        - Reports - index.html 
    - cypress.json - cypress configuration
    - package.json - project infos, scripts, dev dependecies
    - reportGenerator-cucumber.js - generate the report separated by browsers (Edge, Chrome and Firefox)
    - script.sh - sequence to run 'npm run test'

Videos:
    To include a new video you need:
        - '.y4m' extension
        - include a zipped folder with the video in cypress/fixtures/zips
        - add one more case to the switch in the function getVideo in cypress/plugin/index.js 
                -> case 'feature name':
                   return 'video name';

Cucumber (Ctrl + click)
    - config/Settings/Text Editor/Font -> 'edit in setting.json'
    add:
    "cucumberautocomplete.strictGherkinCompletion": true,
    "cucumberautocomplete.steps": [
      "projeto/cypress/support/step-definitions/*steps.ts",
    ],
    "cucumberautocomplete.onTypeFormat": true,
    "editor.quickSuggestions": {
      "comments": false,
      "strings": true,
      "other": false
    },
    "cucumberautocomplete.formatConfOverride": {
      "Funcionalidade:": 0,
      "Cenario:": 1,
      "Cenário": 1,
      "Contexto:": 1,
      "Esquema do Cenario:": 1,
    },
    "window.zoomLevel": 1,
    "typescript.updateImportsOnFileMove.enabled": "always"
