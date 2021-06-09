import { TOGGLE_AUDIO, TOGGLE_PLAY_BUTTON, TOGGLE_RADIO_LIST } from "./player-action-types";

export const toggleRadioList = () => ({
    type: TOGGLE_RADIO_LIST
});

export const togglePlayButton = () => ({
    type: TOGGLE_PLAY_BUTTON
});

export const toggleAudio = (isAudioPlaying) => ({
    type: TOGGLE_AUDIO,
    payload: isAudioPlaying
});