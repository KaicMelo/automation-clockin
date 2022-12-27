export enum SeletoresEmpresas {
  codigo = "section > :nth-child(1) > :nth-child(1) > .ng-pristine > po-field-container > .po-field-container > .po-field-container-content > .po-input",
  nome = ":nth-child(1) > :nth-child(2) > .ng-untouched > po-field-container > .po-field-container > .po-field-container-content > .po-input",
  cnpj = "#taxId > po-field-container > .po-field-container > .po-field-container-content > .po-input",
  ceicno = ":nth-child(2) > :nth-child(2) > .ng-untouched > po-field-container > .po-field-container > .po-field-container-content > .po-input",
  endereco = "#address-input > po-field-container > .po-field-container > .po-field-container-content > .po-input",
}
