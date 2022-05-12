
class LoginElements {
    email = () => { return '#email' }
  
    password = () => { return '#password' }

    botaoLogin = () => { return 'button[type="submit"]' }

    gateError = () => { return '.gate-error' }

    forgotPassword = () => { return '.gate-nav' }

    loginToCarol = () => { return '.gate-btn' }

    environment = () => { return '#tenant' }

    organization = () => { return '#organization' }

    resetOrganization = () => { return ':nth-child(1) > .wrap--w-full > .side-content--right > .cw-btn-subtle' }
  }
  
  export default LoginElements;