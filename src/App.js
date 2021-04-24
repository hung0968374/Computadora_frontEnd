import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Laptop from "./pages/Laptop";
import Blog from "./pages/Blog";
import DetailItem from "./pages/DetailItem";
import store from "./redux/store";
import { Provider } from "react-redux";
import PWRecover from "./components/PWRecover/PWRecover";
import ActivateAccount from "./pages/activateAccount/ActivateAccount";
import SignUp from "./pages/signUp/SignUp";
import SignIn from "./pages/signIn/SignIn";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/laptop" exact component={Laptop} />
            <Route path="/" exact component={LandingPage} />
            <Route path="/blog" exact component={Blog} />
            <Route path="/laptop/:id" exact component={DetailItem} />
            <Route path="/PWRecover" exact component={PWRecover} />
            <Route path="/signIn" exact component={SignIn} />
            <Route path="/signUp" exact component={SignUp} />
            <Route
              path="/activateAccount/:token"
              exact
              component={ActivateAccount}
            />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
