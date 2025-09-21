import type { Metadata } from 'next';
import LogoutPage from './LogoutPage';

export const metadata: Metadata = { title: 'Logout' };

const Logout = () => {
	return <LogoutPage />;
};

export default Logout;
