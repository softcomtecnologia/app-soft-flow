'use client';
import {Card, Col, Row} from 'react-bootstrap';
import {useState} from 'react';
import {getTrackBackground, Range} from "react-range";

const AllRangeSliders = () => {

    const [singleValue, setSingleValue] = useState([50]);
    const [rangeValue, setRangeValue] = useState([20, 80]);
    const [stepValue, setStepValue] = useState([30]);
    const [multiRangeValue, setMultiRangeValue] = useState([10, 40]);

    return (
        <>
            <Row>
                <Col xl={6}>
                    <Card>
                        <Card.Body>
                            <h4 className="header-title">Single</h4>
                            <p className="text-muted font-14">Slider with single selecrtor</p>

                            <Range
                                values={singleValue}
                                step={1}
                                min={0}
                                max={100}
                                onChange={(values) => setSingleValue(values)}
                                renderTrack={({props, children}) => (
                                    <div
                                        key="track-1"
                                        {...props}
                                        style={{
                                            ...props.style,
                                            height: "6px",
                                            width: "100%",
                                            background: getTrackBackground({
                                                values: singleValue,
                                                colors: ["#f59e0b", "#ccc"],
                                                min: 0,
                                                max: 100
                                            })
                                        }}
                                    >
                                        {children}
                                    </div>
                                )}
                                renderThumb={({props, index}) => (
                                    <div
                                        {...props}
                                        key={index}
                                        style={{
                                            ...props.style,
                                            height: "20px",
                                            width: "20px",
                                            backgroundColor: "#f59e0b",
                                            borderRadius: "50%"
                                        }}
                                    />
                                )}
                            />

                            <p className="mt-3 mb-0">Value: {singleValue[0]}</p>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card>
                        <Card.Body>
                            <h4 className="header-title">Range</h4>
                            <p className="text-muted font-14">Slider with range selecrtor</p>
                            <Range
                                values={rangeValue}
                                step={1}
                                min={0}
                                max={100}
                                onChange={(values) => setRangeValue(values)}
                                renderTrack={({props, children}) => (
                                    <div
                                        key="track-2"
                                        {...props}
                                        style={{
                                            ...props.style,
                                            height: "6px",
                                            width: "100%",
                                            background: getTrackBackground({
                                                values: rangeValue,
                                                colors: ["#ccc", "#f59e0b", "#ccc"],
                                                min: 0,
                                                max: 100
                                            })
                                        }}
                                    >
                                        {children}
                                    </div>
                                )}
                                renderThumb={({props, index}) => (
                                    <div
                                        {...props}
                                        key={index}
                                        style={{
                                            ...props.style,
                                            height: "20px",
                                            width: "20px",
                                            backgroundColor: "#f59e0b",
                                            borderRadius: "50%"
                                        }}
                                    />
                                )}
                            />
                            <p className="mt-3 mb-0">Range: {rangeValue[0]} - {rangeValue[1]}</p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col xl={6}>
                    <Card>
                        <Card.Body>
                            <h4 className="header-title">Slider Step</h4>
                            <p className="text-muted font-14">Slider with step value</p>

                            <Range
                                values={stepValue}
                                step={10}
                                min={0}
                                max={100}
                                onChange={(values) => setStepValue(values)}
                                renderTrack={({props, children}) => (
                                    <div
                                        key="track-3"
                                        {...props}
                                        style={{
                                            ...props.style,
                                            height: "6px",
                                            width: "100%",
                                            background: getTrackBackground({
                                                values: stepValue,
                                                colors: ["#f59e0b", "#ccc"],
                                                min: 0,
                                                max: 100
                                            })
                                        }}
                                    >
                                        {children}
                                    </div>
                                )}
                                renderThumb={({props, index}) => (
                                    <div
                                        {...props}
                                        key={index}
                                        style={{
                                            ...props.style,
                                            height: "20px",
                                            width: "20px",
                                            backgroundColor: "#f59e0b",
                                            borderRadius: "50%"
                                        }}
                                    />
                                )}
                            />

                            <p className="mt-3 mb-0">Value: {stepValue[0]}</p>

                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card>
                        <Card.Body>
                            <h4 className="header-title">Range Slider with Steps</h4>
                            <p className="text-muted font-14">Slider with range selector with fixed step value</p>

                            <Range
                                values={multiRangeValue}
                                step={5}
                                min={0}
                                max={100}
                                onChange={(values) => setMultiRangeValue(values)}
                                renderTrack={({props, children}) => (
                                    <div
                                        key="track-4"
                                        {...props}
                                        style={{
                                            ...props.style,
                                            height: "6px",
                                            width: "100%",
                                            background: getTrackBackground({
                                                values: multiRangeValue,
                                                colors: ["#ccc", "#f59e0b", "#ccc", "#f59e0b", "#ccc"],
                                                min: 0,
                                                max: 100
                                            })
                                        }}
                                    >
                                        {children}
                                    </div>
                                )}
                                renderThumb={({props, index}) => (
                                    <div
                                        {...props}
                                        key={index}
                                        style={{
                                            ...props.style,
                                            height: "20px",
                                            width: "20px",
                                            backgroundColor: "#f59e0b",
                                            borderRadius: "50%"
                                        }}
                                    />
                                )}
                            />
                            <p className="mt-3 mb-0">Values: {multiRangeValue.join(" - ")}</p>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default AllRangeSliders;
