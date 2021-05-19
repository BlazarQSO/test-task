import { CombinedState, combineReducers } from 'redux';
import solarSystemReducer, { SolarReducerType } from './reducers/solarSystemReducer';

export type RootReducerType = CombinedState<{
    solarSystem: SolarReducerType;
}>;

export default combineReducers({
    solarSystem: solarSystemReducer,
});
