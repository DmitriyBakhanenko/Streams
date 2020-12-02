import { GOOGLE_SIGN_IN, GOOGLE_SIGN_OUT } from '../actions/types';

interface action {
  type: string;
  payload: {
    id: string;
    currentUser: string;
  };
}

const INITIAL_STATE = {
  isSignedIn: false,
  id: '',
  currentUser: ''
};

export const authReducer = (state = INITIAL_STATE, action: action) => {
  switch (action.type) {
    case GOOGLE_SIGN_IN:
      return {
        ...state,
        isSignedIn: true,
        id: action.payload.id,
        currentUser: action.payload.currentUser
      };

    case GOOGLE_SIGN_OUT:
      return { ...state, isSignedIn: false, id: '', currentUser: '' };

    default:
      return state;
  }
};
