import React, { useContext, useEffect, useState } from "react";
import useBreedList from "./useBreedList";
import Results from "./Results";
import ThemeContext from "./ThemeContext";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
const THEMECOLORS = [
  "Dark blue",
  "Rebecca purple",
  "Peru",
  "Chartreuse",
  "Medium orchid",
];

const SearchParams = () => {
  // data binding with default as Seattle, WA, used in onChange in input react element
  const [location, setLocation] = useState("Seattle, WA");

  // For drop down Animals, we create react elements mapping ANIMALS outside function, but won't mutate ANIMALS.
  const [animal, setAnimal] = useState("");

  //For breeds, we will use an external API, using fetch, which is a sideeffect, we use useEffect for sideeffects
  const [breed, setBreed] = useState("");
  //same as breeds, we will use fetch in useEffect
  const [pets, setPets] = useState([]);
  // custom hook useBreedList dependent on animal: returns [breedlList,status],but not using status
  const [breeds] = useBreedList(animal);
  //using context passed in as prop(prop-drilling) from App.js
  const [theme, setTheme] = useContext(ThemeContext); // we can have theme and setTheme

  //side effects
  useEffect(() => {
    requestPets();
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  // async function to get pets from the api using fetch
  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();
    setPets(json.pets);
  }

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
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
        <label htmlFor="animal">
          Animal
          <select
            name="animal"
            id="animal"
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
            onBlur={(e) => setAnimal(e.target.value)}
          >
            {/* default empty option*/}
            <option />
            {/* other drop down list items  */}
            {ANIMALS.map((animal) => (
              <option value={animal} key={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            name="breed"
            id="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            onBlur={(e) => setBreed(e.target.value)}
          >
            {/* default empty option*/}
            <option />
            {/* other drop down list items  */}
            {breeds.map((breed) => (
              <option value={breed} key={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="theme">
          Theme
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            onBlur={(e) => setTheme(e.target.value)}
          >
            {THEMECOLORS.map((color) => (
              <option
                value={color.split(" ").join("").toLowerCase()}
                key={color}
              >
                {color}
              </option>
            ))}
          </select>
        </label>
        <button style={{ backgroundColor: theme }}>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};
export default SearchParams;
