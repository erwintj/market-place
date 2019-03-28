import React, { Component } from 'react';
import {
  Button,
  Form,
  FormField,
  Heading,
  TextInput
} from 'grommet';

class PlaceBid extends Component {
  render() {
    return (
      <>
        <Heading>Place Bid</Heading>
        <Form onSubmit={this.handleSubmit}>
          <FormField label="Bid Amount:" pad={true}>
            <TextInput name="amount" placeholder="$100" />
          </FormField>
          <FormField label="Billing Type:" pad={true}>
            <TextInput name="type" placeholder="hourly" />
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