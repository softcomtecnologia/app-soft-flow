'use client';
import { columns, sizePerPageList } from './ColumnsSet';
import { Product } from '../types';
import { products } from '../data';
import ReactTable from '@/components/table/ReactTable';

const ProductTable = () => {
	return (
		<ReactTable<Product>
			columns={columns}
			data={products}
			pageSize={5}
			rowsPerPageList={sizePerPageList}
			theadClass="table-light"
			showPagination
			isSearchable
			isSelectable
			searchBoxClass="mb-2"
		/>
	);
};

export default ProductTable;
