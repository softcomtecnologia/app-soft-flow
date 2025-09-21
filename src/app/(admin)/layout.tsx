import MainLayout from '@/components/MainLayout';
import AuthProtectionWrapper from '@/components/wrappers/AuthProtectionWrapper';
import type { ChildrenType } from '@/types/component-props';

const AdminLayout = ({ children }: ChildrenType) => {
	return (
		<AuthProtectionWrapper>
			<MainLayout>{children}</MainLayout>
		</AuthProtectionWrapper>
	);
};

export default AdminLayout;
