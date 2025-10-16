"use client"
import PageBreadcrumb from '@/components/PageBreadcrumb';
import { Card, CardBody, Col, Row, ToastContainer } from 'react-bootstrap';
import OrderStatus from './caseFilters';
import CasesTable from './cases';
import Kpis from './kpis';
import CasesModal from './casesModal';
import { useEffect, useState } from 'react';
import { all as caseAll } from '@/services/caseServices';
import { toast } from 'react-toastify';
import { ICase } from '@/types/cases/ICase';

const CasesList = () => {
	const [cases, setCases] = useState<ICase[]>([]);
	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		setLoading(true);

		const fetchData = async () => {
			try {
				const response = await caseAll();
				setCases(response.data);
			} catch (error) {
				toast.error("Não foi possível obter os dados");
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, []);

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
								<Kpis loading={loading} />
							</Row>

							<div className="table-responsive">
								<CasesTable data={cases} loading={loading} />
							</div>
						</CardBody>
					</Card>
				</Col>
			</Row>
			<ToastContainer />
		</>
	);
};

export default CasesList;
