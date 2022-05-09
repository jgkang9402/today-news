import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Product = ({ news }) => {
  console.log(news);
  console.log(news[1]);
  return (
    <Container>
      {news.map((data, i) => (
        <Row>
          <Col sm={4}>
            <img className="item-img-size" src={news[i].media} />
          </Col>
          <Col sm={8}>
            <a href={news[i].link} target="_blank">
              <h2>{news[i].title}</h2>
            </a>
            <p>{news[i].summary}</p>
            <br />
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
//          <img src="data:image/jpeg;base64,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" />