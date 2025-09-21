'use client';

import ReactTable from '@/components/table/ReactTable';
import type { Seller } from '../types';
import { columns, sizePerPageList } from './ColumnsSet';
import { sellers } from '../data';

const SellerTable = () => {
	return (
		<ReactTable<Seller>
			columns={columns}
			data={sellers}
			pageSize={10}
			rowsPerPageList={sizePerPageList}
			showPagination
			isSelectable={true}
			tableClass="table-striped"
			theadClass="table-light"
			searchBoxClass="mt-2 mb-3"
		/>
	);
};

export default SellerTable;
