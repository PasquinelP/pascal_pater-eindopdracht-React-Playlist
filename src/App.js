import { AppProvider } from "./components/AppContext";
import Header from "./components/Header";
import SongOverview from "./components/SongOverview";
import About from "./components/About";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <AppProvider>
      <Router>
        <div className="app">
          <Header />
          <main>
            <Switch>
              <Route path="/" exact component={SongOverview} />
              <Route path="/about" component={About} />
            </Switch>
          </main>
          <Footer />
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
