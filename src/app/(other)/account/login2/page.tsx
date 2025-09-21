import type { Metadata } from 'next';
import LoginForm from './LoginForm';

export const metadata: Metadata = { title: 'Login 2' };

const Login2 = () => {
	return <LoginForm />;
};

export default Login2;
