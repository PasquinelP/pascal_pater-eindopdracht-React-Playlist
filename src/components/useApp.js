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
    // renumber the id's to avoid duplicates of same id when adding new item after an item has been removed
    newSongList.map((song, index) => (song.id = index + 1));
    setSongs(newSongList);
  }

  const sortList = (event) => {
    const sortBy = event.target.innerText.toLowerCase();
    if (sort === null || sort === "desc") {
      songs.sort((a, b) => a[sortBy].toLowerCase() > b[sortBy].toLowerCase() ? 1 : -1);
      setSort("asc");
    } else if (sort === "asc") {
      songs.sort((a, b) => b[sortBy].toLowerCase() > a[sortBy].toLowerCase() ? 1 : -1);
      setSort("desc");
    }
  };

  const sortRating = () => {
    if (sort === null || sort === "desc") {
      songs.sort((a, b) => a.rating - b.rating);
      setSort("asc");
    } else if (sort === "asc") {
      songs.sort((a, b) => b.rating - a.rating);
      setSort("desc");
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