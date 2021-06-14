import { AppProvider } from "./components/AppContext";
import SongOverview from "./components/SongOverview";

function App() {
  return (
    <AppProvider>
      <div className="App">
        <p>Hallo React Playlist from App</p>
        <SongOverview />
      </div>
    </AppProvider>
  );
}

export default App;
