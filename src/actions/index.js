import axios from 'axios';

// Action Creator
export const ACTION_TYPE = "ACTION_TYPE";
export const FORM_SUBMITTED = "ACTION_TYPE";
export function doesSomething() {
    return {
        type: ACTION_TYPE,
        payload: null
    };
}

export function submitForm() {
    const request = axios.get('someurl');

    return {
        type: FORM_SUBMITTED,
        payload: request
    }
}