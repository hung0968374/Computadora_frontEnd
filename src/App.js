import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

/////////////component
import Laptop from "./pages/Laptop";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { ProtectedRoute } from "./component/sharedComponents/ProtectedRoute";

///////////redux
import store from "./redux/store";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import LapItem from "./pages/LapItem";
import AddLaptop from "./pages/AddLaptop";
import ChangeLapInfo from "./pages/ChangeLapInfo";
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
              <ProtectedRoute path="/laptop" exact component={Laptop} />
              <ProtectedRoute
                path="/laptop/item/:id"
                changeLapInfo
                component={LapItem}
              />
              <ProtectedRoute path="/cart" exact component={Cart} />
              <ProtectedRoute
                path="/laptop/addLaptop"
                exact
                component={AddLaptop}
              />
              <ProtectedRoute
                path="/laptop/changeLapInfo/:id"
                exact
                component={ChangeLapInfo}
              />
            </Switch>
          </div>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
