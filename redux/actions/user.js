import axios from 'axios'


export function GET_USER ()  {
    return {
        type : "GET_USER",
        payload : axios.get('https://jsonplaceholder.typicode.com/todos/1')
    }
}
