export default function SearchBar(props) {

  return (
    <section className="search">
      <form className="search__form" onSubmit={event => event.preventDefault()}>
        <input
          className="radius"
          spellCheck="false"
          placeholder="Search Players"
          name="search"
          type="text"
          value={props.term}
          onChange={event => props.setTerm(event.target.value)}
        />
      </form>
    </section>
  );
}
