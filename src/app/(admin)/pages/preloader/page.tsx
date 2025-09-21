import PageBreadcrumb from '@/components/PageBreadcrumb';
import dynamic from 'next/dynamic';
import { Col, Row } from 'react-bootstrap';
import CampaignWidget from './CampaignWidget';
import { recentLeads, topPerformanceData } from './data';
import Performers from './Performers';
import type { Metadata } from 'next';
const TodoList = dynamic(() => import('@/components/TodoList/TodoList'));
const Statistics = dynamic(() => import('./Statistics'));
const RevenueChart = dynamic(() => import('./RevenueChart'));
const CampaignsChart = dynamic(() => import('./CampaignsChart'));
const Preloader = dynamic(() => import('./Preloader'));
const Leads = dynamic(() => import('./Leads'));

export const metadata: Metadata = { title: 'With Preloader' };

const PreloaderPage = () => {
	return (
		<>
			<Preloader />
			<PageBreadcrumb title="With Preloader" subName="Pages" />

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
					<TodoList height="224px" />
				</Col>
			</Row>
		</>
	);
};

export default PreloaderPage;
