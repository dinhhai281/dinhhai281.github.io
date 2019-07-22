import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { HomePage, CV } from './pages';

function App() {
  return (
    <>
      <HashRouter>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/cv' component={CV}/>
          <Route component={() => <div>404</div>} />
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
