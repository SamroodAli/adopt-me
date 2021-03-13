const Pet = () => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, "Luna"),
    React.createElement("h3", {}, "Dog"),
    React.createElement("h3", {}, "Havanese"),
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
