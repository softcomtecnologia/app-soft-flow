import type { Metadata } from 'next';
import RecoverPassForm from './RecoverPassForm';

export const metadata: Metadata = { title: 'Recover Password' };

const RecoverPassword = () => {
	return (
		<>
			<RecoverPassForm />
		</>
	);
};

export default RecoverPassword;
