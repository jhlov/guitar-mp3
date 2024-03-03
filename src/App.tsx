import { LoadingLayer } from "components/LoadingLayer";
import { ToastLayer } from "components/ToastLayer";
import { Book } from "pages/Book";
import { Books } from "pages/Books";
import { Chapter } from "pages/Chapter";
import { Route, Switch } from "react-router-dom";
import "./App.scss";

function App() {
  const isMobile = false;

  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Books} />
        <Route path="/:id" exact component={Book} />
        <Route path="/:id/:cid" component={Chapter} />
      </Switch>

      {/* <Route path="/app" component={app} /> */}
      <LoadingLayer />
      <ToastLayer />
    </div>
  );
}

export default App;
