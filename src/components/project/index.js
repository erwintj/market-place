import React from 'react';
import { Link } from '@reach/router';
import { Box, Text } from 'grommet';
import moment from 'moment';

const Project = ({ data: { amount, id, reqs, title, type, hours, expiration } }) => {
  return (
    <Box
      border={{ color: 'light-3', size: 'xsmall' }}
      margin="small"
      pad="small"
      style={{ borderRadius: '4px' }}>
      <h1>{title}</h1>
      <Text>Requirements: {reqs}</Text>
      <Text>Time to complete: {hours} hours</Text>
      {amount && <Text>Current Bid: ${amount}{(type === 'hourly' && '/hr')}</Text>}
      <Text>{moment(expiration).calendar()}</Text>
      <Link to={`/place-bid/${id}`}>Place Bid</Link>
    </Box>
  );
};


export default Project;