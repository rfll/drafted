// import fakeData from './data/fakeDataArray';
import './App.css';
import LiveSearch from './components/LiveSearch';
import DraftForm from './components/DraftForm';
// import storeData from './data/storeData';
import DraftProvider, { draftContext } from './providers/DraftProvider';
// import storeDataObject from './data/storeDataObject';
import { DragDropContext } from 'react-beautiful-dnd';
import { useContext } from 'react';

function App() {
  const { onDragEnd } = useContext(draftContext);

  return (
    <DragDropContext 
    onDragEnd={onDragEnd}>
      <div>
      <div>Mocks</div>
        <LiveSearch />
        {/* <div className='selected-players'> */}
          <DraftForm />
        {/* </div> */}
    </div>
    </DragDropContext>
  );
}

export default App;