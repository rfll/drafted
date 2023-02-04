import LiveSearch from "./components/LiveSearch";
import DraftForm from "./components/DraftForm";
import DraftProvider, { draftContext } from "./providers/DraftProvider";
import { DragDropContext } from "react-beautiful-dnd";
import { useContext } from "react";
import './App.scss';

function App() {
  const { onDragEnd } = useContext(draftContext);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="parent-container">
        <LiveSearch />
        <DraftForm />
      </div>
    </DragDropContext>
  );
}

export default App;
