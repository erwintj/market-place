import React, { Component } from 'react';
import { navigate } from '@reach/router';
import {
  Button,
  Form,
  FormField,
  Heading,
  TextArea,
  TextInput
} from 'grommet';

class PostProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      title: '',
      reqs: '',
      hours: 0
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const array = new Uint32Array(1);
    const [id] = window.crypto.getRandomValues(array);
    const project = { ...this.state, ...{ id } };

    localStorage.setItem(id, JSON.stringify(project));

    navigate('/');
  };

  render() {
    return (
      <>
        <Heading>Create Post</Heading>
        <Form onSubmit={this.handleSubmit}>
          <FormField htmlFor="title" label="Project Title:" pad={true}>
            <TextInput
              name="title"
              onChange={this.handleChange}
              placeholder="A name for your project"
              value={this.state.title} />
          </FormField>
          <FormField htmlFor="reqs" label="Project Requirements:" pad={true}>
            <TextArea
              name="reqs"
              onChange={this.handleChange}
              placeholder="List of requirements"
              value={this.state.reqs} />
          </FormField>
          <FormField htmlFor="hours" label="Estimated Number of Hours:" pad={true}>
            <TextInput
              name="hours"
              onChange={this.handleChange}
              type="number"
              value={this.state.hours} />
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
