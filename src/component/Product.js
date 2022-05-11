import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Product = ({ news }) => {
  // console.log(news);
  // console.log(news[1]);
  return (
    <Container>
      {news.map((data, i) => (
        <Row key={i}  className="news-list">
          <Col sm={4}>
            <img className="item-img-size" src={data.media} />
          </Col>
          <Col sm={8}>
            <a href={data.link} target="_blank">
              <h2>{data.title}</h2>
            </a>
            <p>{data.summary}</p>
            <hr />
            <div>
              {data.rights} ({data.published_date})
            </div>
            <hr />
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default Product;
