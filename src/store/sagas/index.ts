import { all } from 'redux-saga/effects';

import watchGetSolarSystem from './solarSystem';

export default function* rootSaga() {
    yield all([
        watchGetSolarSystem(),
    ]);
}
