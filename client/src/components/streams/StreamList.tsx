import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchStreams } from '../../actions/actions';

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

  interface stream {
    userId: string;
  }

  const renderAdmin = (stream: stream) => {
    if (stream.userId === currentUserId) {
      return (
        <div className='right floated content'>
          <Link to={`/streams/edit/${stream.id}`} className='ui button primary'>
            Edit
          </Link>
          <button className='ui button negative'>Delete</button>
        </div>
      );
    }
  };

  interface stream {
    title: string;
    description: string;
    id: string;
  }

  const renderList = streams.map((stream: stream) => (
    <div className='item' key={stream.id}>
      {renderAdmin(stream)}
      <i className='big middle aligned icon camera' />
      <div className='content'>
        <div className='header'>{stream.title}</div>
        <div className='description'>{stream.description}</div>
      </div>
    </div>
  ));

  const renderCreate = () => {
    if (isSignedIn) {
      return (
        <div style={{ textAlign: 'right' }}>
          <Link to='/streams/new' className='ui button primary'>
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

interface state {
  streams: object;
  auth: { id: string; isSignedIn: boolean };
}

const mapStateToProps = (state: state) => ({
  streams: Object.values(state.streams),
  currentUserId: state.auth.id,
  isSignedIn: state.auth.isSignedIn
});

export default connect(mapStateToProps, { fetchStreams })(SteamList);
