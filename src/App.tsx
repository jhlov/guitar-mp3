import { LoadingLayer } from "components/LoadingLayer";
import { ToastLayer } from "components/ToastLayer";
import { Book } from "pages/Book";
import { Books } from "pages/Books";
import { Route, Switch } from "react-router-dom";
import "./App.scss";

function App() {
  const isMobile = false;

  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Books} />
        <Route path="/:id" component={Book} />
      </Switch>

      {/* <Route path="/app" component={app} /> */}
      <LoadingLayer />
      <ToastLayer />
    </div>
  );
}

export default App;
