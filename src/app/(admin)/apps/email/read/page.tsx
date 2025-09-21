import PageBreadcrumb from '@/components/PageBreadcrumb';
import { Col, Row } from 'react-bootstrap';
import EmailDetails from './EmailDetails';

import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Read Email' };

const ReadEmail = () => {
	return (
		<>
			<PageBreadcrumb title="Read Email" subName="Email" />

			<Row>
				<Col>
					<EmailDetails />
				</Col>
			</Row>
		</>
	);
};

export default ReadEmail;
