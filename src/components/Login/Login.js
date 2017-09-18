import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/authActions';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      boothName: '',
      email: '',
      phoneNumber: '',
      isLoading: false
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(ev) {
    ev.preventDefault();

    this.setState({
      isLoading: true
    });

    this.props.login(this.state).then(data => {
      this.refs.form.reset();
      this.setState({
        isLoading: false
      });
    });
  }

  onChange(ev) {
    this.setState({
      [ev.target.name]: ev.target.value
    });
  }

  render() {
    return (
      <form className="Login" ref="form" onSubmit={this.onSubmit}>
        <input
          onChange={this.onChange}
          name="boothName"
          type="text"
          placeholder="Legal name" />
        <input
          onChange={this.onChange}
          name="email"
          type="email"
          placeholder="Email Address" />
        <input
          onChange={this.onChange}
          name="phoneNumber"
          type="tel"
          placeholder="Phone Number" />
        <input type="submit" value="Login" />
      </form>
    );
  }
}

export default connect(null, { login })(Login);