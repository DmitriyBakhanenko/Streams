export interface Props {
  fetchStream: Function;
  editStream: Function;
  deleteStream: Function;
  history?: object;
  location?: object;
  match: {
    params: {
      id: number;
    };
  };
  stream: Stream;
}

export interface Stream {
  title: string;
  description: string;
  userId: string;
  id: number;
}

export interface State {
  streams: Array<Stream>;
  auth: { id: string; isSignedIn: boolean };
}
