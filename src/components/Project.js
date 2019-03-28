import React from 'react';
import { Box, Heading, Text } from 'grommet';

const Project = ({ data: { title, reqs } }) => {
  return (
    <Box
      border={{ color: 'light-3', size: 'xsmall' }}
      margin="small"
      pad="small"
      style={{ borderRadius: '4px' }}>
      <Heading>{title}</Heading>
      <Text>Requirements: {reqs}</Text>
    </Box>
  );
};


export default Project;