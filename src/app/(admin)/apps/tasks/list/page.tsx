import type { Metadata } from 'next';
import { Row } from 'react-bootstrap';
import AllTasks from './AllTasks';

export const metadata: Metadata = { title: 'Tasks' };

const ListTask = () => {
	return (
		<Row>
			<AllTasks />
		</Row>
	);
};

export default ListTask;
