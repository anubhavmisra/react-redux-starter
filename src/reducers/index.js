import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
// Import your reducers here 
import DataReducer from './reducer_data'

const rootReducer = combineReducers({
    data: DataReducer,
    form: formReducer
    // Create your application state here
});

export default rootReducer;