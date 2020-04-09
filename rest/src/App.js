import React from 'react';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      rest: [],
    };
  }
  componentDidMount() {
    fetch('http://localhost:8000/api/v1/rest/')
      .then(response => response.json())
      .then(json => this.setState({ rest: json }))
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.rest.map(rest => (
            <li key={rest.name}>
              <Item rest={rest} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const Item = props => {
  <span>
    {props.rest.name}:{props.rest.rest}
  </span>
}