import React from 'react';
import './css/Main.css';
import Main from "./pages";
import Login from "./pages/Login";
import ChoosePlan from './pages/ChoosePlan';

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/login" component={Login} />
      <Route path="/choose-plan" component={ChoosePlan} />
    </Switch>
    </div>
  );
}

export default App;
