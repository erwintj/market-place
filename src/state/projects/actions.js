export const ADD_PROJECT = 'ADD_PROJECT';
export const PLACE_BID = 'PLACE_BID';

export const addProject = project => ({
  type: ADD_PROJECT,
  project,
  seller: sessionStorage.getItem('username')
});

export const placeBid = (bid, id) => {
  return ({
    type: PLACE_BID,
    bid,
    id,
    buyer: sessionStorage.getItem('username')
  })
};