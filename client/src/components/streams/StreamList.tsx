import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchStreams } from '../../actions/actions';
import { State, Stream } from './SteamInterfaces';

const SteamList = ({
  fetchStreams,
  streams,
  currentUserId,
  isSignedIn
}: any) => {
  const ref = useRef(fetchStreams);

  useEffect(() => {
    ref.current();
  }, []);

  const renderAdmin = (stream: Stream) => {
    if (stream.userId === currentUserId) {
      return (
        <div className='right floated content'>
          <Link to={`/streams/edit/${stream.id}`} className='ui button primary'>
            Edit
          </Link>
          <Link
            to={`/streams/delete/${stream.id}`}
            className='ui button negative'
          >
            Delete
          </Link>
        </div>
      );
    }
  };

  const renderList = streams.map((stream: Stream) => (
    <div className='item' key={stream.id}>
      {renderAdmin(stream)}
      <i className='big middle aligned icon camera' />
      <div className='content'>
        <div className='header'>
          <Link to={`/streams/${stream.id}`}>{stream.title}</Link>
        </div>
        <div className='description'>{stream.description}</div>
      </div>
    </div>
  ));

  const renderCreate = () => {
    if (isSignedIn) {
      return (
        <div style={{ textAlign: 'right' }}>
          <Link to='/streams/new' className='ui button green'>
            Create Stream
          </Link>
        </div>
      );
    }
  };

  return (
    <div>
      <h1>Streams</h1>
      <div className='ui celled list'>{renderList}</div>
      {renderCreate()}
    </div>
  );
};

const mapStateToProps = (state: State) => ({
  streams: Object.values(state.streams),
  currentUserId: state.auth.id,
  isSignedIn: state.auth.isSignedIn
});

export default connect(mapStateToProps, { fetchStreams })(SteamList);
