/// <reference types="Cypress" />

export class Clockin {
    private btnClockIn = '.po-button-primary'
    private toolCam = 'canvas#snapshot'
    private perfilImage = '#profile-picture'
    private cpfField = '.po-input'
    private btnConfirmCpf = '[p-type="primary"] > .po-button'
    private confirmName = '.po-lg-12 > strong'
    private btnImageMerge = '[p-type="primary"] > .po-button'
    private confirmClockIn = '.m-b-2 > .po-lg-12 > :nth-child(2)'

    // click to make a photo
    clickOnClockIn(): void {
        cy.get(this.btnClockIn).click();
    }

    // see if the camera is appearing
    getToolCam() {
        return cy.get(this.toolCam).should('exist');
    }

    // see if the photo is appearing by cpf
    confirmCpfPage() {
        return cy.get(this.perfilImage).should('exist');
    }
    
    // enter the cpf
    writeCpf(cpf: string) {
        cy.get(this.cpfField).type(cpf)
    }

    // click to confirm cpf
    clickOnConfirmCpf(): void {
        cy.get(this.btnConfirmCpf).click();
    }

    // get user's name by cpf
    getName(): Cypress.Chainable<string> {
        return cy
            .get(this.confirmName)
            .invoke('text')
            .then((text) => {
                return text;
            });
    }

    // confirm message 'Clock-in realizado'
    confirmClockInCpf(): Cypress.Chainable<string> {
        return cy
            .get(this.confirmClockIn)
            .invoke('text')
            .then((text) => {
                return text;
            });
    }

    // confirm clock in by cpf
    confirmUser(): void {
        cy.get(this.btnImageMerge).click();
    }


}