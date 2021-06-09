import React from 'react';
import { connect } from 'react-redux';
import RadioStation from '../radio-station/radio-station';
import { toggleRadioList } from '../../redux/reducers /player/player-actions';
import './station-list.scss'

const StationList = (props) => {
    return (
        <div className={ ` station-list ${ props.isToggled ? 'close' : ''}`} onDragEnd={ () => props.toggleRadioList() } onClick={ () => props.toggleRadioList() }>
        {
            props.stations.map ( station => <RadioStation key={station.frequency} name={ station.name } frequency={ station.frequency } {...station} />)
        }
        </div>
    );
}

const stateToProps = state => ({
    isToggled: state.player.toggleRadioList,
    stations: state.station.stations
})

const dispatchToProps = dispatch => ({
    toggleRadioList: () => dispatch (toggleRadioList ())
})

export default connect (stateToProps, dispatchToProps)(StationList);