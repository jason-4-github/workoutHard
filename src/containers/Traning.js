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
        tabmethodType.push(<h1 key={"methodType" + methodType.englishName}>{`${methodType.title}-${methodType.englishName}`}</h1>);
        _.map(methodType.methods, (methods, methodsKey) => {
          tabmethodType.push(
            <Row key={methodType.englishName + methodsKey}>
              <Col xs={0} sm={6} md={8} lg={8} xl={8}>
                <h2>{methods.title}-{methods.englishName}</h2>
                <img alt="" height={250} width='80%' src={methods.motionImgUrl} />
                <br />圖片來源:{methods.motionImgUrl}
              </Col>
              <Col xs={0} sm={0} md={2} lg={4} xl={4} />
              <Col xs={0} sm={18} md={14} lg={12} xl={12}>
              { methods.url === ''
                ? <div
                  style={{ width:"560px", height:'315px' }}>
                  <h1>Sorry! No Video Support~</h1>
                  <img alt="" width={260} src="http://0rz.tw/EjFwz" />
                  </div>
                : <iframe
                  title={methods+methodsKey}
                  width="560"
                  height="315"
                  src={ methods.url + '?rel=0&amp;showinfo=0' }
                  frameBorder="0"
                  allowFullScreen
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