import React from 'react';
import { connect } from 'react-redux';
import { togglePlayButton } from '../../redux/reducers /player/player-actions';
import { selectRadioStation } from '../../redux/reducers /radio-station/radio-station-actions';
import './radio-station.scss';

const RadioStation = (props) => {
    const radio = {
        name: props.name,
        frequency: props.frequency,
        audioUrl: props.audioUrl,
        imageUrl: props.imageUrl
    };

    return (
        <div className={`radio-station ${ props.isToggled ? 'open' : '' }  ${ props.selectedStation.name === radio.name ? 
            'selected' : '' }`}
            onClick={ () => { 
                props.selectRadio ({ ...radio });
                if (props.isPlayButtonToggled) 
                    props.togglePause (); 
                } }>
            <div className='radio'>
                <div className='logo-container'>
                    <img src={ props.imageUrl } alt='Radio Station'/>
                </div>

                <div className='info'>
                    <p>{ props.name }</p>
                    <p>{ props.frequency } FM</p>
                </div>
            </div>
        </div>
    );
}

const stateToProps = state => ({
    isToggled: state.player.toggleRadioList,
    isPlayButtonToggled: state.player.togglePlay,
    selectedStation: state.station.selectedStation
});

const dispatchToProps = dispatch => ({
    selectRadio: radio => (dispatch (selectRadioStation (radio))),
    togglePause: () => (dispatch (togglePlayButton ()))
});

export default connect (stateToProps, dispatchToProps)(RadioStation);