import axios, { AxiosResponse } from 'axios';
import { API } from '../const';
import { ResponseSolarSystemDataType } from '../store/actions/solarSystem';

const instance = axios.create();

export function getApiSolarSystemData(): Promise<AxiosResponse<ResponseSolarSystemDataType>> {
    return instance.get(API.SOLAR_SYSTEM);
}
