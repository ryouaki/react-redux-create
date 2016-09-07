import { combineReducers } from 'redux';

import ReducerMain from './reducerMain';

const rootReducer = combineReducers({
    main: ReducerMain
});

export default rootReducer;