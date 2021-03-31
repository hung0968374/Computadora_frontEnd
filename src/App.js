import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Laptop from "./pages/Laptop";
import Blog from "./pages/Blog";
import DetailItem from "./pages/DetailItem";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/laptop" exact component={Laptop} />
          <Route path="/" exact component={LandingPage} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/detailItem" exact component={DetailItem} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
