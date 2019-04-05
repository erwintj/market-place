import { ADD_PROJECT, PLACE_BID } from './actions';

export default (state = [], action) => {
  switch (action.type) {
    case ADD_PROJECT:
      return [
        ...state,
        {
          id: action.project.id,
          title: action.project.title,
          reqs: action.project.reqs,
          hours: action.project.hours,
          expirationDate: action.project.expirationDate,
          expirationTime: action.project.expirationTime,
          seller: action.seller
        }
      ];
    case PLACE_BID:
      const { bid, buyer } = action;
      return state.map(project => (project.id === action.id) ? ({ ...project, ...bid, ...{ buyer } }) : state);
    default:
      return state;
  }
};