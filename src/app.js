import React from "react";
import ReactDOM from "react-dom";

// const Pet = (props) => {
//   return React.createElement("div", {}, [
//     React.createElement("h2", {}, props.name),
//     React.createElement("h3", {}, props.animal),
//     React.createElement("h3", {}, props.breed),
//   ]);
// };

const Pet = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <h3>{props.breed}</h3>
      <h3>{props.animal}</h3>
    </div>
  );
};

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me"),
//     React.createElement(Pet, {
//       name: "Puss",
//       animal: "Cat",
//       breed: "Tabby",
//     }),
//     React.createElement(Pet, {
//       name: "Rio",
//       animal: "Parrot",
//       breed: "Spix's Macaw",
//     }),
//     React.createElement(Pet, {
//       name: "Bolt",
//       animal: "Dog",
//       breed: "German Shepherd",
//     }),
//   ]);
// };


const App = ()=>{
  return(
  <div>
    <h1>Adopt Me!</h1>
    <Pet name="Luna" animal="Dog" breed="Havanenese"></Pet>
    <Pet name="Pepper" animal="Bird" breed="Cockatiel"></Pet>
    <Pet name="Beam" animal="Dog" breed="Wheaten Terrier"></Pet>
  </div>
  )
}


ReactDOM.render(React.createElement(App), document.getElementById("root"));
