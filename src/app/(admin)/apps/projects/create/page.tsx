import PageBreadcrumb from '@/components/PageBreadcrumb';
import { Col, Row } from 'react-bootstrap';
import CreateProject from './CreateProject';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Create Project' };

const CreateProjects = () => {
	return (
		<>
			<PageBreadcrumb title="Create Project" subName="Projects" />

			<Row>
				<Col>
					<CreateProject />
				</Col>
			</Row>
		</>
	);
};

export default CreateProjects;
