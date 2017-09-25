import React from 'react';
import { Row, Col, Collapse } from 'antd';
import _ from 'lodash';

const Panel = Collapse.Panel;

const collapseText = [{
  'question': '先做有氧還是先重訓呢?',
  'answer': '通常先重訓之後再做有氧。'
},{
  'question': '如何瘦肚子、大腿、手臂 (局部瘦身)?',
  'answer': '無法局部瘦身。只要消耗的熱量大於所攝取的熱量體重就會減輕，至於先瘦哪邊是由基因決定。'
},{
  'question': '如何安訓練肌群?',
  'answer': '一般同個肌群需休息48小時候方可再訓練'
},{
  'question': '該如何安排動作順序?',
  'answer': '從大肌群到小肌群、從多關節動作到單關節動作。'
},{
  'question': '什麼是RM(Repetition Maximum)?',
  'answer': 'RM是最大重複值。舉例：假設今天我做30KG，只能做到9下，第10下做不起來就稱30KG、9RM。'
},{
  'question': '什麼訓練量?',
  'answer': '訓練量就是指 (重量)*(次數)   e.g. 30KG做10下，訓練量就是30*10=100'
},];

class QAndA extends React.Component {

  collapseFunc = (text) => {
    const collapseArrs = [];
    _.map(text, (value, key) => {
      collapseArrs.push(
        <Panel header={value.question} key={key}>
          <p>{value.answer}</p>
        </Panel>
      );
    });
    return (
      <Collapse bordered={false}>
        {collapseArrs}
      </Collapse>
    );
  }

  render() {
    return(
      <Row id="QAndAContainer">
        <Col span={24} className="qAndATitle">
          <h1>訓練 Q and A</h1>
          <br />若有訓練問題歡迎填表單詢問：<a href="https://goo.gl/bb2VwD">https://goo.gl/bb2VwD</a>
        </Col>
        <Col span={4} />
        <Col span={16}>
          {this.collapseFunc(collapseText)}
        </Col>
        <Col span={24} className="qAndAFooter">
          <b>好文分享：<a href="https://www.ptt.cc/bbs/FITNESS/M.1146374261.A.4A6.html">1.轉自PTT Fitness</a></b>
          <br />
          <b>好文分享：<a href="https://www.ptt.cc/bbs/FITNESS/M.1247890900.A.F53.html">2.轉自PTT Fitness</a></b>
        </Col>
        <Col span={4} />
        <Col span={24} className="qAndATitle">
          <h1>飲食 Q and A</h1>
          <br />若有飲食問題歡迎填表單詢問：<a href="https://goo.gl/gtZy9R">https://goo.gl/gtZy9R</a>
        </Col>
        <Col span={24} className="qAndAFooter">
          <b>好文分享：<a href="https://www.youtube.com/watch?v=M4chH0nEvRs">1.甜蜜的滋味，苦澀的真相：糖</a></b>
        </Col>
      </Row>
    );
  }
}

export default QAndA;