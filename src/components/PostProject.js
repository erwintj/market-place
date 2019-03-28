import React, { Component } from 'react';
import {
  Button,
  Form,
  FormField,
  Heading,
  TextArea,
  TextInput
} from 'grommet';

class PostProject extends Component {
  render() {
    return (
      <>
        <Heading>Create Post</Heading>
        <Form onSubmit={this.handleSubmit}>
          <FormField label="Project Title:" pad={true}>
            <TextInput name="title" placeholder="A name for your project" />
          </FormField>
          <FormField label="Project Requirements:" pad={true}>
            <TextArea name="reqs" placeholder="List of requirements" />
          </FormField>
          <Button
            color="dark-1"
            label="CREATE POST"
            primary
            type="submit">
          </Button>
        </Form>
      </>
    );
  }
}

export default PostProject;
