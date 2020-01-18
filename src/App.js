import React, { lazy, Suspense } from "react";
import "./App.css";
import CountriesContainer from "./routes/CountriesContainer";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";

// pages
const Home = lazy(() => import("./routes/Home"));
const Favourites = lazy(() => import("./routes/Favourites"));
const NotFoundPage = lazy(() => import("./routes/NotFoundPage"));

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/data" component={CountriesContainer} />
          <Route path="/favourites" component={Favourites} />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </Suspense>
  );
};

export default App;
