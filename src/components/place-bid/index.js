import React, { Component } from 'react';
import { navigate } from '@reach/router';
import {
  Button,
  Form,
  FormField,
  Heading,
  RadioButtonGroup,
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

    if (currentProject.amount && this.state.amount < currentProject.amount) {
      this.placeBid(currentProject);
    } else if (!currentProject.amount) {
      this.placeBid(currentProject);
    }

    navigate('/');
  }

  placeBid = project => {
    const projectWithBid = { ...project, ...this.state };

    localStorage.setItem(this.props.id, JSON.stringify(projectWithBid));
  }

  render() {
    return (
      <>
        <Heading>Place Bid</Heading>
        <Form onSubmit={this.handleSubmit}>
          <FormField label="Bid Amount:" pad={true}>
            <TextInput
              min="1"
              name="amount"
              onChange={this.handleChange}
              placeholder="$100"
              step="any"
              type="number"
              value={this.state.amount} />
          </FormField>
          <FormField label="Billing Type:" pad={true}>
            <RadioButtonGroup
              name="type"
              onChange={this.handleChange}
              options={['fixed', 'hourly']}
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