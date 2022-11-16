import PlayerResults from './components/PlayerResults';
// import data from './data/fakeData';
import fakeData from './data/fakeDataArray';
import './App.css';
import LiveSearch from './components/LiveSearch';

function App() {
  return (
    <div>
      <div>Mocks</div>
      <LiveSearch 
      data={fakeData}
      />
      {/* <PlayerResults
        // data={data}
        data={fakeData}
      /> */}
      {/* <PlayerResults /> */}
    </div>
  );
}

export default App;
