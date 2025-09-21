import type { Metadata } from 'next';
import LockScreenForm from './LockScreenForm';

export const metadata: Metadata = { title: 'Lock Screen' };

const LockScreen = () => {
	return (
		<>
			<LockScreenForm />
		</>
	);
};

export default LockScreen;
