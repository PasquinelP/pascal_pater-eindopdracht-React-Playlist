import { AppProvider } from "./components/AppContext";
import Nav from "./components/Nav";
import SongOverview from "./components/SongOverview";
import About from "./components/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <AppProvider>
      <Router>
        <Nav />
        <main className="App">
          <Switch>
            <Route path="/" exact component={SongOverview} />
            <Route path="/about" component={About} />
          </Switch>
        </main>
      </Router>
    </AppProvider>
  );
}

export default App;
