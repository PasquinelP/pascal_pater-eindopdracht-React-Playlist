import {useContext} from 'react';
import { AppContext } from './AppContext';

const useApp = () => {

  const { songs, setSongs, sort, setSort } = useContext(AppContext);

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
    // const ascending = a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1;
    // const descending = b.title.toLowerCase() > a.title.toLowerCase() ? 1 : -1;
    if (sort === null || sort === false) {
      const sortedSongs = songsList.sort((a, b) =>
        a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1
      );
      setSort(true);
      setSongs(sortedSongs);
    } else if (sort === true) {
      const sortedSongs = songsList.sort((a, b) =>
        b.title.toLowerCase() > a.title.toLowerCase() ? 1 : -1
      );
      setSort(false);
      setSongs(sortedSongs);
    }
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