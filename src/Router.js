import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import Kocca from "./routes/kocca";
import Megabox from "./routes/megabox";
import Soomgo from "./routes/soomgo";
import Todo_list from "./routes/todo_list";

function Router (){
  return <BrowserRouter>
    <Switch>
      <Route path="/kocca" component={Kocca}>
      </Route>
      <Route path="/megabox" component={Megabox}>
      </Route>
      <Route path="/soomgo" component={Soomgo}>
      </Route>
      <Route path="/todo_list" component={Todo_list}>
      </Route>
      <Route path="/" component={Home}>
      </Route>
    </Switch>
  </BrowserRouter>
}
export default Router;