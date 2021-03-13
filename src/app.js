import React from "react";
import ReactDOM from "react-dom";

const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("h3", {}, props.animal),
    React.createElement("h3", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me"),
    React.createElement(Pet, {
      name: "Puss",
      animal: "Cat",
      breed: "Tabby",
    }),
    React.createElement(Pet, {
      name: "Rio",
      animal: "Parrot",
      breed: "Spix's Macaw",
    }),
    React.createElement(Pet, {
      name: "Bolt",
      animal: "Dog",
      breed: "German Shepherd",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
