import { combineReducers } from 'redux';
import playerReducer from './reducers /player/player-reducer';
import radioStationReducer from './reducers /radio-station/radio-station-reducer';

export default combineReducers ({
    player: playerReducer,
    station: radioStationReducer
});