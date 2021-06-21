import {useContext} from 'react';
import { AppContext } from './AppContext';

const useApp = () => {
  
  // make sure to get state from context
  const { songs, setSongs, sort, setSort, filteredGenre, setFilteredGenre, filteredRating, setFilteredRating } = useContext(AppContext);

  // add new song to list when form is filled and submitted
  const addSong = (event, newSong) => {
    event.preventDefault();
    const newItem = {
      id: songs.length + 1,
      title: newSong.newTitle,
      artist: newSong.newArtist,
      genre: newSong.newGenre,
      rating: parseInt(newSong.newRating),
    };
    setSongs((prevSongs) => [...prevSongs, newItem]);
  };

  // delete complete song list
  const deleteSongList = () => {
    setSongs([]);
  };

  // delete only one song item from list
  const deleteListItem = (id) => {
    const newSongList = songs.filter((song) => song.id !== id);
    // renumber the id's to avoid duplicates of same id when adding new item after an item has been removed
    newSongList.map((song, index) => (song.id = index + 1));
    setSongs(newSongList);
  };

  // sort list for text columns
  // check which column is clicked and get inner text as value
  // check if list is already sorted in asc or desc
  // sort list accordingly and update asc or desc value
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

  // sort list for rating (number) column
  const sortRating = () => {
    if (sort === null || sort === "desc") {
      songs.sort((a, b) => a.rating - b.rating);
      setSort("asc");
    } else if (sort === "asc") {
      songs.sort((a, b) => b.rating - a.rating);
      setSort("desc");
    }
  };

  // check which genre has been filtered and store this in state
  const handleGenreChange = (event) => {
    const { value } = event.target;
    setFilteredGenre(value);
  };

  // check which rating has been filtered and store this in state
  const handleRatingChange = (event) => {
    const { value } = event.target;
    setFilteredRating(value);
  };

  // make sure to return all to make available in other components
  return {
    songs,
    setSongs,
    addSong,
    deleteSongList,
    deleteListItem,
    sortList,
    sortRating,
    handleGenreChange,
    handleRatingChange,
    filteredGenre,
    setFilteredGenre,
    filteredRating,
    setFilteredRating,
  };
}

export default useApp;