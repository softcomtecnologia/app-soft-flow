import PageBreadcrumb from '@/components/PageBreadcrumb';
import ChatApp from './ChatApp';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Chat' };

const Chat = () => {
	return (
		<>
			<PageBreadcrumb title="Chat" subName="Apps" />
			<ChatApp />
		</>
	);
};

export default Chat;
