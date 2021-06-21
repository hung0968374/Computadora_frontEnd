import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/////////////component
import Laptop from "./pages/Laptop";
import Login from "./pages/Login";

///////////redux
import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/laptop" exact component={Laptop} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
