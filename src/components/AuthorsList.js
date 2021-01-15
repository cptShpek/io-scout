import React from 'react';
import { List, Row, Col } from 'antd';

function AuthorsList({ authors }) {
  return (
    <List
      className="authorsList"
      itemLayout="horizontal"
      dataSource={authors}
      renderItem={(author) => (
        <List.Item>
          <List.Item.Meta
            avatar={<div className="authorAvatar">{author.name.slice(0, 1)}</div>}
            title={
              <Row>
                <Col span={12}>{author.name}</Col>
                <Col push={8} span={4}>
                  {author.pageviews}
                </Col>
              </Row>
            }
            description={
              <Row>
                <Col span={12}>{author.count_pub} publications</Col>
              </Row>
            }
          />
        </List.Item>
      )}
    />
  );
}

export default AuthorsList;
