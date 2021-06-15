import { AppProvider } from "./components/AppContext";
import SongOverview from "./components/SongOverview";

function App() {
  return (
    <AppProvider>
      <div className="App">
        <SongOverview />
      </div>
    </AppProvider>
  );
}

export default App;
