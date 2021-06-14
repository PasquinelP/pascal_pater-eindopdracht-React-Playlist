import React from 'react';
import SongForm from './SongForm';
import SongList from './SongList';

const SongOverview = () => {


  return (
    <div>
      <h1>Song overview</h1>
      <SongForm />
      <SongList />
    </div>
  );

}

export default SongOverview;
