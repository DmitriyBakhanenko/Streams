import { CREATE_STREAM } from '../actions/types';

interface action {
  type: string;
  payload: object;
}

export const streamsReducer = (state = [], action: action) => {
  switch (action.type) {
    case CREATE_STREAM:
      return [...state, action.payload];

    default:
      return state;
  }
};
