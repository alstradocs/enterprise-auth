
import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import { authReducer } from './auth'

//@redux-helper/rootReducer
const rootReducer = combineReducers({
	auth: authReducer
});

export type StateType = ReturnType<typeof rootReducer>;
export function configureStore() {
	const middleware: any[] = [];
	// middleware.push(thunk);
  
	// if (process.env.NODE_ENV !== 'production') {
	//   middleware.push(createLogger());
	// }
  
	const store = createStore(rootReducer, compose(applyMiddleware(...middleware)));
	return store;
}

