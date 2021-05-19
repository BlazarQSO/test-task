import { SagaIterator } from 'redux-saga';
import {
    call, delay, put, takeEvery,
} from 'redux-saga/effects';
import { getApiSolarSystemData } from '../../../api/api';

import { GET_SOLAR_SYSTEM_DATA } from '../../../const';
import {
    fetchSolarSystemStartAction,
    fetchSolarSystemSuccessAction,
    fetchSolarSystemErrorAction,
} from '../../actions/solarSystem';

function* sagaWatcher(): SagaIterator {
    yield takeEvery(GET_SOLAR_SYSTEM_DATA, sagaWorker);
}

export function* sagaWorker(): SagaIterator {
    try {
        yield put(fetchSolarSystemStartAction());
        const data = yield call(getApiSolarSystemData);
        yield delay(1000);
        yield put(fetchSolarSystemSuccessAction(data));
    } catch (e) {
        yield put(fetchSolarSystemErrorAction());
    }
}

export default sagaWatcher;
