import React from 'react';
import './home.css';

import Count from '../../components/hooks/hook';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  render() {
    return (
      <section id="HomePage" className="App-page">
        <div className="container">
          <h2>Hello World!</h2>
          <Count />
        </div>
      </section>
    )
  }
}