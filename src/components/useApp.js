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

  const sortList = (event) => {
    const sortBy = event.target.innerText.toLowerCase();
    const songsList = [...songs];
    if (sort === null || sort === false) {
      const sortedSongs = songsList.sort((a, b) =>
        a[sortBy].toLowerCase() > b[sortBy].toLowerCase() ? 1 : -1
      );
      setSort(true);
      setSongs(sortedSongs);
    } else if (sort === true) {
      const sortedSongs = songsList.sort((a, b) =>
        b[sortBy].toLowerCase() > a[sortBy].toLowerCase() ? 1 : -1
      );
      setSort(false);
      setSongs(sortedSongs);
    }
  };

  const sortRating = () => {
    const songsList = [...songs];
    if (sort === null || sort === false) {
      const sortedSongs = songsList.sort((a, b) => a.rating - b.rating);
      setSort(true);
      setSongs(sortedSongs);
    } else if (sort === true) {
      const sortedSongs = songsList.sort((a, b) => b.rating - a.rating);
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
    sortList,
    sortRating,
  }
  
}

export default useApp;