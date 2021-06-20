import React from 'react';
import SongForm from './SongForm';
import SongList from './SongList';
import SongActions from './SongActions';

const SongOverview = () => {

  return (
    <div className="song-overview">
      <SongForm />
      <SongList />
      <SongActions />
    </div>
  );

}

export default SongOverview;
