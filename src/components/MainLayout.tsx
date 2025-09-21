'use client';
import { useThemeContext } from '@/common';
import HorizontalLayout from '@/layouts/Horizontal';
import VerticalLayout from '@/layouts/Vertical';
import type { ChildrenType } from '@/types/component-props';

const MainLayout = ({ children }: ChildrenType) => {
	const { settings } = useThemeContext();
	return <>{settings.layout.type === 'horizontal' ? <HorizontalLayout>{children}</HorizontalLayout> : <VerticalLayout>{children}</VerticalLayout>}</>;
};

export default MainLayout;
