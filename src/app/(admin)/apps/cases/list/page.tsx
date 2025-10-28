'use client';
import { Card, CardBody, Col, Row } from 'react-bootstrap';
import CaseFilters from './caseFilters';
import CasesTable from './cases';
import Kpis from './kpis';
import CasesModal from './casesModal';
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
									<Col xs={12} lg={8}>
										<CaseFilters />
									</Col>

									<Col xs={12} lg={4} className="text-lg-end">
										<div className="mt-2 mt-lg-0">
											<CasesModal />
										</div>
									</Col>
								</Row>
							</div>

							<Row className="g-3 mb-3">
								<Kpis loading={loading} />
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
