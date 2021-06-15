import { AppProvider } from "./components/AppContext";
import SongOverview from "./components/SongOverview";

function App() {
  return (
    <AppProvider>
      <main className="App">
        <SongOverview />
      </main>
    </AppProvider>
  );
}

export default App;
