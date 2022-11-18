import { useContext } from "react";
import { draftContext } from "../providers/DraftProvider";

export default function SearchBar(props) {
  const { searchTerm, setSearchTerm } = useContext(draftContext);

  return (
    <section className="search">
      <form className="search__form" onSubmit={event => event.preventDefault()}>
        <input
          className="radius"
          spellCheck="false"
          placeholder="Search Players"
          name="search"
          type="text"
          value={searchTerm}
          onChange={event => setSearchTerm(event.target.value)}
        />
      </form>
    </section>
  );
}
