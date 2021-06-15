import React from 'react';
import SongForm from './SongForm';
import SongList from './SongList';

const SongOverview = () => {

  return (
    <div className="song-overview">
      <SongForm />
      <SongList />
    </div>
  );

}

export default SongOverview;
