import React from 'react';
import { Card, Row, Col, Icon, Table } from 'antd';

const dataSource = [{
  key: '1',
  nutrient: '',
  gram: "",
  example: `小豆豆的體重為70公斤、TDEE為2500大卡`
},{
  key: '2',
  nutrient: '蛋白質',
  gram: "體重(公斤)*2.3~體重(公斤)*2.8",
  example: `70 * 2.3 = 161 ===> 蛋白質攝取161公克`
}, {
  key: '3',
  nutrient: '脂肪',
  gram: "TDEE的15%~25%",
  example: `2500 * 20% = 500大卡，500 / 9 = 56 ===> 脂肪攝取56公克`
}, {
  key: '4',
  nutrient: '碳水化合物',
  gram: "剩下的熱量由碳水化合物補",
  example: `2500 * 80% - ( 161 * 4 + 500 ) = 856，856 / 4 = 214 ===> 碳水化合物攝取214公克`
}];

const columns = [{
  title: '營養素',
  dataIndex: 'nutrient',
  key: 'nutrient',
}, {
  title: '所需公克數',
  dataIndex: 'gram',
  key: 'gram',
}, {
  title: '範例',
  dataIndex: 'example',
  key: 'example',
}];

class Food extends React.Component {
  render() {
    return(
      <Row gutter={16} className="foodContainer">
        <Col span={24} className="titleCol"><h1>三大營養素</h1></Col>
        <Col span={8}>
          <Card>
            <div >
              <h2 id="typeTitle1"><Icon type="flag" /> 碳水化合物（醣類）</h2>
              <h3>提供熱量：4大卡/每公克</h3>
              <h3>功能：日常生活能量主要來源</h3>
              <h3>主要來源：五穀根莖類</h3>
            </div>
          </Card>
          <img alt="" width="100%" src="https://goo.gl/r86Aea" />
          <br /><b>圖片來源：https://goo.gl/r86Aea</b>
        </Col>
        <Col span={8}>
          <Card>
            <div >
              <h2 id="typeTitle2"><Icon type="flag" /> 蛋白質</h2>
              <h3>提供熱量：4大卡/每公克</h3>
              <h3>功能：身體生長、細胞組織修復(肌肉生長)</h3>
              <h3>主要來源：肉類、奶類、豆類等等</h3>
            </div>
          </Card>
          <img alt="" width="100%" src="https://goo.gl/HBjoun" />
          <br /><b>圖片來源：https://goo.gl/HBjoun</b>
        </Col>
        <Col span={8}>
          <Card>
            <div >
              <h2 id="typeTitle3"><Icon type="flag" /> 脂肪</h2>
              <h3>提供熱量：9大卡/每公克</h3>
              <h3>功能：調解生理機能</h3>
              <h3>主要來源：豬油、奶油、堅果等等</h3>
            </div>
          </Card>
          <img alt="" width="100%" src="https://goo.gl/gMCzVh" />
          <br /><b>圖片來源: https://goo.gl/gMCzVh</b>
        </Col>
        <Col span={24} className="titleCol"><h1>{"BMR (Basel Metabolic Rate) & TDEE (Total Daily Energy Expenditure)"}</h1></Col>
        <Col span={7} />
        <Col span={10} className="introduction">
          <Col span={24}>BMR : <b>基礎代謝率</b><Icon type="arrow-right" />維持生命所需消耗的最低能量</Col>
          <Col span={24}>TDEE : <b>每日總消耗熱量</b><Icon type="arrow-right" />BMR + 生活所需能量</Col>
          <Col span={24}><Icon type="like-o" />
            BMR及TDEE計算機 :
            <a
              href="https://ifitness.tw/bmr-and-tdee/"
              target="_blank"
            > https://ifitness.tw/bmr-and-tdee/
            </a>
          </Col>
        </Col>
        <Col span={7} />
        <Col span={24} style={{ fontSize: '20px' }}>
          結語 ：簡單來說，只要你吸收的熱量
          <b className="markWords">大於</b>
          TDEE體重就會
          <b className="markWords">上升</b>,
          <b className="markWords">反之</b>
          則
          <b className="markWords">下降</b>。
          而如何分配營養素請看下述。
        </Col>
        <Col span={24} className="titleCol"><h1>如何分配營養素(減脂)</h1></Col>
        <Col span={3} />
        <Col span={18}>
          <Table columns={columns} dataSource={dataSource} pagination={false} size="small" />
        </Col>
        <Col span={3} />
      </Row>
    );
  }
}

export default Food;