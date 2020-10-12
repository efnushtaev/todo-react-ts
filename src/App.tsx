import React from 'react';
import { Navbar } from './components/navbar/Navbar';
import { AboutPage } from './pages/AboutPage';
import { TodoPage } from './pages/TodosPage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App: React.FC = () => {

  return <BrowserRouter>
    <Navbar />
    <div className="container">
      <Switch>
        <Route component={TodoPage} path='/' exact />
        <Route component={AboutPage} path='/about' exact />
      </Switch>
    </div>
  </BrowserRouter>
}

export default App;
