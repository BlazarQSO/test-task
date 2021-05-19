import {
    SolarReducerType,
    initialState as initialStateSolarSystem,
} from './reducers/solarSystemReducer';

import { RootReducerType } from './rootReducer';

export const getDefaultState = (
    solarSystem?: Partial<SolarReducerType>,
): RootReducerType => ({
    solarSystem: {
        ...initialStateSolarSystem(),
        ...solarSystem,
    },
});
