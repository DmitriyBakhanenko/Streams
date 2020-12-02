import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';

import { fetchStreams } from '../../actions/actions';

const SteamList = ({ fetchStreams, streams }: any) => {
  const ref = useRef(fetchStreams);

  useEffect(() => {
    ref.current();
  }, []);

  interface stream {
    title: string;
    description: string;
    id: string;
  }

  const renderList = streams.map((stream: stream) => (
    <div className='item' key={stream.id}>
      <i className='big middle aligned icon camera' />
      <div className='content'>
        <div className='header'>{stream.title}</div>
        <div className='description'>{stream.description}</div>
      </div>
    </div>
  ));

  return (
    <div>
      <h1>Streams</h1>
      <div className='ui celled list'>{renderList}</div>
    </div>
  );
};

interface state {
  streams: object;
}

const mapStateToProps = (state: state) => ({
  streams: Object.values(state.streams)
});

export default connect(mapStateToProps, { fetchStreams })(SteamList);
