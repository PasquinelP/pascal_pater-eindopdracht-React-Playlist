import React, {useState, createContext} from 'react';

export const AppContext = createContext();

export const AppProvider = (props) => {

  // holds the songs added in the playlist en provides some starting content
  const [songs, setSongs] = useState([
    {
      id: 1,
      title: "Not an addict",
      artist: "K's Choice",
      genre: "Rock",
      rating: 3,
    },
    {
      id: 2,
      title: "All Shook Up",
      artist: "Elvis Presley",
      genre: "Rock and Roll",
      rating: 5,
    },
    {
      id: 3,
      title: "The thrill is gone",
      artist: "B.B. King",
      genre: "Blues",
      rating: 4,
    },
    {
      id: 4,
      title: "Every Breath You Take",
      artist: "The Police",
      genre: "Pop",
      rating: 3,
    },
    {
      id: 5,
      title: "Baby Love",
      artist: "Mother's Finest",
      genre: "Rock",
      rating: 3,
    },
    {
      id: 6,
      title: "Jackson",
      artist: "Johnny Cash",
      genre: "Country",
      rating: 4,
    },
  ]);

  // sets if sorting is ascending or descending
  const [sort, setSort] = useState(null);

  return (
    <AppContext.Provider value={{songs, setSongs, sort, setSort}}>
      {props.children}
    </AppContext.Provider>
  );

}

