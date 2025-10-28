'use client';

import { Card, Col, ListGroup, Placeholder, Row } from 'react-bootstrap';

export default function TimetrackerSkelleton() {
	return (
		<div className="d-flex flex-column gap-4">
			<Card className="border-0 shadow-sm">
				<Card.Header className="bg-light border-bottom">
					<Placeholder as="div" animation="glow">
						<Placeholder xs={4} style={{ height: '24px' }} />
					</Placeholder>
				</Card.Header>
				<Card.Body>
					<Row className="align-items-md-center g-3">
						<Col xs={12} md={8}>
							<div className="d-flex flex-column gap-3">
								<div className="d-flex flex-wrap align-items-center gap-2">
									<Placeholder as="span" animation="glow" className="rounded-pill bg-secondary-subtle" style={{ width: '110px', height: '24px' }} />
									<Placeholder as="span" animation="glow" className="rounded-pill bg-secondary-subtle" style={{ width: '140px', height: '24px' }} />
								</div>
								<div className="d-flex flex-column gap-2">
									<Placeholder as="div" animation="glow">
										<Placeholder xs={6} style={{ height: '16px' }} />
									</Placeholder>
									<Placeholder as="div" animation="glow">
										<Placeholder xs={4} style={{ height: '14px' }} />
									</Placeholder>
								</div>
							</div>
						</Col>
						<Col xs={12} md={4}>
							<div className="d-grid gap-2 d-md-flex justify-content-md-end">
								<Placeholder.Button variant="secondary" animation="glow" className="w-100" style={{ height: '40px' }} />
							</div>
						</Col>
					</Row>
				</Card.Body>
			</Card>

			<Card className="border-0 shadow-sm">
				<Card.Header className="bg-light border-bottom">
					<Placeholder as="div" animation="glow">
						<Placeholder xs={4} style={{ height: '24px' }} />
					</Placeholder>
				</Card.Header>
				<Card.Body className="p-0">
					<ListGroup variant="flush">
						{Array.from({ length: 3 }).map((_, index) => (
							<ListGroup.Item
								key={index}
								className="d-flex flex-column flex-md-row gap-2 justify-content-between align-items-start align-items-md-center py-3 px-3"
							>
								<div className="d-flex flex-column gap-2">
									<Placeholder as="span" animation="glow" className="rounded-pill bg-secondary-subtle" style={{ width: '140px', height: '24px' }} />
									<Placeholder as="div" animation="glow">
										<Placeholder xs={7} style={{ height: '14px' }} />
									</Placeholder>
								</div>
								<Placeholder as="span" animation="glow" className="rounded-pill bg-secondary-subtle ms-md-auto" style={{ width: '80px', height: '24px' }} />
							</ListGroup.Item>
						))}
					</ListGroup>
				</Card.Body>
			</Card>
		</div>
	);
}
