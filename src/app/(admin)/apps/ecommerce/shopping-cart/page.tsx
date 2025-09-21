import { Card, CardBody, Col, Row } from 'react-bootstrap';
import CartDetail from './CartDetail';
import PageBreadcrumb from '@/components/PageBreadcrumb';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Shopping Cart' };

const ShoppingCartEcom = () => {
	return (
		<>
			<PageBreadcrumb title="Shopping Cart" subName="E-commerce" />

			<Row>
				<Col xs={12}>
					<Card>
						<CardBody>
							<CartDetail />
						</CardBody>
					</Card>
				</Col>
			</Row>
		</>
	);
};

export default ShoppingCartEcom;
