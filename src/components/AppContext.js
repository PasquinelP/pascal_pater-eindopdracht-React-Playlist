import React, {useState, createContext} from 'react';

export const AppContext = createContext();

export const AppProvider = (props) => {

  const [songs, setSongs] = useState([
    {
      id: 1,
      title: "All Shook Up",
      artist: "Elvis Presley",
      genre: "Rock 'n Roll",
      rating: 5,
    },
    {
      id: 2,
      title: "The thrill is gone",
      artist: "B.B. King",
      genre: "Blues",
      rating: 4,
    },
  ]);

  const [sort, setSort] = useState(null);

  return (
    <AppContext.Provider value={{songs, setSongs, sort, setSort}}>
      {props.children}
    </AppContext.Provider>
  );

}

