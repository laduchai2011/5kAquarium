const BASE_URL = 'http://192.168.5.100:3006'

export const ACCOUNT_API = {
    SIGNUP: `${BASE_URL}/api/service_account/mutate/signup`,
    GET_CONTACTS: `${BASE_URL}/api/service_account/query/contacts`,
    GET_ACCOUNT: `${BASE_URL}/api/service_account/query/account`,
    CHANGE_AVATAR: `${BASE_URL}/api/service_account/mutate/changeAvatar`,
    CHANGE_NAME: `${BASE_URL}/api/service_account/mutate/changeName`,
    ADD_CONTACT: `${BASE_URL}/api/service_account/mutate/addContact`,
};


export const IMAGE_API = {
    GET_IMAGE: `${BASE_URL}/api/service_image/query/image`,
    UPLOAD_AIMAGE: `${BASE_URL}/api/service_image/mutate/uploadAImage`,
}