import { Then, When } from 'cypress-cucumber-preprocessor/steps';
import { Clockin } from '../page-objects/clockin-page.po';
import { Confirm } from '../page-objects/confirm-page.po';

const clockin = new Clockin();
const confirm = new Confirm();

function getHour() {
    const date = new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" }).split(' ')[1].split(':');
    const hour = date[0] + ':' + date[1];
    return hour
};

When('a camera de reconhecimento facial é exibida', function () {
    cy.wait('@post1')
    cy.wait('@post2')
    cy.wait('@get1')
    cy.wait('@get2')
    cy.wait('@get3')
    cy.wait('@get4')
    cy.wait('@get5')
    cy.wait('@get6')
    cy.wait('@get7')

    clockin.getToolCam();
})

When('clico em clock-in para camera fazer a foto do rosto', function () {
    cy.wait(2000)
    clockin.clickOnClockIn();
    cy.wait('@postRecog')
    
})

When('aparece minhas informações de identificação {string}', function (name: string) {
    confirm.getNameDescription().then(variavel => {
        expect(variavel).to.equal(name);
    })
})

When('seleciono o dropdown com {string}', (number: string) => {
    confirm.selectDropDownEntry(number);
})

When('Nao sou identificado e preciso preencher o campo de cpf com {string}', (cpf: string) => {
    clockin.confirmCpfPage();
    clockin.writeCpf(cpf)
    clockin.clickOnConfirmCpf();
    cy.wait('@postPhotoRecord')
})

Then('Confirmo o vinculo da imagem ao nome {string}', (name: string) => {
    clockin.getName().then(getName => {
        expect(getName).to.equal(name)
    })
    clockin.confirmUser();
    cy.wait('@postVerif')
    const hour = getHour();
    confirm.getClockInTimeCpf().then(time => {
        expect(time.trim()).to.equal(hour)
    });
    clockin.confirmClockInCpf().then(variavel => {
        expect(variavel).to.equal('Clock-in realizado');
    })
})

Then('confirmo a batida do ponto clicando em clock-in', function () {
    confirm.confirmClockIn(); 
    cy.wait('@postConfirm')
    confirm.getClockInTime().then(time => {
        expect(time.trim()).to.equal(getHour())
    })
})