import React from 'react';
import './sign-in.css';

export default class SignInPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '', message: '' };

    this.selector = '#SignInPage';

    this.inputs = [
      {
        id: 'username',
        valid: undefined
      },
      {
        id: 'password',
        valid: undefined
      },
    ];

    this.formControl = this.formControl.bind(this);
    this.signIn = this.signIn.bind(this);
  }

  formControl(event) {
    const value = event.currentTarget.value;
    const id = event.currentTarget.getAttribute('id');
    const input = this.inputs.filter(input => input.id === id)[0];

    if (value.trim().length > 0) {
      input.valid = true;
    } else {
      input.valid = false;
    }

    const validators = this.inputs.filter(input => input.valid);
    const btn = document.querySelector(this.selector + ' button[type="submit"]');

    validators.length === this.inputs.length ?
      btn.removeAttribute('disabled') :
      btn.setAttribute('disabled', 'disabled');
  }

  signIn(event) {
    event.preventDefault();
    // console.log(event);

    const validators = this.inputs.filter(input => input.valid);

    if (validators.length === this.inputs.length) {
      // find user
      if (event.target[0].value === "thomas" && event.target[1].value === 'react') {
        // user connected
        this.setState({ value: 'success', message: 'hello ' + event.target[0].value + '!' });
      } else {
        //error
        this.setState({ value: 'error', message: 'error! bad login. try again with username: thomas and password: react.' });
      }
    }
  }

  render() {
    return (
      <section id="SignInPage" className="App-page">
        <p>SignInPage works!</p>
        <br />
        <form onSubmit={this.signIn}>
          <p>{this.state.message}</p>
          <label htmlFor="username">Username:</label> <br />
          <input onInput={this.formControl} id="username" name="username" type="text" required /> <br />
          <label htmlFor="password">Password:</label> <br />
          <input onInput={this.formControl} id="password" name="password" type="password" required /> <br />
          <br />
          <button type="submit" disabled>Sign in</button>
        </form>
      </section>
    )
  }
}