/// <reference types="Cypress" />
import { Given } from 'cypress-cucumber-preprocessor/steps';
import { carolApi } from '../api/controllers/flags';
import { settings } from '../api/interfaces/interfaces';

const defaultSettings = require('../../fixtures/json/defaultSettings.json');

const carolapi = new carolApi();

Given('faço a request para habilitar o evento de dropdown', function () {
    const clone = JSON.parse(JSON.stringify(defaultSettings))
    clone.map((object: settings) => {
        if (object.mdmName === 'enableclockineventtype') {
            object.mdmParameterValue = true;
        }
    })
    carolapi.putFlags(clone);
});