import {
  GOOGLE_SIGN_IN,
  GOOGLE_SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
  DELETE_STREAM,
  EDIT_STREAM
} from './types';
import streams from '../apis/streams';
import history from '../history';

export const signIn = (id: string, currentUser: string) => {
  return {
    type: GOOGLE_SIGN_IN,
    payload: { id, currentUser }
  };
};

export const signOut = () => {
  return {
    type: GOOGLE_SIGN_OUT
  };
};

export const createStream = (formValues: object) => async (
  dispatch: CallableFunction,
  getState: any
) => {
  const { id } = getState().auth;
  const response = await streams.post('/streams', {
    ...formValues,
    userId: id
  });

  dispatch({
    type: CREATE_STREAM,
    payload: response.data
  });

  history.push('/');
};

export const fetchStreams = () => async (dispatch: CallableFunction) => {
  const response = await streams.get('/streams');

  dispatch({ type: FETCH_STREAMS, payload: response.data });
};
export const fetchStream = (id: string) => async (
  dispatch: CallableFunction
) => {
  const response = await streams.get('/streams/' + id);

  dispatch({ type: FETCH_STREAM, payload: response.data });
};
export const editStream = (id: string, formValues: object) => async (
  dispatch: CallableFunction
) => {
  const response = await streams.put('/streams/' + id, formValues);

  dispatch({ type: EDIT_STREAM, payload: response.data });
};
export const deleteStream = (id: string) => async (
  dispatch: CallableFunction
) => {
  await streams.delete('/streams/' + id);

  dispatch({ type: DELETE_STREAM, payload: id });
};
