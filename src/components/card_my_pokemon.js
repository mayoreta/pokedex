import React from "react";
import { useDispatch } from 'react-redux';
import { removePokemon, myPokemonList } from '../actions/pokemon_action';
import { Button, Card, Col } from "react-bootstrap";
import "./cardStyle.scss";

const CardMyPokemon = (prop) => {
  const { data } = prop;
  const dispatch = useDispatch();

  const remove = async (data) => {
    await removePokemon(data);
    dispatch(myPokemonList());
  }

  return (
    <Col lg={3} md={4} sm={6} xs={6} className="mt-3 mb-3">
      <Card className="text-center">
        <Card.Img variant="top" src={data.image} />
        <Card.Body>
          <Card.Title>{data.nickname}</Card.Title>
          <Button onClick={() => remove(data)} variant="danger">Release</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardMyPokemon;
