import React from 'react';
import { connect } from 'react-redux';
import RadioStation from '../radio-station/radio-station';
import './station-list.scss'

const StationList = (props) => {
    return (
        <div className={ ` station-list ${ props.isToggled ? 'close' : ''}` }>
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

export default connect (stateToProps)(StationList);