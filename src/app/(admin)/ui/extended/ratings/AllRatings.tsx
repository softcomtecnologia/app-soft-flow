'use client';
import {Card, CardBody, Col, Row} from 'react-bootstrap';
import {Heart, Rating, RoundedStar, StickerStar, ThinStar} from '@smastrom/react-rating'
import {useState} from "react";

const AllRatings = () => {

    const [rating1, setRating1] = useState(3);
    const [rating2, setRating2] = useState(4.5);
    const [rating3, setRating3] = useState(0);
    const [rating4, setRating4] = useState(2);
    const [rating5, setRating5] = useState(3);
    const [rating6, setRating6] = useState(5);

    return (
        <>
            <Row>
                <Col xl={6}>
                    <Card>
                        <CardBody>
                            <h4 className="header-title">Default Rating</h4>

                            <Rating value={rating1} onChange={setRating1} style={{maxWidth: 150}}/>
                        </CardBody>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card>
                        <CardBody>
                            <h4 className="header-title">Included Shapes</h4>

                            <Rating value={rating2}
                                    onChange={setRating2}
                                    itemStyles={{
                                        itemShapes: ThinStar,
                                        activeFillColor: '#0acf97',
                                        inactiveFillColor: '#b1e3d5',
                                    }}
                                    style={{maxWidth: 150,marginBottom:5}}/>

                            <Rating value={rating3}
                                    onChange={setRating3}
                                    itemStyles={{
                                        itemShapes: RoundedStar,
                                        activeFillColor: '#39afd1',
                                        inactiveFillColor: '#c2e1e8',
                                    }}
                                    style={{maxWidth: 150,marginBottom:5}}/>

                            <Rating value={rating4}
                                    onChange={setRating4}
                                    itemStyles={{
                                        itemShapes: StickerStar,
                                        activeFillColor: '#ffc35a',
                                        inactiveFillColor: '#ece1ce',
                                    }}
                                    style={{maxWidth: 150,marginBottom:5}}/>

                            <Rating value={rating5}
                                    onChange={setRating5}
                                    itemStyles={{
                                        itemShapes: Heart,
                                        activeFillColor: '#fa5c7c',
                                        inactiveFillColor: '#d8abb4',
                                    }}
                                    style={{maxWidth: 150}}/>

                        </CardBody>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col xl={6}>
                    <Card>
                        <CardBody>
                            <h4 className="header-title">Read-Only Rating</h4>

                            <Rating value={4} readOnly style={{maxWidth: 150}}/>
                        </CardBody>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card>
                        <CardBody>
                            <h4 className="header-title">Custom Number of Stars</h4>

                            <Rating value={rating6} onChange={setRating6} items={10} style={{maxWidth: 280}}/>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default AllRatings;
