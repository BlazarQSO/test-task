import { AnyAction } from 'redux';
import {
    FETCH_SOLAR_SYSTEMS_DATA,
    FETCH_SOLAR_SYSTEMS_ERROR,
    FETCH_SOLAR_SYSTEMS_START,
    FETCH_SOLAR_SYSTEMS_SUCCESS,
} from '../../const';

export type SolarReducerType = {
    isLoading: boolean;
    responseData: any | null;
    error: Error | null,
}

export const initialState = (): SolarReducerType => ({
    isLoading: false,
    responseData: null,
    error: null,
});

export default function SolarSystemReducer(
    state = initialState(),
    action: AnyAction,
): SolarReducerType {
    switch (action.type) {
    case FETCH_SOLAR_SYSTEMS_START: {
        return {
            ...state,
            isLoading: true,
        };
    }
    case FETCH_SOLAR_SYSTEMS_DATA: {
        return {
            ...state,
            responseData: action.payload,
        };
    }
    case FETCH_SOLAR_SYSTEMS_SUCCESS: {
        return {
            ...state,
            isLoading: false,
        };
    }
    case FETCH_SOLAR_SYSTEMS_ERROR: {
        return {
            ...state,
            error: { ...action.error },
        };
    }
    default:
        return state;
    }
}
