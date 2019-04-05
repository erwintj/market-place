import React, { Component } from 'react';
import {
  Button,
  Calendar,
  Form,
  FormField,
  Heading,
  MaskedInput,
  TextArea,
  TextInput
} from 'grommet';
import moment from 'moment';
import { connect } from 'react-redux';
import { addProject } from '../../state/projects/actions';
import { v4 } from 'node-uuid';

class PostProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      reqs: '',
      hours: 0,
      expirationDate: '',
      expirationTime: ''
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleMaskedInputChange = e => {
    this.setState({ expirationTime: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();

    const date = new Date();
    const timestamp = date.toISOString();
    const id = v4();
    const project = { ...this.state, ...{ id }, ...{ timestamp } };

    this.props.dispatch(addProject(project));

    this.props.history.push('/home');
  };

  onSelect = date => {
    const formattedDate = moment(date).format("L");

    this.setState({ expirationDate: formattedDate })
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
          <FormField htmlFor="expiration-date" label="Expiration Date:" pad={true}>
            <Calendar
              date={this.state.expirationDate}
              daysOfWeek
              name="expirationDate"
              onSelect={this.onSelect}
              size="small"
              bounds={[
                `${moment().add(1, 'days')}`,
                `${moment().add(30, 'days')}`
              ]}
            />
          </FormField>
          <FormField htmlFor="expiration-time" label="Expiration Time:" pad={true}>
            <MaskedInput
              mask={[
                {
                  length: [1, 2],
                  options: [
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                    "11",
                    "12"
                  ],
                  regexp: /^1[1-2]$|^[0-9]$/,
                  placeholder: "hh"
                },
                { fixed: ":" },
                {
                  length: 2,
                  options: ["00", "15", "30", "45"],
                  regexp: /^[0-5][0-9]$|^[0-9]$/,
                  placeholder: "mm"
                },
                { fixed: " " },
                {
                  length: 2,
                  options: ["am", "pm"],
                  regexp: /^[ap]m$|^[AP]M$|^[aApP]$/,
                  placeholder: "ap"
                }
              ]}
              onChange={this.handleMaskedInputChange}
              value={this.state.expirationTime}
            />
          </FormField>
          <Button
            color="neutral-2"
            label="CREATE POST"
            primary
            type="submit">
          </Button>
        </Form>
      </>
    );
  }
}

export default connect()(PostProject);
