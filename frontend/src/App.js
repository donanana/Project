import './App.css';
import { Route , Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Doraemon from './pages/Doraemon';
import Introduce from './pages/Introduce';
import People from './pages/People';
import PeopleCategory from './pages/PeopleCategory';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/doraemon' component={Doraemon}/>
        <Route exact path='/doraemon/introduce' component={Introduce}/>
        <Route exact path='/doraemon/people' component={People}/>
        <Route exact path='/doraemon/people/:category' component={PeopleCategory}/>
      </Switch>
    </div>
  );
}

export default App;
