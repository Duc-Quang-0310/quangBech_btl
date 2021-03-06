import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Laptop from "./pages/Laptop";
import Blog from "./pages/Blog";
import DetailItem from "./pages/DetailItem";
import store from "./redux/store";
import { Provider } from "react-redux";
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
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
