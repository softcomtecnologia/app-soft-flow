import { Col, Row } from 'react-bootstrap';
import PageBreadcrumb from '@/components/PageBreadcrumb';
import CalendarPage from './CalendarPage';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Calendar' };

const CalendarApp = () => {
	return (
		<>
			<PageBreadcrumb title="Calendar" subName="Apps" />
			<Row>
				<Col>
					<CalendarPage />
				</Col>
			</Row>
		</>
	);
};

export default CalendarApp;
