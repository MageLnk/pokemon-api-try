import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//
import Home from "../Views/Home";
import FourOFour from "../Views/404";
import PokeDetail from "../Views/PokeDetail";
//
import ScrollToTop from "../components/useScrollToTop";

const Routes = () => {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/pokemon/:id">
          <PokeDetail />
        </Route>
        <Route>
          <FourOFour />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
