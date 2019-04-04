import React, { Component } from 'react';
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

  calculateBid = (type, hours, amount) => {
    switch (type) {
      case 'hourly':
        return hours * amount;
      case 'fixed':
        return amount;
      default:
        return amount;
    }
  }

  handleSubmit = e => {
    e.preventDefault();

    const currentProject = JSON.parse(localStorage.getItem(this.props.match.params.id));

    if (currentProject && currentProject.amount) {
      const { amount, type } = this.state;
      const bid = this.calculateBid(type, currentProject.hours, amount);
      const currentBid = this.calculateBid(currentProject.type, currentProject.hours, currentProject.amount);

      if (bid < currentBid) {
        const project = { ...currentProject, ...{ amount: bid } };

        this.placeBid(project);
      }
    } else if (currentProject) {
      const { amount, type } = this.state;
      const bid = this.calculateBid(type, currentProject.hours, amount);
      const project = { ...currentProject, ...{ amount: bid } };

      this.placeBid(project);
    }

    this.props.history.push('/home');
  }

  placeBid = (project) => {
    const projectWithBid = { ...project, ...this.state };

    localStorage.setItem(this.props.match.params.id, JSON.stringify(projectWithBid));
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
            color="neutral-2"
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