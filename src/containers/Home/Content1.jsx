import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import warning from './../../less/warning.png';

class Content extends React.Component {

  static defaultProps = {
    className: 'content2',
  };

  getDelay = e => e % 3 * 100 + Math.floor(e / 3) * 100 + 300;

  render() {
    const props = { ...this.props };
    console.log(this.props);
    delete props.isMode;
    const oneAnim = { y: '+=30', opacity: 0, type: 'from', ease: 'easeOutQuad' };
    const blockArray = [
      { icon: 'https://cdn1.iconfinder.com/data/icons/fitness-7/500/strong-512.png', title: '簡介', content: '重量訓練 ，不分性別只有重量上的差別！每個動作因為每個人身體的構造或比例不同會有些微差異，但大方向上都是一樣的！' },
      { icon: 'https://image.flaticon.com/icons/png/512/46/46770.png', title: '瓜語錄', content: '目前主要都是入門資訊，若有錯誤請大家不吝賜教, 若需要安排菜單請私訊, 如果想要斗內我也可以私訊(小聲' },
    ];
    const children = blockArray.map((item, i) => {
      const id = `block${i}`;
      const delay = this.getDelay(i);
      const liAnim = { opacity: 0, type: 'from', ease: 'easeOutQuad', delay };
      const childrenAnim = { ...liAnim, x: '+=10', delay: delay + 100,};
      return (<TweenOne
        component="li"
        animation={liAnim}
        key={i}
        id={`${props.id}-${id}`}
      >
        <TweenOne
          animation={{ x: '-=10', opacity: 0, type: 'from', ease: 'easeOutQuad' }}
          className="img"
          key="img"
        >
          <img src={item.icon} alt="" width="100%" />
        </TweenOne>
        <div className="text">
          <TweenOne key="h1" animation={childrenAnim} component="h1">
            {item.title}
          </TweenOne>
          <TweenOne key="p" animation={{ ...childrenAnim, delay: delay + 200 }} component="p">
            {item.content}
          </TweenOne>
        </div>
      </TweenOne>);
    });
    return (
      <div {...props} className={`content-template-wrapper ${props.className}-wrapper`}>
        <OverPack
          className={`content-template ${props.className}`}
          location={props.id}
        >
          <TweenOne
            key="h1"
            animation={oneAnim}
            component="h1"
            id={`${props.id}-title`}
            reverseDelay={100}
          >
             Ivan's training class
          </TweenOne>
          <TweenOne
            key="p"
            animation={{ ...oneAnim, delay: 100 }}
            component="p"
            id={`${props.id}-titleContent`}
          >
            Let's Make Things Better
          </TweenOne>
          <QueueAnim
            key="ul"
            type="bottom"
            className={`${props.className}-contentWrapper`}
            id={`${props.id}-contentWrapper`}
          >
            <ul key="ul">
              {children}
            </ul>
            <div style={{ paddingLeft: '10px', paddingTop: '20px', textAlign: 'center'}}>
              <img alt="" src={warning} width="7%" />
              <h2>此網站含有大量youtube影片，請斟酌使用</h2>
              <h3>P.S. 最佳觀賞尺寸為全螢幕 1440 x 732 px</h3>
            </div>
          </QueueAnim>
        </OverPack>
      </div>
    );
  }
}


export default Content;
