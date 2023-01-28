import { useContext } from "react";
import { draftContext } from "../providers/DraftProvider";

export default function SearchBar(props) {
  const { searchTerm, setSearchTerm, index } = useContext(draftContext);

  return (
    <form className="search_form" onSubmit={(event) => event.preventDefault()}>
      <input
        className="radius"
        spellCheck="false"
        placeholder={`Search Players`}
        name="search"
        type="text"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
       <svg
        className="search-icon"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        // stroke="#000000"
        // strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
    </form>
  );
}
