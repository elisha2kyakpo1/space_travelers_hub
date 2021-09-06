import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Missions from './components/missions/Missions';
import MyProfile from './components/MyProfile';
import Rockets from './components/rockets/Rockets';

const routes = [
  {
    path: '/',
    name: 'Rockets',
    component: <Rockets />,
  },
  {
    path: '/missions',
    name: 'Missions',
    component: <Missions />,
  },
  {
    path: '/my-profile',
    name: 'My Profile',
    component: <MyProfile />,
  },
];

const App = () => (
  <Router>
    <Header routes={routes} />
    <Switch>
      {routes.map(({ path, component }) => (
        <Route path={path} exact key={path}>{component}</Route>
      ))}
    </Switch>
  </Router>
);

export default App;
