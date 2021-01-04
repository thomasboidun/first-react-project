import React from 'react';
import './home.css';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  render() {
    return (
      <section id="HomePage" className="App-page">
        <p>HomePage works!</p>
      </section>
    )
  }
}