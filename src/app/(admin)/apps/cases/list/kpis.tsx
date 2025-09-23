import { Card, Row, Col, CardBody } from 'react-bootstrap';

const Kpis = () => {
  return (
    <Row className="g-3">
      <Col xs={6} md={3}>
        <Card className="h-100 shadow-sm border-0">
          <CardBody className="text-center">
            <i className="ri-folder-open-line text-warning fs-3 mb-2"></i>
            <h4 className="mb-1">29</h4>
            <p className="text-muted small mb-0">Abertos</p>
          </CardBody>
        </Card>
      </Col>

      <Col xs={6} md={3}>
        <Card className="h-100 shadow-sm border-0">
          <CardBody className="text-center">
            <i className="ri-checkbox-circle-line text-success fs-3 mb-2"></i>
            <h4 className="mb-1">715</h4>
            <p className="text-muted small mb-0">Corrigidos</p>
          </CardBody>
        </Card>
      </Col>

      <Col xs={6} md={3}>
        <Card className="h-100 shadow-sm border-0">
          <CardBody className="text-center">
            <i className="ri-restart-line text-danger fs-3 mb-2"></i>
            <h4 className="mb-1">31</h4>
            <p className="text-muted small mb-0">Retornos</p>
          </CardBody>
        </Card>
      </Col>

      <Col xs={6} md={3}>
        <Card className="h-100 shadow-sm border-0">
          <CardBody className="text-center">
            <i className="ri-archive-line text-primary fs-3 mb-2"></i>
            <h4 className="mb-1">93</h4>
            <p className="text-muted small mb-0">Fechados</p>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Kpis;
