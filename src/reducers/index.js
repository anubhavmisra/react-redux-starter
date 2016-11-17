import { combineReducers } from 'redux';
// Import your reducers here 
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    form: formReducer
    // Create your application state here
});

export default rootReducer;