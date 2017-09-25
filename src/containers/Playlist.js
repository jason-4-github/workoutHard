import React from 'react';
import { Row, Col, Icon, Table } from 'antd';

const formData = {
  'start': [
    {key: 1, name: '健人蓋伊', url: 'https://www.youtube.com/channel/UCpGGLFkG4heKm6hnJYn5HxA/videos', note: '',},
    {key: 2, name: '兆佑 ChaoYo Fitness', url: 'https://www.youtube.com/channel/UCOPRIQpsikpMDmI_VOwnbmw/videos', note: '',}
  ],
  'startAdvanced': [
    {key: 1, name: '江凱傑', url: 'https://www.youtube.com/channel/UCgTlmgXI8qMGSNvdyzQUvOw/videos', note: '主要為健力三項',},
    {key: 2, name: 'AkroFitness', url: 'https://www.youtube.com/user/AkroFitness/videos', note: 'Kevin',},
    {key: 3, name: '黃阿文', url: 'https://www.youtube.com/channel/UCPLWzCF8azY4xccgbqU4umg/videos', note: '健美前輩',},
    {key: 4, name: 'KosmoFit', url: 'https://www.youtube.com/channel/UCnTLMtOK5P0OHv4uxUK2m3g/videos', note: '',}
  ],
  'advanced': [
    {key: 1, name: 'ATHLEAN-X™', url: 'https://www.youtube.com/user/JDCav24/videos', note: 'Jeff',},
    {key: 2, name: 'Alan Thrall', url: 'https://www.youtube.com/user/athrall7/videos', note: '鬍子哥',},
    {key: 3, name: 'OmarIsuf', url: 'https://www.youtube.com/user/OmarIsuf/videos', note: '馬尾哥',}
  ],
  'woman': [
    {key: 1, name: 'Whitney Simmons', url: 'https://www.youtube.com/channel/UCEQi1ZNJiw3YMRwni0OLsTQ/videos', note: '女神',},
  ],
  'other': [
    {key: 1, name: 'C. Tao', url: 'https://www.youtube.com/user/RockieBurnz/videos', note: '適合入門、進階 (有其他生活vlog)',},
    {key: 2, name: 'Ashlee Xiu', url: 'https://www.youtube.com/channel/UCUegeLyR331WiVynFDoEQxA/videos', note: '適合女性 (有其他生活vlog)',}
  ]};

const columns = [{
  title: '名稱',
  dataIndex: 'name',
  key: 'namr',
  width: "20%",
}, {
  title: '連結',
  dataIndex: 'url',
  key: 'url',
  render: (text) => { return <a href={text} target="_blank">{text}</a> ;},
  width: "60%",
}, {
  title: '備註',
  dataIndex: 'note',
  key: 'note',
  width: "20%",
}];

class Playlist extends React.Component {
  tableData = (type) => formData[type];

  render() {
    return(
      <Row id="playlistContainer">
        <Col span={24} className="firstTitle">
          <h1>頻道推薦<Icon type="heart" /><Icon type="heart" /><Icon type="heart" /></h1>
        </Col>
        <Row>
          <Col span={4} />
          <Col span={16} className="scondTitle">
            <h2>入門</h2>
            <Table columns={columns} dataSource={this.tableData('start')} pagination={false} size="small" />
          </Col>
          <Col span={4} />
        </Row>
        <Row>
          <Col span={4} />
          <Col span={16} className="scondTitle">
            <h2>入門、進階</h2>
            <Table columns={columns} dataSource={this.tableData('startAdvanced')} pagination={false} size="small" />
          </Col>
          <Col span={4} />
        </Row>
        <Row>
          <Col span={4} />
          <Col span={16} className="scondTitle">
            <h2>進階</h2>
            <Table columns={columns} dataSource={this.tableData('advanced')} pagination={false} size="small" />
          </Col>
          <Col span={4} />
        </Row>
        <Row>
          <Col span={4} />
          <Col span={16} className="scondTitle">
            <h2>適合女性</h2>
            <Table columns={columns} dataSource={this.tableData('woman')} pagination={false} size="small" />
          </Col>
          <Col span={4} />
        </Row>
        <Row>
          <Col span={4} />
          <Col span={16} className="scondTitle">
            <h2>其他</h2>
            <Table columns={columns} dataSource={this.tableData('other')} pagination={false} size="small" />
          </Col>
          <Col span={4} />
        </Row>
      </Row>
    );
  }
}

export default Playlist;