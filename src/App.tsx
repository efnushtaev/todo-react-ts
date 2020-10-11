import React from 'react';
import { Navbar } from './components/navbar/Navbar';
import { AboutPage } from './pages/AboutPage';
import { TodoPage } from './pages/TodosPage';
import { BrowserRouter, Switch, Route, HashRouter} from 'react-router-dom';

const App: React.FC = () => {

  return <HashRouter>
    <Navbar />
    <div className="container">
      <Switch>
        <Route component={TodoPage} path='/' exact />
        <Route component={AboutPage} path='/about' exact />
      </Switch>
    </div>
  </HashRouter>
}

export default App;
