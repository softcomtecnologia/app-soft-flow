import type { Metadata } from 'next';
import RegisterForm from './RegisterForm';

export const metadata: Metadata = { title: 'Register' };

const Register = () => {
	return (
		<>
			<RegisterForm />
		</>
	);
};

export default Register;
