import PageBreadcrumb from '@/components/PageBreadcrumb';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Row, Col, Card, Breadcrumb, CardBody, BreadcrumbItem } from 'react-bootstrap';

export const metadata: Metadata = { title: 'Breadcrumb' };

const Example = () => {
	return (
		<Card>
			<CardBody>
				<h4 className="header-title">Example</h4>
				<p className="text-muted font-14">
					Indicate the current page’s location within a navigational hierarchy that automatically adds separators via CSS. Please read the official
					<Link
						target="_blank"
						rel="noreferrer"
						href={{
							pathname: 'https://getbootstrap.com/docs/4.0/components/breadcrumb/',
						}}
					>
						Bootstrap
					</Link>
					documentation for more options.
				</p>

				<Breadcrumb listProps={{ className: 'mb-0' }}>
					<BreadcrumbItem active>Home</BreadcrumbItem>
				</Breadcrumb>

				<Breadcrumb listProps={{ className: 'mb-0' }}>
					<BreadcrumbItem href="/ui/breadcrumb">Home</BreadcrumbItem>
					<BreadcrumbItem active>Library</BreadcrumbItem>
				</Breadcrumb>

				<Breadcrumb listProps={{ className: 'mb-0' }}>
					<BreadcrumbItem href="/ui/breadcrumb">Home</BreadcrumbItem>
					<BreadcrumbItem href="/ui/breadcrumb">Library</BreadcrumbItem>
					<BreadcrumbItem active>Data</BreadcrumbItem>
				</Breadcrumb>
			</CardBody>
		</Card>
	);
};

const WithIcons = () => {
	return (
		<Card>
			<CardBody>
				<h4 className="header-title">With Icons</h4>
				<p className="text-muted font-14">Optionally you can also specify the icon with your breadcrumb item.</p>

				<Breadcrumb listProps={{ className: 'bg-light-lighten p-2' }}>
					<BreadcrumbItem active>
						<i className="uil-home-alt"></i> Home
					</BreadcrumbItem>
				</Breadcrumb>

				<Breadcrumb listProps={{ className: 'bg-light-lighten p-2' }}>
					<BreadcrumbItem href="/ui/breadcrumb">
						<i className="uil-home-alt"></i> Home
					</BreadcrumbItem>
					<BreadcrumbItem active>Library</BreadcrumbItem>
				</Breadcrumb>

				<Breadcrumb listProps={{ className: 'bg-light-lighten p-2' }}>
					<BreadcrumbItem href="/ui/breadcrumb">
						<i className="uil-home-alt"></i> Home
					</BreadcrumbItem>
					<BreadcrumbItem href="/ui/breadcrumb">Library</BreadcrumbItem>
					<BreadcrumbItem active>Data</BreadcrumbItem>
				</Breadcrumb>
			</CardBody>
		</Card>
	);
};

const BreadcrumbUI = () => {
	return (
		<>
			<PageBreadcrumb title="Breadcrumb" subName="Base UI" />
			<Row>
				<Col xl={6}>
					<Example />
				</Col>

				<Col xl={6}>
					<WithIcons />
				</Col>
			</Row>
		</>
	);
};

export default BreadcrumbUI;
