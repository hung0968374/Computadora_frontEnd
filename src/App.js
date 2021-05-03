import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Laptop from "./pages/Laptop";
import Blog from "./pages/Blog";
import DetailItem from "./pages/DetailItem";
import store from "./redux/store";
import { Provider } from "react-redux";
import SignUP from "./components/SignUP/SignUP";
import PWRecover from "./components/PWRecover/PWRecover";
import SignIN from "./components/SignIN/SignIN";
import ConfirmPage from "./components/confirmAndActivateAcount/ConfirmPage";
import ActivePage from "./components/confirmAndActivateAcount/ActivePage";
import UserInfo from "./components/UserInfo/UserInfo";

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
            <Route path="/signIn" exact component={SignIN} />
            <Route path="/signUP" exact component={SignUP} />
            <Route path="/PWRecover" exact component={PWRecover} />
            <Route
              path="/confirmPasswordRecover/:token"
              exact
              component={ConfirmPage}
            />
            <Route
              path="/activateAccount/:token"
              exact
              component={ActivePage}
            />
            <Route path="/userInformation" exact component={UserInfo} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
