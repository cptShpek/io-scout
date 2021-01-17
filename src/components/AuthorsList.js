import React from 'react';
import { useSelector } from 'react-redux';
import { List, Row, Col } from 'antd';

function AuthorsList({ authors }) {
  const currentPage = useSelector((state) => state.filtersReducer.currentPage);

  function isEven(index) {
    return index % 2 == 0;
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
                <Col style={{ backgroundColor: author.color }} className="authorAvatar">
                  {author.name.slice(0, 1)}
                </Col>
              </Row>
            }
            title={
              <Row>
                <Col className="info" span={12}>
                  {author.name}
                </Col>
                <Col
                  className="info"
                  push={8}
                  xs={{ span: 4, push: 5 }}
                  sm={{ push: 8 }}
                  md={{ push: 9 }}
                  lg={{ push: 8 }}
                >
                  {author.pageviews}
                </Col>
              </Row>
            }
            description={
              <Row>
                <Col className="publications" span={12}>
                  {author.count_pub} пуб.
                </Col>
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
