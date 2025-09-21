import PageBreadcrumb from '@/components/PageBreadcrumb';
import AllCandleStickCharts from './AllCandleStickCharts';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'CandleStick Charts' };

const CandlestickApex = () => {
	return (
		<>
			<PageBreadcrumb title="Candlestick" subName="Apex" />

			<AllCandleStickCharts />
		</>
	);
};

export default CandlestickApex;
