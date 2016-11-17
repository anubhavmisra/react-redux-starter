import { FETCH_DATA, FORM_SUBMITTED } from '../actions';

export default function(state = null, action) {
    switch (action.type) {
        case FORM_SUBMITTED:
            return {...state, data: action.payload.data };
        case FETCH_DATA:
            return {...state, data: action.payload.data };
        default:
            return state;
    }
}