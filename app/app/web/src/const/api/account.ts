const BASE_URL = 'http://172.19.224.1:3006'

export const ACCOUNT_API = {
    SIGNUP: `${BASE_URL}/api/service_account/mutate/signup`,
    GET_CONTACTS: `${BASE_URL}/api/service_account/query/contacts`,
    GET_ACCOUNT: `${BASE_URL}/api/service_account/query/account`,
    ADD_CONTACT: `${BASE_URL}/api/service_account/mutate/addContact`,
};
