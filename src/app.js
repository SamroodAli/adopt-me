import ReactDOM from "react-dom";
import Pet from "./pet"

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
