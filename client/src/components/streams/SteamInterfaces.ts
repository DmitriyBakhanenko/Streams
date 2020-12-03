export interface Props {
  match: {
    params: {
      id: number;
    };
  };
  stream: number;
}

export interface Stream {
  title: string;
  description: string;
  userId: string;
  id: number;
}

export interface State {
  streams: Array<Stream>;
}

export interface ComponentProps {
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
  stream: {
    id: number;
    title: string;
  };
}
