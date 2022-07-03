import "./style.scss";

function SearchBar() {
  return (
    <div className="search-sort mb-4">
      <form className="w-100 row">
        <div className="row p-2 col-5 px-4 pt-1">
          <input
            id="keyword"
            name="keyword"
            className="outline-none p-2 search-input"
            type="text"
            placeholder="Search by keyword"
            required
          />
        </div>
        <div className="row p-2 col-3 px-4 pt-1">
          <select
            id="field"
            className="outline-none p-2 search-input"
            style={{ backgroundColor: "white" }}
          >
            <option value="" key="NO_FIELD">
              Sort by field
            </option>
          </select>
        </div>
        <div className="row p-2 col-3 px-4 pt-1">
          <select
            id="field"
            className="outline-none p-2 search-input"
            style={{ backgroundColor: "white" }}
          >
            <option value="asc" key="asc">
              Ascending
            </option>
            <option value="des" key="des">
              Descending
            </option>
          </select>
        </div>
        <div className="row p-2 col-2 px-4 pe-0 pt-1">
          <button className="btn btn-primary p-2">Search</button>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
