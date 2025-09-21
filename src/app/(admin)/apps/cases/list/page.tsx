import PageBreadcrumb from '@/components/PageBreadcrumb';
import { Button, Card, CardBody, Col, Row } from 'react-bootstrap';
import OrderStatus from './caseFilters';
import { casesData } from './data';
import type { Metadata } from 'next';
import CasesTable from './cases';
import Kpis from './kpis';
import CasesModal from './casesModal';

export const metadata: Metadata = { title: 'Orders' };

const CasesList = () => {
	return (
		<>
			<PageBreadcrumb title="Casos" subName="CRM" />

			<Row>
				<Col xs={12}>
					<Card>
						<CardBody>
							<div className="mb-3">
								<Row className="align-items-center g-2">
									<Col xs={12} lg={8}>
										<OrderStatus />
									</Col>

									<Col xs={12} lg={4} className="text-lg-end">
										<div className="mt-2 mt-lg-0">
											<CasesModal />
										</div>
									</Col>
								</Row>
							</div>

							<Row className="g-3 mb-3">
								<Kpis />
							</Row>

							<div className="table-responsive">
								<CasesTable data={casesData} />
							</div>
						</CardBody>
					</Card>
				</Col>
			</Row>
		</>
	);
};

export default CasesList;
