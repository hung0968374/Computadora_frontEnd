import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Laptop from "./pages/Laptop";
import DetailItem from "./pages/DetailItem";
import ConfirmPage from "./pages/ConfirmPage";
import PC from "./pages/PC";
import loading from "./testLoading/loading";
import NewLandingPage from "./pages/NewLandingPage";
import UserInfo from "./pages/UserInfo";
import ActivePage from "./pages/ActivePage";
import Cart from "./pages/Cart";
import "../src/components/LangdingPage/App.module.css";
import Search from "./pages/Search";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import NewSignIn from "./pages/NewSignIn";
import NewSignUp from "./pages/NewSignUp";
import NewPWRecover from "./pages/NewPWRecover";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/PWRecover" exact component={NewPWRecover} />
          <Route path="/laptop" exact component={Laptop} />
          <Route path="/landingPage" exact component={NewLandingPage} />
          <Route path="/laptop/:id" exact component={DetailItem} />
          <Route path="/signIn" exact component={NewSignIn} />
          <Route path="/signUP" exact component={NewSignUp} />
          <Route path="/Blog/:id" exact component={BlogDetails} />
          <Route
            path="/confirmPasswordRecover/:token"
            exact
            component={ConfirmPage}
          />
          <Route path="/activateAccount/:token" exact component={ActivePage} />
          <Route path="/userInformation" exact component={UserInfo} />
          <Route path="/" exact component={PC} />
          <Route path="/newld" exact component={NewLandingPage} />
          <Route path="/testLoading" exact component={loading} />
          <Route path="/Blog" exact component={Blog} />
          <Route path="/Cart" exact component={Cart} />
          <Route path="/Search" exact component={Search} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
