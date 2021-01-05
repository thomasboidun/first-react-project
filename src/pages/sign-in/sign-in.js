import React, { useState } from 'react';
import './sign-in.css';

import { useHistory } from 'react-router-dom';

function SignInHook() {
  const history = useHistory();

  const selector = "#SignIn";

  const [form, setForm] = useState([
    { id: 'username', value: '', valid: undefined },
    { id: 'password', value: '', valid: undefined },
  ]);

  const [alert, setAlert] = useState({ status: undefined, message: '' });

  // const [user, setUser] = useState({ username: '', isConnected: false });

  const formControl = (event) => {
    let current_input = {
      id: event.target.getAttribute('id'),
      value: event.target.value.trim(),
      valid: undefined
    }

    current_input.value.trim().length > 0 ?
      current_input.valid = true :
      current_input.valid = false;

    let inputs = form;

    for (let i = 0; i < inputs.length; i++) {
      const input = inputs[i];
      console.log(input, current_input)
      if (input.id === current_input.id) {
        inputs[i] = current_input
      }
    }

    console.log(inputs);
    setForm(inputs);

    handleSubmitButton();
  }

  const handleSubmitButton = () => {
    const validator = form.filter(input => input.valid);
    const btn = document.querySelector(selector + ' button[type="submit"]');
    validator.length === form.length ?
      btn.removeAttribute('disabled') :
      btn.setAttribute('disabled', 'disabled');
  };

  const signIn = (event) => {
    event.preventDefault();
    const alert = document.querySelector(`${selector} .alert`);

    if (form[0].value === "thomas" && form[1].value === 'react') {
      // user connected
      setAlert({ status: 'success', message: 'Hello ' + event.target[0].value + '!' });
      alert.classList = 'alert alert-info';

      history.push('/');
    } else {
      //error
      setAlert({ status: 'error', message: 'Error! Bad login. Try again with username: thomas and password: react.' });
      alert.classList = 'alert alert-danger';
    }
  }

  return (
    <section id="SignIn" className="App-page">
      <div className="container">
        <h2>Sign In</h2>
        <form onSubmit={event => signIn(event)} id="SignIn-form">
          <div className="row mb-3">
            <div className="col-12 col-md-4">
              <label className="form-label" htmlFor="username">Username:</label>
              <input onInput={event => formControl(event)} className="form-control" id="username" name="username" type="text" placeholder="Enter your username." required />
            </div>
            <div className="col-12 col-md-4">
              <label className="form-label" htmlFor="password">Password:</label>
              <input onInput={event => formControl(event)} className="form-control" id="password" name="password" type="password" placeholder="Enter your password." required />
            </div>
            <div className="col-12 col-md-4 d-flex align-items-end">
              <button className="btn btn-info" type="submit" disabled>Sign in</button>
            </div>
          </div>
          <div className="alert">{alert.message}</div>
        </form>
      </div>
    </section>
  )
}

export default SignInHook;

// export default class SignInPage extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { value: '', message: '' };

//     this.selector = '#SignInPage';

//     this.inputs = [
//       {
//         id: 'username',
//         valid: undefined
//       },
//       {
//         id: 'password',
//         valid: undefined
//       },
//     ];

//     this.formControl = this.formControl.bind(this);
//     this.signIn = this.signIn.bind(this);
//   }

//   formControl(event) {
//     const value = event.currentTarget.value;
//     const id = event.currentTarget.getAttribute('id');
//     const input = this.inputs.filter(input => input.id === id)[0];

//     if (value.trim().length > 0) {
//       input.valid = true;
//     } else {
//       input.valid = false;
//     }

//     const validators = this.inputs.filter(input => input.valid);
//     const btn = document.querySelector(this.selector + ' button[type="submit"]');

//     validators.length === this.inputs.length ?
//       btn.removeAttribute('disabled') :
//       btn.setAttribute('disabled', 'disabled');
//   }

//   signIn(event) {
//     event.preventDefault();
//     // console.log(event);

//     const validators = this.inputs.filter(input => input.valid);

//     if (validators.length === this.inputs.length) {
//       const alert = document.querySelector(`${this.selector} .alert`);
//       // find user
//       if (event.target[0].value === "thomas" && event.target[1].value === 'react') {
//         // user connected
//         this.setState({ value: 'success', message: 'Hello ' + event.target[0].value + '!' });
//         alert.classList = 'alert alert-info';
//         document.location.href = "/";

//       } else {
//         //error
//         this.setState({ value: 'error', message: 'Error! Bad login. Try again with username: thomas and password: react.' });
//         alert.classList = 'alert alert-danger';
//       }
//     }
//   }

//   render() {
//     return (
//       <section id="SignInPage" className="App-page">
//         <div className="container">
//           <h2>Sign In</h2>
//           <form onSubmit={this.signIn}>
//             <div className="row mb-3">
//               <div className="col-12 col-md-4">
//                 <label className="form-label" htmlFor="username">Username:</label>
//                 <input onInput={this.formControl} className="form-control" id="username" name="username" type="text" placeholder="Enter your username." required />
//               </div>
//               <div className="col-12 col-md-4">
//                 <label className="form-label" htmlFor="password">Password:</label>
//                 <input onInput={this.formControl} className="form-control" id="password" name="password" type="password" placeholder="Enter your password." required />
//               </div>
//               <div className="col-12 col-md-4 d-flex align-items-end">
//                 <button className="btn btn-info" type="submit" disabled>Sign in</button>
//               </div>
//             </div>
//             <div className="alert">{this.state.message}</div>
//           </form>
//         </div>
//       </section>
//     )
//   }
// }