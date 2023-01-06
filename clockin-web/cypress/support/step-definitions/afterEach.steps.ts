import { carolApi } from '../api/controllers/flags';

afterEach(() => {
    cy.screenshot({capture: 'runner'}) 
    new carolApi().putFlags();
})
