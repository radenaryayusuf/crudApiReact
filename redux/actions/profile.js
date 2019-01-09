import axios from 'axios'
import ip from '../../configip'

export function GET_PROFILE ()  {
    return {
        type : "GET_PROFILE",
        payload : axios.get(`${ip}/profiles`)
    }
}
