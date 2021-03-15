import { useState } from "react";

const SearchParams = () => {
  let [location, setLocation] = useState("Kerala,India");

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="location"
          />
        </label>
        s<button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
