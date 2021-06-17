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

  const sortByTitle = () => {
    const songsList = [...songs];
    const sortedSongs = songsList.sort((a, b) =>
      a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1
    );
    setSongs(sortedSongs);
  };

  return {
    songs,
    setSongs,
    addSong,
    deleteSongList,
    deleteListItem,
    sortByTitle,
  }
  
}

export default useApp;