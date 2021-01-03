import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.page";
import Movie from "./pages/single-movie/single-movie.page";

const App = () => {
  return (
    <div className="max-w-6xl px-6 py-12 mx-auto xl:px-0">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/movie/:id" component={Movie} />
      </Switch>
    </div>
  );
};

export default App;
