import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';
import rootSaga from './sagas';
import { isDevelopment } from '../utils/isDevelopment';

const configureStore = () => {
    const saga = createSagaMiddleware();

    const store = isDevelopment()
        ? createStore(
            rootReducer,
            composeWithDevTools(
                applyMiddleware(saga),
            ),
        )
        : createStore(
            rootReducer,
            applyMiddleware(saga),
        );

    saga.run(rootSaga);

    return store;
};

export default configureStore();
