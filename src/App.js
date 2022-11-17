// import fakeData from './data/fakeDataArray';
import './App.css';
import LiveSearch from './components/LiveSearch';
import DraftForm from './components/DraftForm';
import storeData from './data/storeData';

function App() {
  return (
    <div>
      <div>Mocks</div>
      <LiveSearch 
      // data={fakeData}
      />
      <DraftForm 
        storeData={storeData}
      />
    </div>
  );
}

export default App;
