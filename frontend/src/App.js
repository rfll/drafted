import LiveSearch from "./components/LiveSearch";
import DraftForm from "./components/DraftForm";
import PlayerProfile from "./components/PlayerProfile";
import { draftContext } from "./providers/DraftProvider";
import { DragDropContext } from "react-beautiful-dnd";
import {
  TwitterIcon,
  TwitterShareButton,
  FacebookIcon,
  FacebookShareButton,
  RedditIcon,
  RedditShareButton,
} from "react-share";
import { useContext } from "react";
import "./App.scss";

function App() {
  const { onDragEnd } = useContext(draftContext);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="parent-container">
        <div className="left-column">
          <LiveSearch />
          <PlayerProfile />
        </div>
        <DraftForm />
        <div className="share-buttons">
          <TwitterShareButton
            title={"Drafted Big Board"}
            url={window.location.href}
            className="twitter-share"
          >
            <TwitterIcon size={42} borderRadius={18} />
          </TwitterShareButton>
          <FacebookShareButton
            title={"Drafted Big Board"}
            url={window.location.href}
            className="twitter-share"
          >
            <FacebookIcon size={42} borderRadius={18} />
          </FacebookShareButton>
          <RedditShareButton
            title={"Drafted Big Board"}
            url={window.location.href}
            className="twitter-share"
          >
            <RedditIcon size={42} borderRadius={18} />
          </RedditShareButton>
        </div>
      </div>
    </DragDropContext>
  );
}

export default App;
