import {BrowserRouter, Route, Switch} from "react-router-dom";
import {TransitionGroup, CSSTransition} from "react-transition-group";
import Home from "./routes/Home";
import Kocca from "./routes/kocca";
import Megabox from "./routes/megabox";
import Soomgo from "./routes/soomgo";
import Todo_list from "./routes/todo_list";
import CoinTracker from "./routes/coin_tracker"
import Portfolio from "./routes/portfolio";
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
              <Route path="/kocca" component={Kocca} />
              <Route path="/megabox" component={Megabox} />
              <Route path="/soomgo" component={Soomgo} />
              <Route path="/todo_list" component={Todo_list} />
              <Route path="/coin_tracker" component={CoinTracker} />
              <Route path="/portfolio1" component={Portfolio} />
              <Route path="/" component={Home} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      );
    }} />
  </BrowserRouter>)
}
export default Router;