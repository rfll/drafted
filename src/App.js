import PlayerResults from './components/PlayerResults';
import data from './data/fakeData';
import './App.css';

function App() {
  return (
    <div>
      <div>Mocks</div>
      <PlayerResults data={data} />
    </div>
  );
}

export default App;
