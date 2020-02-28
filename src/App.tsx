import React from 'react';
import {Suspense, lazy} from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

// import components

import Auth from './Components/Auth/Auth'
import Answers from './Components/Answers/Answers'
import GoodIdeas from './Components/GoodIdeas/GoodIdeas'
import Questions from './Components/Questions/Questions'


export class App extends React.Component<{}, {}> {
  render() {
    return (
      <Router>
        <Suspense fallback={<div>Загрузка...</div>}/>
        <Switch>
          <Route path="/auth" component={Auth}/>
          <Route path="/answers" component={Answers}/>
          <Route path="/goodideas" component={GoodIdeas}/>
          <Route exact path="/" component={Questions}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
