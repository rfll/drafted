import LiveSearch from "./components/LiveSearch";
import DraftForm from "./components/DraftForm";
import PlayerProfile from "./components/PlayerProfile";
import Nav from "./components/Nav";
import { draftContext } from "./providers/DraftProvider";
import { DragDropContext } from "react-beautiful-dnd";
import { useContext } from "react";
import "./App.scss";

function App() {
  const { onDragEnd } = useContext(draftContext);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Nav />
      <div className="parent-container">
        <div className="left-column">
          <LiveSearch />
          <PlayerProfile />
        </div>
        <DraftForm />
      </div>
    </DragDropContext>
  );
}

export default App;
