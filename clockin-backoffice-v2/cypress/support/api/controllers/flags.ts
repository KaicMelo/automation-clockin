/// <reference types="Cypress" />
import * as interfaces from '../interfaces/interfaces';
const token = require('../../../fixtures/json/login.json');
const defaultSettings = require('../../../fixtures/json/defaultSettings.json');

const HTTP = 'https://api.carol.ai/api/v3';

export class carolApi {
    private token = `${HTTP}/oauth2/token`;
    private mdmid = `${HTTP}/tenantApps/bb9568239e254bc59937523a95aeb7f4/settings?entitySpace=WORKING&checkAllSpaces=true`;
    private changeOptions = `${HTTP}/tenantApps/bb9568239e254bc59937523a95aeb7f4/settings/`;

    getToken(login?: interfaces.login): Cypress.Chainable<string> {
        const body = login != null ? login : token
        return cy.request({
            method: 'POST',
            url: this.token, // baseUrl is prepended to url
            form: true, // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
            body: body,
            headers: {
                "Accept":'application/json',
                "Content-Type":'application/x-www-form-urlencoded'
            }
        }).then(response => {
            return response.body.access_token as string
        })
    }

    getMdmid(): Cypress.Chainable<string> {
        return this.getToken().then(auth =>{
            return cy.request({
                method: 'GET',
                url: this.mdmid, // baseUrl is prepended to url,
                headers: {Authorization: auth},
            }).then(response => {
                return response.body.mdmId as string
            })
        })      
    }

    putFlags(settings?: interfaces.settings[]): void {
        const body = settings != null ? settings : defaultSettings
        this.getToken().then(auth => {
            this.getMdmid().then(mdmid =>{
                cy.request({
                    method: 'PUT',
                    url: `${this.changeOptions}${mdmid}?publish=true`, // baseUrl is prepended to url
                    body: body,
                    headers: {Authorization: auth}
                }).then(response => {
                    console.log('----------->', response.requestHeaders)
                })
            })
        })
        
    }
}
