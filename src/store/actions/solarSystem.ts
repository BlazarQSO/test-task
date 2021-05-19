import {
    FETCH_SOLAR_SYSTEMS_START,
    FETCH_SOLAR_SYSTEMS_SUCCESS,
    FETCH_SOLAR_SYSTEMS_ERROR,
    GET_SOLAR_SYSTEM_DATA,
    ERROR_MESSAGE,
} from '../../const';

export type ResponseSolarSystemDataType = {
    data: any;
}

export interface FetchSolarSystemStartAction {
    type: typeof FETCH_SOLAR_SYSTEMS_START;
}

export interface FetchSolarSystemSuccessAction {
    type: typeof FETCH_SOLAR_SYSTEMS_SUCCESS;
    payload: ResponseSolarSystemDataType | null,
}

export interface GetSolarSystemData {
    type: typeof GET_SOLAR_SYSTEM_DATA;
}

export interface FetchSolarSystemErrorAction {
    type: typeof FETCH_SOLAR_SYSTEMS_ERROR;
    error: {
        message: string,
    },
}

export function fetchSolarSystemStartAction(): FetchSolarSystemStartAction {
    return {
        type: FETCH_SOLAR_SYSTEMS_START,
    };
}

export function fetchSolarSystemSuccessAction(
    responseData: null,
): FetchSolarSystemSuccessAction {
    return {
        type: FETCH_SOLAR_SYSTEMS_SUCCESS,
        payload: responseData,
    };
}

export function getSolarSystemData(): GetSolarSystemData {
    return {
        type: GET_SOLAR_SYSTEM_DATA,
    };
}

export function fetchSolarSystemErrorAction(
    message = ERROR_MESSAGE,
): FetchSolarSystemErrorAction {
    return {
        type: FETCH_SOLAR_SYSTEMS_ERROR,
        error: {
            message,
        },
    };
}
