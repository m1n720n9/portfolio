import {BrowserRouter, Route, Switch} from "react-router-dom";
import {TransitionGroup, CSSTransition} from "react-transition-group";
import Home from "./components/Home";
import Kocca from "./routes/kocca";
import Megabox from "./routes/megabox";
import Soomgo from "./routes/soomgo";
import Todo_list from "./routes/todo_list";
import "./Router.scss";
import { useRef } from "react";


function Router (){
  const transitionGroupRef = useRef();
  const pageRef = useRef();
  transitionGroupRef.classNames = "transition-group";
  pageRef.className = "page";
  return(
  <BrowserRouter>
    <Route render={({ location }) => {
      return (
        <TransitionGroup ref={transitionGroupRef} className="transition-group">
          <CSSTransition ref={pageRef} key={location.pathname} timeout={1000} classNames="page">
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
          </CSSTransition>
        </TransitionGroup>
      );
    }} />
  </BrowserRouter>)
}
export default Router;