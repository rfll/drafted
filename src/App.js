// import fakeData from './data/fakeDataArray';
import './App.css';
import LiveSearch from './components/LiveSearch';
import DraftForm from './components/DraftForm';
// import storeData from './data/storeData';
import DraftProvider from './providers/DraftProvider';
import storeDataObject from './data/storeDataObject';

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
          // storeData={storeData}
          storeDataObject={storeDataObject}
        /></div>
      </DraftProvider>
    </div>
  );
}

export default App;
