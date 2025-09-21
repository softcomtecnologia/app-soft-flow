import type { Metadata } from 'next';
import RecoverPasswordForm from './RecoverPasswordForm';

export const metadata: Metadata = { title: 'Recover Password 2' };

const RecoverPassword2 = () => {
	return <RecoverPasswordForm />;
};

export default RecoverPassword2;
