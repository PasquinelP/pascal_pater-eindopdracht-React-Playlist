import React from 'react';
import SongForm from './song/SongForm';
import SongContainer from './song/SongContainer';
import SongActions from './song/SongActions';

const SongOverview = () => {

  return (
    <div className="song-overview">
      <SongForm />
      <SongContainer />
      <SongActions />
    </div>
  );

}

export default SongOverview;
