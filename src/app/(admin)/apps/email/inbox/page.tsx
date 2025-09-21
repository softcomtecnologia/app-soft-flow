import PageBreadcrumb from '@/components/PageBreadcrumb';
import { Col, Row } from 'react-bootstrap';;
import EmailInbox from './EmailInbox';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Inbox' };

const InboxEmail = () => {
	return (
		<>
			<PageBreadcrumb title="Inbox" subName="Email" />

			<Row>
				<Col>
					<EmailInbox />
				</Col>
			</Row>
		</>
	);
};

export default InboxEmail;
