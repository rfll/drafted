// import fakeData from './data/fakeDataArray';
import './App.css';
import LiveSearch from './components/LiveSearch';
import DraftForm from './components/DraftForm';
// import storeData from './data/storeData';
import DraftProvider from './providers/DraftProvider';
// import storeDataObject from './data/storeDataObject';
import { DragDropContext } from 'react-beautiful-dnd';

function App() {

  // onDragEnd = result => {

  // }

  return (
    <div>
      <div>Mocks</div>
      <DraftProvider>
        <LiveSearch />
        <DragDropContext
          // onDragEnd={onDragEnd}
        >
          <div className='selected-players'>
            <DraftForm />
          </div>
        </DragDropContext>
      </DraftProvider>
    </div>
  );
}

export default App;
