import './App.scss';
import Player from './components/player/player';
import RadioAudio from './components/radio-audio/radio-audio';
import StationList from './components/station-list/station-list';


const App = () => {
  return (
    <div className='app-container'>
      <RadioAudio />
      <Player />
      <StationList />
    </div>
  );
}

export default App;
