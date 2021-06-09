import { TOGGLE_RADIO_LIST, TOGGLE_PLAY_BUTTON, TOGGLE_AUDIO } from "./player-action-types";

const INITIAL_STATE = {
    toggleRadioList: false,
    togglePlay: false,
    isAudioPlaying: false 
}

const playerReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case TOGGLE_RADIO_LIST:
            return {
                ...state,
                toggleRadioList: !(state.toggleRadioList)
            }
        case TOGGLE_PLAY_BUTTON:
            return {
                ...state,
                togglePlay: !(state.togglePlay)
            }
        case TOGGLE_AUDIO:
            return {
                ...state,
                isAudioPlaying: action.payload
            }
        default:
            return state;
    }
}

export default playerReducer;