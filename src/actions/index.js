import axios from 'axios';

// Action Creator
export const ACTION_TYPE = "ACTION_TYPE";
export const FORM_SUBMITTED = "ACTION_TYPE";
export const FETCH_DATA = "FETCH_DATA";

export function doesSomething() {
    return {
        type: ACTION_TYPE,
        payload: null
    };
}
export function fetchData() {
    const request = axios.get('https://jsonplaceholder.typicode.com/posts');
    return {
        type: FETCH_DATA,
        payload: request
    }
}

export function submitForm(props) {
    const request = axios.post('https://jsonplaceholder.typicode.com/posts', props);

    return {
        type: FORM_SUBMITTED,
        payload: request
    }
}