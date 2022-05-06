import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import Kocca from "./routes/kocca";
import Megabox from "./routes/megabox";
import Soomgo from "./routes/soomgo";

function Router (){
  return <BrowserRouter>
    <Switch>
      <Route path="/kocca" component={Kocca}>
      </Route>
      <Route path="/megabox" component={Megabox}>
      </Route>
      <Route path="/soomgo" component={Soomgo}>
      </Route>
      <Route path="/" component={Home}>
      </Route>
    </Switch>
  </BrowserRouter>
}
export default Router;