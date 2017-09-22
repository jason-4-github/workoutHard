import React from 'react';
import enquire from 'enquire.js';

import Content0 from './containers/Home/Content0';
import Content1 from './containers/Home/Content1';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMode: false
    };
    console.log(this.props);
  }

  componentDidMount() {
    // 适配手机屏幕;
    this.enquireScreen((isMode) => {
      this.setState({ isMode });
    });
  }

  enquireScreen = (cb) => {
    /* eslint-disable no-unused-expressions */
    enquire.register('only screen and (min-width: 320px) and (max-width: 767px)', {
      match: () => {
        cb && cb(true);
      },
      unmatch: () => {
        cb && cb();
      },
    });
    /* eslint-enable no-unused-expressions */
  }

  render() {
    const children = [
      <Content0 id="content_0_0" key="content_0_0" isMode={this.state.isMode} />,
      <Content1 id="content_4_0" key="content_4_0" isMode={this.state.isMode} />,
    ];
    console.log(this.props);
    return (
      <div className="templates-wrapper">
        {() => {return this.props.history.push('./training')}}
        {children}
      </div>
    );
  }
}
