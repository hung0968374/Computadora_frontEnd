import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Laptop from "./pages/Laptop";
import DetailItem from "./pages/DetailItem";
import store from "./redux/store";
import { Provider } from "react-redux";
import Blog from "./pages/Blog";
import Pc from "./pages/Pc";
import ActivateAccount from "./pages/ActivateAccount";
import SignIN from "./pages/SignIn";
import SignUP from "./pages/SignUp";
import PWRecover from "./pages/PWRecover";
import CartPage from "./pages/CartPage";
import PersonalUserInfo from "./pages/PersonalUserInfo";
import BoughtItemRecord from "./pages/BoughtItemRecord";
import ActivateRecoveringAccount from "./pages/ActivateRecoveringAccount";
import Accessories from "./pages/Accessories";
import Test from "./pages/Test";
import BlogDetail from "./pages/BlogDetail";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/laptop" exact component={Laptop} />
            <Route path="/" exact component={LandingPage} />
            <Route path="/blog" exact component={Blog} />
            <Route path="/blog/:id" exact component={BlogDetail} />
            <Route path="/item" exact component={DetailItem} />
            <Route path="/PWRecover" exact component={PWRecover} />
            <Route path="/signIn" exact component={SignIN} />
            <Route path="/signUp" exact component={SignUP} />
            <Route path="/pc" exact component={Pc} />
            <Route path="/cart" exact component={CartPage} />
            <Route path="/personalInfo" exact component={PersonalUserInfo} />
            <Route
              path="/boughtItemsRecord"
              exact
              component={BoughtItemRecord}
            />
            <Route path="/accessories" exact component={Accessories} />
            <Route
              path="/activateAccount/:token"
              exact
              component={ActivateAccount}
            />
            <Route
              path="/activateRecoveringPw/:token"
              exact
              component={ActivateRecoveringAccount}
            />
            <Route path="/test" exact component={Test} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
