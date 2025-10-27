import { Placeholder, Card, Row, Col } from 'react-bootstrap';

export default function FormResumeSkelleton() {
	return (
		<div className="d-flex flex-column gap-4">
			<Card className="border-0 shadow-sm">
				<Card.Header className="bg-light border-bottom">
					<Placeholder as="div" animation="glow">
						<Placeholder xs={4} style={{ height: '24px' }} />
					</Placeholder>
				</Card.Header>
				<Card.Body>
					<Row className="g-3">
						{/* Primeira linha: Código, Versão, Status, Prioridade */}
						<Col md={3}>
							<Placeholder as="div" animation="glow" className="mb-2">
								<Placeholder xs={4} style={{ height: '16px' }} />
							</Placeholder>
							<Placeholder as="div" animation="glow">
								<Placeholder xs={12} style={{ height: '38px' }} />
							</Placeholder>
						</Col>
						<Col md={3}>
							<Placeholder as="div" animation="glow" className="mb-2">
								<Placeholder xs={4} style={{ height: '16px' }} />
							</Placeholder>
							<Placeholder as="div" animation="glow">
								<Placeholder xs={12} style={{ height: '38px' }} />
							</Placeholder>
						</Col>
						<Col md={3}>
							<Placeholder as="div" animation="glow" className="mb-2">
								<Placeholder xs={4} style={{ height: '16px' }} />
							</Placeholder>
							<Placeholder as="div" animation="glow">
								<Placeholder xs={12} style={{ height: '38px' }} />
							</Placeholder>
						</Col>
						<Col md={3}>
							<Placeholder as="div" animation="glow" className="mb-2">
								<Placeholder xs={5} style={{ height: '16px' }} />
							</Placeholder>
							<Placeholder as="div" animation="glow">
								<Placeholder xs={12} style={{ height: '38px' }} />
							</Placeholder>
						</Col>
						{/* Segunda linha: Produto e Desenvolvedor */}
						<Col md={6}>
							<Placeholder as="div" animation="glow" className="mb-2">
								<Placeholder xs={3} style={{ height: '16px' }} />
							</Placeholder>
							<Placeholder as="div" animation="glow">
								<Placeholder xs={12} style={{ height: '38px' }} />
							</Placeholder>
						</Col>
						<Col md={6}>
							<Placeholder as="div" animation="glow" className="mb-2">
								<Placeholder xs={5} style={{ height: '16px' }} />
							</Placeholder>
							<Placeholder as="div" animation="glow">
								<Placeholder xs={12} style={{ height: '38px' }} />
							</Placeholder>
						</Col>
					</Row>
				</Card.Body>
			</Card>

			{/* Card de Resumo */}
			<Card className="border-0 shadow-sm">
				<Card.Header className="bg-light border-bottom">
					<Placeholder as="div" animation="glow">
						<Placeholder xs={4} style={{ height: '24px' }} />
					</Placeholder>
				</Card.Header>
				<Card.Body>
					<Placeholder as="div" animation="glow" className="mb-2">
						<Placeholder xs={3} style={{ height: '16px' }} />
					</Placeholder>
					<Placeholder as="div" animation="glow">
						<Placeholder xs={12} style={{ height: '120px' }} />
					</Placeholder>
					<Placeholder as="div" animation="glow" className="mb-2">
						<Placeholder xs={3} style={{ height: '16px' }} />
					</Placeholder>
					<Placeholder as="div" animation="glow">
						<Placeholder xs={12} style={{ height: '120px' }} />
					</Placeholder>
					<Placeholder as="div" animation="glow" className="mb-2">
						<Placeholder xs={3} style={{ height: '16px' }} />
					</Placeholder>
					<Placeholder as="div" animation="glow">
						<Placeholder xs={12} style={{ height: '120px' }} />
					</Placeholder>
				</Card.Body>
			</Card>
		</div>
	);
};
