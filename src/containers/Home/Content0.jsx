import React from 'react';
import { Button, Icon } from 'antd';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import muscle from './../../less/muscle.png';
import backgroundImg from './../../less/backgroundImg.png';

class Content extends React.Component {
  render() {
    const props = { ...this.props };
    delete props.isMode;
    return (
      <OverPack
        replay
        playScale={[0.3, 0.1]}
        {...props}
        style={{ backgroundImage: `url(${backgroundImg})`, backgroundSize: 'cover', backgroundPositionX: 'center' }}
      >
        <QueueAnim
          type={['bottom', 'top']}
          delay={200}
          className={`${props.className}-wrapper`}
          key="text"
          id={`${props.id}-wrapper`}
        >
          <span
            className="title"
            key="title"
            id={`${props.id}-title`}
          >
            <img alt="" src={muscle} />
          </span>
          <p
            key="content"
            id={`${props.id}-content`}
          >
            Ｎo Pain, No Gain!
          </p>
          <Button type="ghost" key="button" id={`${props.id}-button`}>
            Learn More
          </Button>
        </QueueAnim>
        <TweenOne
          animation={{ y: '-=20', yoyo: true, repeat: -1, duration: 1000 }}
          className={`${props.className}-icon`}
          key="icon"
        >
          <Icon type="down" />
        </TweenOne>
      </OverPack>
    );
  }
}


Content.defaultProps = {
  className: 'banner0',
};

export default Content;
