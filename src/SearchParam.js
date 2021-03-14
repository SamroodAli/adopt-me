const location ="Kerala,India"
const SearchParams = ()=>{
  return(
    <div className="search-params">
      <form>
        <label htmlFor="location">Location
        <input type="text" id="location" value={location.toUpperCase()} placeholder="location"/>
        </label>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default SearchParams;
