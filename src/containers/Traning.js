import React from 'react';
import { Tabs, Icon, Col, Row } from 'antd';
import _ from 'lodash';

import FitTypeTitle from './../constant/tableColumn';

const TabPane = Tabs.TabPane;

class Traning extends React.Component {
  tabsConstruct = () => {
    const tabTitle = [];

    _.map(FitTypeTitle, (data, key) => {
      const tabmethodType = [];
      console.log(data, key);
      _.map(data.children, (methodType) => {
        tabmethodType.push(<h2 key={"methodType" + methodType.englishName}>{`${methodType.title}-${methodType.englishName}`}</h2>);
        _.map(methodType.methods, (methods, methodsKey) => {
          console.log(methods.url + '?rel=0&amp;showinfo=0')
          tabmethodType.push(
            <Row key={methodType.englishName + methodsKey}>
              <Col span={8}>
                {`${methods.title}-${methods.englishName}`}
              </Col>
              <Col span={16}>
              { methods.url === ''
                ? <div
                  style={{ width:"560", height:'315' }}>
                  <h1>Sorry! No Video Support~</h1>
                  <img alt width={260} src="http://0rz.tw/EjFwz" />
                  </div>
                : <iframe
                  width="560"
                  height="315"
                  src={ methods.url + '?rel=0&amp;showinfo=0' }
                  frameborder="0"
                  allowfullscreen
                />
              }
              </Col>
            </Row>
          );
        });
      });
      tabTitle.push(
        <TabPane tab={<span><Icon type="trophy" />{`${data.title}-${data.englishName}`}</span>} key={'methodType' + key}>
          { tabmethodType }
        </TabPane>
      );
    });

    return (
      <Tabs defaultActiveKey="methodType0">
        { tabTitle }
      </Tabs>
    );
  }
  render() {
    return (
      <Row style={{ height: '70vh', paddingTop: '20px' }}>
        <Col span={2} />
        <Col span={20}>
          {this.tabsConstruct()}
        </Col>
        <Col span={2} />
      </Row>
    );
  }
}

export default Traning;