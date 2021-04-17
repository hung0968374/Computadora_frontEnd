import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Laptop from "./pages/Laptop";
import Blog from "./pages/Blog";
import DetailItem from "./pages/DetailItem";
import store from "./redux/store";
import { Provider } from "react-redux";
import SignIn from "./components/SignIN/SignIn";
import signUP from "./components/SignUP/signUP";
import PWRecover from "./components/PWRecover/PWRecover";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/laptop" exact component={Laptop} />
            <Route path="/" exact component={LandingPage} />
            <Route path="/blog" exact component={Blog} />
            <Route path="/detailItem" exact component={DetailItem} />
            <Route path="/signIn" exact component={SignIn} />
            <Route path="/signUP" exact component={signUP} />
            <Route path="/PWRecover" exact component={PWRecover} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
