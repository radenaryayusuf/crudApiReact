import axios from 'axios'
import ip from '../../configip'

export function GET_PROPINSI ()  {
    return {
        type : "GET_PROPINSI",
        payload : axios.get(`${ip}/listpropinsi`)
    }
}
export function GET_KONTRASEPSI ()  {
    return {
        type : "GET_KONTRASEPSI",
        payload : axios.get(`${ip}/listkontrasepsi`)
    }
}
export function GET_PEMAKAI ()  {
    return {
        type : "GET_PEMAKAI",
        payload : axios.get(`${ip}/listpemakaikontrasepsi`)
    }
}
export function GET_PROPINSI_ID (id)  {
    return {
        type : "GET_PROPINSI_ID",
        payload : axios.get(`${ip}/listpropinsi/${id}`)
    }
}
