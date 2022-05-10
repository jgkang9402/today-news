import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Product = ({ news }) => {
  console.log(news);
  // console.log(news[1]);
  return (
    <Container>
      {news.map((data, i) => (
        <Row key={i}>
          <Col sm={4}>
            <img className="item-img-size" src={news[i].media} />
          </Col>
          <Col sm={8}>
            <a href={news[i].link} target="_blank">
              <h2>{news[i].title}</h2>
            </a>
            <p>{news[i].summary}</p>
            <hr />
            <div>
              {news[i].rights} ({news[i].published_date})
            </div>
            <hr />
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default Product;
