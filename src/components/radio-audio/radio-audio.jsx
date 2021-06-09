import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { toggleAudio } from '../../redux/reducers /player/player-actions';

const RadioAudio = (props) => {
    useEffect (() => {
        document.querySelector('audio').addEventListener ('waiting', () => props.toggleAudio (false));
        document.querySelector('audio').addEventListener ('playing', () => props.toggleAudio (true));
    });

    return (
        <audio src={ props.selectedStation.audioUrl }></audio>
    );
}

const stateToProps = state => ({
    selectedStation: state.station.selectedStation,
    play: state.player.togglePlay
})

const dispatchToProps = dispatch => ({
    toggleAudio: isAudioPlaying => (dispatch (toggleAudio (isAudioPlaying)))
})

export default connect (stateToProps, dispatchToProps)(RadioAudio);