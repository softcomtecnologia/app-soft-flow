import type { Metadata } from 'next';
import LoginPage from './LoginPage';

export const metadata: Metadata = { title: 'Login' };

const Login = () => {
	return <LoginPage />;
};

export default Login;
