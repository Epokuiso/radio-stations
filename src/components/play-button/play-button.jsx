import React from 'react';
import { connect } from 'react-redux';
import './play-button.scss';
import PlayIcon from '../../assets/icons/play.svg';
import PauseIcon from '../../assets/icons/pause.svg'; 
import LoadingIcon from '../../assets/icons/loading.svg';
import { togglePlayButton } from '../../redux/reducers /player/player-actions';

const PlayButton = (props) => {
    const player = document.querySelector ('audio');
    const toggleAudio = () => {
        if (player) props.isToggled ?  player.pause () : player.play ()
    }

    return(
        <button className='control-button' 
            onClick={ 
                () => {
                    if (props.selectedStation.name)
                        props.toggleButton ();
                    toggleAudio ();  
                    } 
                }>
            {
                props.isToggled && !props.isAudioPlaying ?  <img src={ LoadingIcon } alt='Play Button'/> : <img src={ `${ props.isToggled ? PauseIcon : PlayIcon }` } alt='Play Button'/>
            }
        </button>
    );
}

const dispachToProps = dispatch => ({
    toggleButton: () => dispatch (togglePlayButton ())
});

const stateToProps = state => ({
    isToggled: state.player.togglePlay,
    selectedStation: state.station.selectedStation,
    isAudioPlaying: state.player.isAudioPlaying
});

export default connect (stateToProps, dispachToProps)(PlayButton);