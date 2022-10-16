import DraftForm from './components/DraftForm';
import data from './data/fakeData';
import './App.css';

function App() {
  return (
    <div>
      <div>Mocks</div>
      <DraftForm data={data} />
    </div>
  );
}

export default App;
