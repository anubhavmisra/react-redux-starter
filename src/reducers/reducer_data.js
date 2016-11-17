import { ACTION_TYPE, FORM_SUBMITTED } from '../actions';

export default function (state = null, action) {
    switch (action.type) {
        case FORM_SUBMITTED:
            return {...state, data: action.payload.data };
        default:
            return state;
    }
}