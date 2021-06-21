import React from 'react';
import SongForm from './SongForm';
import SongContainer from './SongContainer';
import SongActions from './SongActions';

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
