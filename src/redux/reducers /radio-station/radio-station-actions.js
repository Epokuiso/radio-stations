import { SELECT_RADIO_STATION } from "./radio-station-actions-types";

export const selectRadioStation = (radioStation) => ({
    type: SELECT_RADIO_STATION,
    payload: radioStation
});