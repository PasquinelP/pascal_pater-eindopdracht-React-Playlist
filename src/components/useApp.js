import {useContext} from 'react';
import { AppContext } from './AppContext';

const useApp = () => {

  const { songs, setSongs } = useContext(AppContext);

  const addSong = (event, newSong) => {
    event.preventDefault();
    const newItem = {
      id: songs.length + 1,
      title: newSong.newTitle,
      artist: newSong.newArtist,
      genre: newSong.newGenre,
      rating: newSong.newRating,
    };
    setSongs((prevSongs) => [...prevSongs, newItem]);
  };

  const deleteSongList = () => {
    setSongs([]);
  };

  const deleteListItem = (id) => {
    const newSongList = songs.filter((song) => song.id !== id);
    setSongs(newSongList);
  }

  return {
    songs,
    setSongs,
    addSong,
    deleteSongList,
    deleteListItem,
  };

}

export default useApp;