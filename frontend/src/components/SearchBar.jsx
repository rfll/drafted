import { useContext } from "react";
import { draftContext } from "../providers/DraftProvider";

export default function SearchBar(props) {
  const { searchTerm, setSearchTerm, index } = useContext(draftContext);

  return (
    <section className="search">
      <form className="search__form" onSubmit={event => event.preventDefault()}>
        <input
          className="radius"
          spellCheck="false"
          placeholder={`Pick ${index + 1}`}
          name="search"
          type="text"
          value={searchTerm}
          onChange={event => setSearchTerm(event.target.value)}
        />
      </form>
    </section>
  );
}
