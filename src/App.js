import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './components/Header';
import MyProfile from './components/MyProfile';
import logo from './assets/planet.svg';
import Rockets from './components/rockets/Rockets';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './redux/ConfigureStore';
import Missions from './components/missions/Missions';

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
  <Provider store={store}>
    <Router>
      <Header routes={routes} logo={logo} />
      <Switch>
        {routes.map(({ path, component }) => (
          <Route path={path} exact key={path}>{component}</Route>
        ))}
      </Switch>
    </Router>
  </Provider>
);

export default App;
