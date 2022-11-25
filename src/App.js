// import fakeData from './data/fakeDataArray';
import './App.css';
import LiveSearch from './components/LiveSearch';
import DraftForm from './components/DraftForm';
import storeData from './data/storeData';
import DraftProvider from './providers/DraftProvider';

function App() {
  return (
    <div>
      <div>Mocks</div>
      <DraftProvider>
        <LiveSearch
        // data={fakeData}
        />
        <div className='selected-players'>
        <DraftForm
          storeData={storeData}
        /></div>
      </DraftProvider>
    </div>
  );
}

export default App;
