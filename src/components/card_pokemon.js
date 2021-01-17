import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./cardStyle.scss";

const CardPokemon = (prop) => {
  const { data } = prop;

  return (
    <Col lg={3} md={4} sm={6} xs={6} className="mt-3 mb-3">
      <Link to={`/detail/${data.id}`}>
        <Card className="text-center">
          <Card.Img variant="top" src={data.image} />
          <Card.Body>
            <Card.Title>{data.name}</Card.Title>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};

export default CardPokemon;
