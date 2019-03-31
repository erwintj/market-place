import React from 'react';
import { Link } from '@reach/router';
import { Box, Text } from 'grommet';

const Project = ({ data: { amount, id, reqs, title, type } }) => {
  return (
    <Box
      border={{ color: 'light-3', size: 'xsmall' }}
      margin="small"
      pad="small"
      style={{ borderRadius: '4px' }}>
      <h1>{title}</h1>
      <Text>Requirements: {reqs}</Text>
      {amount ? <Text>Current Bid: ${amount} ({type})</Text> : null}
      <Link to={`/place-bid/${id}`}>Place Bid</Link>
    </Box>
  );
};


export default Project;