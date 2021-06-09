import React from 'react';
import { connect } from 'react-redux';
import './player.scss';
import SignalTower from '../../assets/icons/signal-tower.svg';
import PlayButton from '../play-button/play-button';
import { toggleRadioList } from '../../redux/reducers /player/player-actions';

const Player = (props) => {
    return (
        <div className={ `player ${ props.isToggled ? 'close' : ''}  ${ props.selectedStation.name ? 'pulse' : ''} ` }>
            <div className={ `tower-container ${ props.selectedStation.imageUrl ? 'rectangle pulse' : '' }` } onClick={ () => props.toggleRadioList() }>
                <img src={` ${ !props.selectedStation.imageUrl ? SignalTower : props.selectedStation.imageUrl }`} alt='Tower Signal' />
            </div>
            <p className={ `${ props.isToggled ? 'fade' : '' }` }>{ props.selectedStation.name }</p>
            <p className={ `${ props.isToggled ? 'fade' : '' }` }>{ props.selectedStation.frequency }</p>
            <p onClick={ () => props.toggleRadioList() } 
                className={`select ${ props.isToggled ? 'fade' : ''} ` }>
                    Select a Radio Station 
            </p>
            <PlayButton />
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    toggleRadioList: () => dispatch (toggleRadioList ())
})

const stateToProps = state => ({
    isToggled: state.player.toggleRadioList,
    selectedStation: state.station.selectedStation
})

export default connect (stateToProps, mapDispatchToProps)(Player);