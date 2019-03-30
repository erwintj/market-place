import React, { Component } from 'react';
import { navigate } from '@reach/router';
import {
  Button,
  Form,
  FormField,
  Heading,
  TextInput
} from 'grommet';

class PlaceBid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: '',
      type: ''
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  };

  handleSubmit = e => {
    e.preventDefault();

    const currentProject = JSON.parse(localStorage.getItem(this.props.id));
    const test = { ...currentProject, ...this.state };

    localStorage.setItem(this.props.id, JSON.stringify(test));

    navigate('/');
  }

  render() {
    return (
      <>
        <Heading>Place Bid</Heading>
        <Form onSubmit={this.handleSubmit}>
          <FormField label="Bid Amount:" pad={true}>
            <TextInput
              name="amount"
              onChange={this.handleChange}
              placeholder="$100"
              value={this.state.amount} />
          </FormField>
          <FormField label="Billing Type:" pad={true}>
            <TextInput
              name="type"
              onChange={this.handleChange}
              placeholder="hourly"
              value={this.state.type} />
          </FormField>
          <Button
            color="dark-1"
            label="PLACE BID"
            primary
            type="submit">
          </Button>
        </Form>
      </>
    );
  }
}

export default PlaceBid;