import React from 'react';
import { List, Row, Col } from 'antd';

function AuthorsList({ authors }) {
  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  console.log(authors);

  return (
    <List
      className="authorsList"
      itemLayout="horizontal"
      dataSource={authors}
      renderItem={(author) => (
        <List.Item>
          <List.Item.Meta
            avatar={
              <div style={{ background: getRandomColor() }} className="authorAvatar">
                {author.name.slice(0, 1)}
              </div>
            }
            title={
              <Row>
                <Col span={12}>{author.name}</Col>
                <Col push={7} span={4}>
                  {author.pageviews}
                </Col>
              </Row>
            }
            description={
              <Row>
                <Col span={12}>{author.count_pub} пуб.</Col>
                {author.id ? <img className="medal" src={`./media/medals/${author.id}.svg`} /> : null}
              </Row>
            }
          />
        </List.Item>
      )}
    />
  );
}

export default AuthorsList;
