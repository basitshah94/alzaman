import { createStore,applyMiddleware } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

// const reducers = {
//     qasaid,
// };

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2,
}

// const rootReducer = combineReducers(reducers);
const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const configureStore = () => createStore(persistedReducer);
export const configureStore = () => createStore(persistedReducer,applyMiddleware(thunk));