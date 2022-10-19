import PlayerResults from './components/PlayerResults';
import data from './data/fakeData';
import './App.css';
import LiveSearch from './components/LiveSearch';

function App() {
  return (
    <div>
      <div>Mocks</div>
      <LiveSearch />
      <PlayerResults data={data} />
    </div>
  );
}

export default App;
