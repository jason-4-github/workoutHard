import React from 'react';
import PropTypes from 'prop-types';
import TweenOne from 'rc-tween-one';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const Item = Menu.Item;

class Header extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      phoneOpen: false,
    };
  }

  phoneClick = () => {
    this.setState({
      phoneOpen: !this.state.phoneOpen,
    });
  }

  render() {
    const props = { ...this.props };
    const isMode = props.isMode;
    delete props.isMode;
    const navData = { menu1: '訓練', menu2: '飲食', menu3: 'FAQ', menu4: '頻道推薦' };;
    const linkDirection = ['/training', '/food', '/qAndA', 'playList']
    const navChildren = Object.keys(navData)
      .map((key, i) => (<Item key={i}><Link to={linkDirection[i]} className="headerLink">{navData[key]}</Link></Item>));
    return (<TweenOne
      component="header"
      animation={{ opacity: 0, type: 'from' }}
      {...props}
    >
      <TweenOne
        className={`${this.props.className}-logo`}
        animation={{ x: -30, type: 'from', ease: 'easeOutQuad' }}
        id={`${this.props.id}-logo`}
      >
        <h3><Link to="/home" style={{ color: '#ff8585', textDecoration: 'none' }}>健身小教室</Link></h3>
      </TweenOne>
      {isMode
        ? (<div
          className={`${this.props.className}-phone-nav${this.state.phoneOpen ? ' open' : ''}`}
          id={`${this.props.id}-menu`}
        >
          <div
            className={`${this.props.className}-phone-nav-bar`}
            onClick={() => {
              this.phoneClick();
            }}
          >
            <em />
            <em />
            <em />
          </div>
          <div
            className={`${this.props.className}-phone-nav-text`}
          >
            <Menu
              defaultSelectedKeys={['0']}
              mode="inline"
              theme="dark"
              onClick={(item, key) => {console.log(item)}}
            >
              {navChildren}
            </Menu>
         </div>
        </div>)
        : (<TweenOne
          className={`${this.props.className}-nav`}
          animation={{ x: 30, type: 'from', ease: 'easeOutQuad' }}
        >
        <Menu
          mode="horizontal"
          id={`${this.props.id}-menu`}
          style={{ listStyle: 'none', cursor: 'pointer' }}
        >
          {navChildren}
        </Menu>
      </TweenOne>)}
    </TweenOne>);
  }
}

Header.propTypes = {
  className: PropTypes.string,
  dataSource: PropTypes.object,
  id: PropTypes.string,
};

Header.defaultProps = {
  className: 'header0',
};

export default Header;
