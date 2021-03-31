import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom';
import './App.scss';
import Masthead from './components/masthead/masthead';
import Sidemenu from './components/sidemenu/sidemenu';
import Intro from './components/intro/intro';
import Skills from './components/skills/skills';
import Profile from './components/profile/profile';
import Contact from './components/contact/contact';

function App() {
  const getRouteColorFromLocation = location => ({
    intro: '#2e4066',
    skills: '#f05000',
    profile: '#2e4066',
    contact: '#9ca2ad'
  })[location];

  return (
    <Router>
    <div className="page-wrap">
      <Route render={({ location }) => (
        <div>
          <Redirect to="/intro" />            
          <Masthead activeroute={location.pathname.substr(1)} />
          <Sidemenu activeroute={location.pathname.substr(1)} routecolors={getRouteColorFromLocation}>
            <Route path="/intro" component={Intro} />
            <Route path="/skills" component={Skills} />
            <Route path="/profile" component={Profile} />
            <Route path="/contact" component={Contact} />
          </Sidemenu>
        </div>
        )}/>
    </div>
  </Router>
  );
}

export default App;
