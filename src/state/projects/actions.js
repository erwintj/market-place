export const ADD_PROJECT = 'ADD_PROJECT';
export const PLACE_BID = 'PLACE_BID';

export const addProject = project => ({
  type: ADD_PROJECT,
  project,
  seller: sessionStorage.getItem('username')
});

export const placeBid = (bid, id) => {
  console.log(bid);
  console.log(id);
  return ({
    type: PLACE_BID,
    bid,
    id,
    buyer: sessionStorage.getItem('username')
  })
};