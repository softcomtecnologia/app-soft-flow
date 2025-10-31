'use client';
import { Card, CardBody, Col, Row } from 'react-bootstrap';
import CaseFilters from './caseFilters';
import CasesTable from './cases';
import Kpis from './kpis';
import { CasesProvider, useCasesContext } from '@/contexts/casesContext';
import { ToastContainer, toast } from 'react-toastify';

const CasesList = () => {
	const { cases, loading } = useCasesContext();
	return (
		<>
			<Row>
				<Col xs={12}>
					<Card>
						<CardBody>
							<div className="mb-3">
								<Row className="align-items-center g-2">
									<Col xs={12}>
										<CaseFilters />
									</Col>
								</Row>
							</div>

							<Row className="g-3 mb-3">
								<Col xs={12}>
									<Kpis loading={loading} />
								</Col>
							</Row>

							<div className="table-responsive">
								<CasesTable data={cases} loading={loading} />
							</div>
						</CardBody>
					</Card>
				</Col>
			</Row>
			<ToastContainer position='top-center'/>
		</>
	);
};

const CasesListWithProvider = () => (
	<CasesProvider>
		<CasesList />
	</CasesProvider>
);

export default CasesListWithProvider;
