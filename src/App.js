import "./App.css";
import Auth from "./components/Auth";
import Header from "./components/Header";
import Slogan from "./components/Slogan";
import Posts from "./components/Posts";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="slo_auth_post">
        <div className="slo_auth">
          <Slogan />
          <Auth />
        </div>
        <div className="posts">
          <Posts />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
