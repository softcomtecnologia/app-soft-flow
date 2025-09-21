import { Card, CardBody, Col, Row } from 'react-bootstrap';
import PageBreadcrumb from '@/components/PageBreadcrumb';
const Details = dynamic(() => import('./Details'));
import Stocks from './Stocks';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';

export const metadata: Metadata = { title: 'Product Details' };

const ProductDetailsEcom = () => {
	return (
		<>
			<PageBreadcrumb title="Product Details" subName="E-Commerce" />

			<Row>
				<Col>
					<Card>
						<CardBody>
							<Details />
							<Stocks />
						</CardBody>
					</Card>
				</Col>
			</Row>
		</>
	);
};

export default ProductDetailsEcom;
