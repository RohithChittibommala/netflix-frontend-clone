import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "./main";
import UserAdded from "./Components/useraddedmovies";

const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/usersaved" exact component={UserAdded} />
    </Switch>
  );
};

export default App;
