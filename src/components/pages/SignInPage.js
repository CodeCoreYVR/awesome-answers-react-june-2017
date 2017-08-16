import React, {Component} from 'react';
import TokenForm from '../TokenForm';
import {Token} from '../../utilities/requests';
import jwtDecode from 'jwt-decode';

class SignInPage extends Component {
  constructor (props) {
    super(props);

    this.createToken = this.createToken.bind(this);
  }

  createToken (params) {
    Token
      .post(params)
      .then(({jwt}) => {
        window.localStorage.setItem('jwt', jwt);
        console.log(jwtDecode(jwt));
        this.props.history.push(`/`);
      });
  }

  render () {
    return (
      <div className='SignInPage'>
        <h2>Sign In</h2>
        <TokenForm onSubmit={this.createToken} />
      </div>
    );
  }
}

export default SignInPage;
