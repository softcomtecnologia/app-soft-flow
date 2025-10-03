'use client';
import {useWizard, Wizard} from 'react-use-wizard';
import {Button, Card, Col, Form, Row} from 'react-bootstrap';
import classNames from "classnames";

const Header = () => {

    const {activeStep, goToStep} = useWizard();

    return (
        <ul className="nav nav-pills nav-justified form-wizard-header mb-4">
            <li className="nav-item">
                <button onClick={() => goToStep(0)}
                        className={classNames('nav-link rounded-0 py-2', activeStep === 0 && 'active')}>
                    <i className="mdi mdi-account-circle font-18 align-middle me-1"></i>
                    <span className="d-none d-sm-inline">Account</span>
                </button>
            </li>
            <li className="nav-item">
                <button onClick={() => goToStep(1)}
                        className={classNames('nav-link rounded-0 py-2', activeStep === 1 && 'active')}>
                    <i className="mdi mdi-face-man-profile font-18 align-middle me-1"></i>
                    <span className="d-none d-sm-inline">Profile</span>
                </button>
            </li>
            <li className="nav-item">
                <button onClick={() => goToStep(2)}
                        className={classNames('nav-link rounded-0 py-2', activeStep === 2 && 'active')}>
                    <i className="mdi mdi-checkbox-marked-circle-outline font-18 align-middle me-1"></i>
                    <span className="d-none d-sm-inline">Finish</span>
                </button>
            </li>
        </ul>
    )
}

const Step1 = ({showButtons}: { showButtons?: boolean }) => {
    const {nextStep} = useWizard();
    return (
        <Form>      
            <Form.Group as={Row} className="mb-3">
                <Form.Label htmlFor="exampleEmail" column md={3}>
                    Email
                </Form.Label>
                <Col md={9}>
                    <Form.Control type="email" name="exampleEmail"
                                  placeholder="Enter email"/>
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
                <Form.Label htmlFor="examplePassword" column md={3}>
                    Password
                </Form.Label>
                <Col md={9}>
                    <Form.Control
                        type="password"
                        name="examplePassword"
                        placeholder="password placeholder"
                    />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
                <Form.Label htmlFor="examplerePassword" column md={3}>
                    Re-Password
                </Form.Label>
                <Col md={9}>
                    <Form.Control type="password" name="exampleRepassword"
                                  placeholder="password"/>
                </Col>
            </Form.Group>

            {
                showButtons &&
                <ul className="list-inline wizard mb-0">
                    <li className="next list-inline-item float-end">
                        <Button onClick={nextStep} variant="success">
                            Next
                        </Button>
                    </li>
                </ul>
            }
        </Form>
    )
}

const Step2 = ({showButtons}: { showButtons?: boolean }) => {
    const {nextStep, previousStep} = useWizard();
    return (
        <Form>
            <Form.Group as={Row} className="mb-3">
                <Form.Label htmlFor="fname" column md={3}>
                    First Name
                </Form.Label>
                <Col md={9}>
                    <Form.Control type="text" name="fname" id="fname" placeholder="Enter first name"/>
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
                <Form.Label htmlFor="lname" column md={3}>
                    Last Name
                </Form.Label>
                <Col md={9}>
                    <Form.Control type="text" name="lname" id="lname" placeholder="enter last name"/>
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
                <Form.Label htmlFor="phone" column md={3}>
                    Phone Number
                </Form.Label>
                <Col md={9}>
                    <Form.Control type="text" name="phone" id="phone" placeholder="enter phone number"/>
                </Col>
            </Form.Group>

            {
                showButtons &&
                <ul className="list-inline wizard mb-0">
                    <li className="previous list-inline-item">
                        <Button onClick={previousStep} variant="info">
                            Previous
                        </Button>
                    </li>
                    <li className="next list-inline-item float-end">
                        <Button onClick={nextStep} variant="success">
                            Next
                        </Button>
                    </li>
                </ul>
            }
        </Form>
    )
}

const Step3 = ({showButtons}: { showButtons?: boolean }) => {

    const {previousStep,} = useWizard();

    return (
        <Row>
            <Col sm={12}>
                <div className="text-center">
                    <h2 className="mt-0">
                        <i className="mdi mdi-check-all"></i>
                    </h2>
                    <h3 className="mt-0">Thank you !</h3>

                    <p className="w-75 mb-2 mx-auto">
                        Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at
                        volutpat. In egestas mattis dui. Aliquam
                        mattis dictum aliquet.
                    </p>

                    <div className="mb-3">
                        <Form.Check type="checkbox" className="d-inline-block">
                            <Form.Check.Input type="checkbox"/>
                            <Form.Check.Label>I agree with the Terms and Conditions</Form.Check.Label>
                        </Form.Check>
                    </div>
                </div>
            </Col>
            {
                showButtons &&
                <Col sm={12}>
                    <ul className="list-inline wizard mb-0">
                        <li className="previous list-inline-item">
                            <Button onClick={previousStep} variant="info">
                                Previous
                            </Button>
                        </li>

                        <li className="next list-inline-item float-end">
                            <Button variant="success">Submit</Button>
                        </li>
                    </ul>
                </Col>
            }
        </Row>
    )
}

const Footer = () => {

    const {goToStep, previousStep, nextStep} = useWizard();

    return (
        <>
            <div className="float-start">
                <Button onClick={() => goToStep(0)} variant="info" className='button-first me-1'>
                    First
                </Button>
                <Button onClick={previousStep} variant="info" className='button-previous'>
                    Previous
                </Button>
            </div>
            <div className="float-end">
                <Button onClick={nextStep} variant="info" className='button-next me-1'>
                    Next
                </Button>
                <Button onClick={() => goToStep(2)} variant="info" className='button-last'>
                    Last
                </Button>
            </div>
        </>
    )
}

const BasicWizard = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title mb-3"> Basic Wizard</h4>

                <Wizard header={<Header/>}>
                    <Step1 showButtons/>
                    <Step2 showButtons/>
                    <Step3 showButtons/>
                </Wizard>

            </Card.Body>
        </Card>
    );
};

const WithFooterWizard = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title mb-3"> With Footer</h4>

                <Wizard header={<Header/>} footer={<Footer/>}>
                    <Step1/>
                    <Step2/>
                    <Step3/>
                </Wizard>

            </Card.Body>
        </Card>
    );
};

const AllWizard = () => {
    return (
        <>
            <Row>
                <Col xl={6}>
                    <BasicWizard/>
                </Col>

                <Col xl={6}>
                    <WithFooterWizard/>
                </Col>
            </Row>
        </>
    );
};

export default AllWizard;
