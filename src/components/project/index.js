import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Text } from 'grommet';

const Project = ({
  data: {
    amount,
    id,
    reqs,
    title,
    type,
    hours,
    expirationDate,
    expirationTime,
    seller }
}) => {
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
      <Text>Expires: {expirationDate} @ {expirationTime}</Text>
      {
        (seller !== sessionStorage.getItem('username')) &&
        <Link
          to={`/place-bid/${id}`}
          style={{ color: '#3D138D' }}>
          Place Bid
        </Link>
      }
    </Box>
  );
};


export default Project;