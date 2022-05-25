export interface login {
    grant_type: string,
    connectorId: string,
    username: string,
    password: string,
    orgSubdomain: string,
    subdomain: string
}

export interface settings {
        mdmName: string,
        mdmParameterValue: string | number | boolean,
}