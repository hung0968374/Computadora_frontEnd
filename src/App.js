import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

/////////////component
import Laptop from "./pages/Laptop";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

///////////redux
import store from "./redux/store";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import LapItem from "./pages/LapItem";
const theme = {
  white: "#ffffff",
  whiteSmoke: "#e0e0e0",
  green: "#06c1d4",
  grey: "#b8bdc4",
  red: "red",
};

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <div className="App">
            <Switch>
              <Route path="/" exact component={Login} />
              <Route path="/laptop" exact component={Laptop} />
              <Route path="/laptop/:id" exact component={LapItem} />
              <Route path="/cart" exact component={Cart} />
            </Switch>
          </div>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
