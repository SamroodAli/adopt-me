import { Component } from "react";
import { withRouter } from "react-router-dom";

class Details extends Component {
  constructor() {
    super();

    this.state = { loading: true, display: "none" };
  }

  async componentDidMount() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
    );
    const json = await res.json();
    this.setState(
      Object.assign(
        {
          loading: false,
          display: "block",
        },
        json.pets[0]
      )
    );
  }

  render() {
    const {
      animal,
      breed,
      city,
      state,
      description,
      name,
      display,
    } = this.state;
    return (
      <div className="details" style={{ display: `${display}` }}>
        <div>
          <h1>{name}</h1>
          <h2>
            {animal} - {breed} - {city}, {state}
          </h2>
          <p>{description}</p>
          <button>Adopt {name}</button>
        </div>
      </div>
    );
  }
}

export default withRouter(Details);
