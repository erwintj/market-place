import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
  Button,
  Form,
  FormField,
  TextInput
} from 'grommet';

import { setAuthToken } from '../../state/auth/actions';

const mapDispatchToProps = dispatch => ({
  handleLogin(formData) {
    dispatch(setAuthToken(formData))
  }
});

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '' };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.handleLogin(this.state);
  };

  render() {
    return (
      this.props.isAuthenticated ? <Redirect to="/home" /> :
        (
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
              <Button
                color="neutral-2"
                label="LOG IN"
                primary
                type="submit">
              </Button>
            </Form>
          </>
        )
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);