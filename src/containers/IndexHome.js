import React from 'react';
import Nav from './Home/Nav.jsx';
import Footer from './Home/Footer.jsx';
import { Route, Switch } from 'react-router-dom';

import Home from '../Home.jsx';
import Traning from './Traning';
import Food from './Food';
import QAndA from './QAndA';
import PlayList from './Playlist';

class IndexHome extends React.Component {
  render() {
    console.log(this.props.location.pathname)
    return(
      <div>
        <Nav id="nav_0_0" key="nav_0_0" isMode={false} />
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/training" component={Traning} />
            <Route path="/food" component={Food} />
            <Route path="/qAndA" component={QAndA} />
            <Route path="/playlist" component={PlayList} />
          </Switch>
          { this.props.location.pathname === '/home'
            ? <Footer id="footer_0_0" key="footer_0_0" isMode={false} />
            : ''
          }
          { this.props.location.pathname === '/'
            ? <div>
              <Home /><Footer id="footer_0_0" key="footer_0_0" isMode={false} />
            </div>
            : ''
          }
      </div>
    );
  }
}

export default IndexHome;