import React, { Component } from 'react';
import { navigate } from '@reach/router';
import {
  Button,
  Form,
  FormField,
  TextInput
} from 'grommet';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const encodedCredentials = btoa(this.state);
    localStorage.setItem('token', JSON.stringify(encodedCredentials));

    navigate('/');
  };

  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <FormField htmlFor="username" label="Username:" pad={true}>
            <TextInput
              name="username"
              onChange={this.handleChange}
              placeholder="seller@gmail.com"
              type="value"
              value={this.state.username} />
          </FormField>
          <FormField htmlFor="password" label="password:" pad={true}>
            <TextInput
              name="password"
              onChange={this.handleChange}
              placeholder="password"
              type="password"
              value={this.state.password} />
          </FormField>
          <Button
            color="dark-1"
            label="LOG IN"
            primary
            type="submit">
          </Button>
        </Form>
      </>
    );
  }
}

export default Login;