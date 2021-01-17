import React from 'react';
import { useSelector } from 'react-redux';
import { List, Row, Col } from 'antd';

function AuthorsList({ authors }) {
  const currentPage = useSelector((state) => state.filtersReducer.currentPage);
  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function isEven(index) {
    if (index % 2 == 0) return true;
    else return false;
  }

  return (
    <List
      className="authorsList"
      itemLayout="horizontal"
      dataSource={authors}
      renderItem={(author, index) => (
        <List.Item className={`${isEven(index) ? '' : 'greyRow'}`}>
          <List.Item.Meta
            avatar={
              <Row>
                <Col className="queue">{index + 1 + (currentPage * 10 - 10)}</Col>
                <Col style={{ background: getRandomColor() }} className="authorAvatar">
                  {author.name.slice(0, 1)}
                </Col>
              </Row>
            }
            title={
              <Row>
                <Col span={12}>{author.name}</Col>
                <Col xs={{ span: 4, push: 4 }} lg={{ push: 8 }}>
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
