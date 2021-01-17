import React, { useEffect } from 'react';
import { Row, Col, ListGroup, Image, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDetailPokemon } from '../actions/pokemon_action';
import { errorDialog, catchPokemonDialog } from '../components/dialog';

const DetailPokemonPage = () => {
    const dispatch = useDispatch();
    const dataPokemon = useSelector(state => state.detailPokemon.isLoaded);

    const catchPokemon = (pokemon) => {
        let chance = Math.round(Math.random());

        if (chance === 0) {
            errorDialog("Oops.. try again");
        } else {
            catchPokemonDialog(pokemon);
        }
    }

    const { id } = useParams();

    useEffect(() => {
        dispatch(getDetailPokemon(id));
    }, [dispatch, id]);

    return (
        <>
            <h3>Detail Pokemon</h3>
            <Row>
                <Col lg={4}>
                    <Image className="mx-auto d-block" width={180} src={dataPokemon.image}></Image>
                </Col>
                <Col lg={8}>
                    <ListGroup style={{ width: "100%" }}>
                        <ListGroup.Item>
                            <Row>
                                <Col lg="4">
                                    <b>Name</b>
                                </Col>
                                <Col>{dataPokemon.name}</Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col lg="4">
                                    <b>Type</b>
                                </Col>
                                <Col>{dataPokemon.type}</Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col lg="4">
                                    <b>Moves</b>
                                </Col>
                                <Col>{dataPokemon.moves}</Col>
                            </Row>
                        </ListGroup.Item>
                    </ListGroup>
                    <Button onClick={() => catchPokemon(dataPokemon)} className="mx-auto d-block mt-3">Catch</Button>
                </Col>
            </Row>
        </>
    );
}

export default DetailPokemonPage;