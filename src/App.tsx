import classNames from "classnames";
import { LoadingLayer } from "components/LoadingLayer";
import { ToastLayer } from "components/ToastLayer";
import { SampleA } from "pages/SampleA";
import { SampleB } from "pages/SampleB";
import { Link, Redirect, Route } from "react-router-dom";
import "./App.scss";

function App() {
  const isMobile = false;

  return (
    <div className="App">
      <div className={classNames(isMobile ? "mobile-container" : "container")}>
        {/* todo: remove */}
        <div>
          <Link to="/a" className="btn btn-primary me-3">
            A
          </Link>
          <Link to="/b" className="btn btn-primary">
            B
          </Link>
        </div>

        {/* todo */}
        <Route path="/" exact>
          <Redirect to="/app" />
        </Route>
        <Route path="/a" component={SampleA} />
        <Route path="/b" component={SampleB} />
        {/* <Route path="/app" component={app} /> */}
        <LoadingLayer />
        <ToastLayer />
      </div>
    </div>
  );
}

export default App;
