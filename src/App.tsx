import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { LoadingLayer } from "components/LoadingLayer";
import { ToastLayer } from "components/ToastLayer";
import { Book } from "pages/Book";
import { Books } from "pages/Books";
import { Chapter } from "pages/Chapter";
import { Route, Switch } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <div className="App min-h-screen flex flex-col bg-studio-bg text-slate-100 selection:bg-amber-500 selection:text-slate-950">
      <Header />

      <main className="flex-1 w-full">
        <Switch>
          <Route path="/" exact component={Books} />
          <Route path="/:id" exact component={Book} />
          <Route path="/:id/:cid" component={Chapter} />
        </Switch>
      </main>

      <Footer />
      <LoadingLayer />
      <ToastLayer />
    </div>
  );
}

export default App;
