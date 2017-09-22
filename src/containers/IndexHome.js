import React from 'react';
import Nav from './Home/Nav.jsx';
import Footer from './Home/Footer.jsx';
import { Route, Switch } from 'react-router-dom';

import Home from '../Home.jsx';
import Traning from './Traning';

class IndexHome extends React.Component {
  render() {
    console.log(<Nav />)
    return(
      <div>
        <Nav id="nav_0_0" key="nav_0_0" isMode={false} />
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/training" component={Traning} />
          </Switch>
        <Footer id="footer_0_0" key="footer_0_0" isMode={false} />
      </div>
    );
  }
}

export default IndexHome;