const BASE_URL = 'http://192.168.5.100:3006'

export const FISHCODE_API = {
    GET_FISHCODES: `${BASE_URL}/api/service_fishCode/query/fishcodes`,
    ADD_FISHCODE: `${BASE_URL}/api/service_fishCode/mutate/addFishCode`,
}