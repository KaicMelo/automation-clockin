/// <reference types="Cypress" />

export class Confirm {
  private dropDown = '.po-select-button'
  private nameUser = ':nth-child(2) > .font16'
  private jobUser = ':nth-child(3) > .po-lg-12'
  private btnConfirm = '[p-type="primary"] > .po-button'
  private time = 'section > :nth-child(2) > .po-lg-12'
  private timeCpf = 'section > :nth-child(1) > :nth-child(2) > .po-lg-12'

    // get the user's name from the clock in by face recogition
    getNameDescription(): Cypress.Chainable<string> {
        return cy
          .get(this.nameUser)
          .invoke('text')
          .then((text) => {
            return text;
          });
    }

    // get the user's job from the clock in by face recogition
    getEmploymentDescription(): Cypress.Chainable<string> {
        return cy
          .get(this.jobUser)
          .invoke('text')
          .then((text) => {
            return text;
          });
    }

    //click the button to confirm clock in
    confirmClockIn(): void{
        cy.get(this.btnConfirm).click();
    }
    

    //get the time that the clock in was performed by face recogition
    getClockInTime(): Cypress.Chainable<string>{
      return cy
          .get(this.time) 
          .invoke('text')
          .then((text) => {
            text = text.split(':')[0] + ':' + text.split(':')[1]
            return text;
      });
    }

    //select enter in dropdown if necessary 
    selectDropDownEntry(number: string): void {
      cy.get(this.dropDown).click();
      cy.get(`:nth-child(${number}) > .po-select-item`).click();
    }

    //get the time that the clock in was performed by cpf
    getClockInTimeCpf(): Cypress.Chainable<string>{
      return cy
          .get(this.timeCpf)
          .invoke('text')
          .then((text) => {
            text = text.split(':')[0] + ':' + text.split(':')[1]
            return text;
      });
    }
}