import { Row, Col } from 'react-bootstrap';
import Statistics from './Statistics';
import CampaignsChart from './CampaignsChart';
import RevenueChart from './RevenueChart';
import Performers from './Performers';
import Leads from './Leads';
import CampaignWidget from './CampaignWidget';
import { topPerformanceData, recentLeads } from './data';
import PageBreadcrumb from '@/components/PageBreadcrumb';
import type { Metadata } from 'next';
import { TodoList } from '@/components/TodoList';

export const metadata: Metadata = { title: 'CRM' };

const CRMDashboard = () => {
	return (
		<>
			<PageBreadcrumb title="CRM" subName="Dashboard" />

			<Statistics />

			<Row>
				<Col lg={5}>
					<CampaignsChart />
				</Col>
				<Col lg={7}>
					<RevenueChart />
				</Col>
			</Row>

			<Row>
				<Col xl={4} lg={12}>
					<Performers topPerformanceData={topPerformanceData} />
				</Col>
				<Col xl={4} lg={6}>
					<Leads recentLeads={recentLeads} />
				</Col>
				<Col xl={4} lg={6}>
					<CampaignWidget />
					<TodoList height="220px" />
				</Col>
			</Row>
		</>
	);
};

export default CRMDashboard;
