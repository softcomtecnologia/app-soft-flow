'use client'
import classNames from 'classnames';
import { Card, CardBody } from 'react-bootstrap';
import { Merchant } from './types';
import Link from 'next/link';
import dynamic from "next/dynamic";
const SimpleBar = dynamic(() => import('simplebar-react'),{ssr: false});

type MerchantListProps = {
	merchantList: Merchant[];
};

const createMarkup = (text: string) => {
	return { __html: text };
};

const MerchantList = ({ merchantList }: MerchantListProps) => {
	return (
		<Card>
			<CardBody className="pb-0">
				<div className="d-flex justify-content-between align-items-center mb-2">
					<h4 className="header-title mb-0">Merchange List</h4>
					<Link href="" className="btn btn-sm btn-light">
						<i className="mdi mdi-plus"></i>
					</Link>
				</div>
			</CardBody>
			<SimpleBar style={{ maxHeight: '375px' }} className="card-body py-0">
				{(merchantList || []).map((merchant, index) => {
					return (
						<div className="d-flex align-items-center mb-3" key={index.toString()}>
							<div className="flex-shrink-0">
								<div className="avatar-sm rounded">
									<span
										className={classNames(
											'avatar-title',
											'bg-transparent',
											'border',
											'border-light',
											'text-' + merchant.variant,
											'rounded',
											'h3',
											'my-0'
										)}
									>
										<span dangerouslySetInnerHTML={createMarkup(merchant.icon)}></span>
									</span>
								</div>
							</div>
							<div className="flex-grow-1 ms-2">
								<Link href="" className="h4 my-0 fw-semibold text-secondary">
									{merchant.title}
									<i className="mdi mdi-check-decagram text-muted ms-1"></i>
								</Link>
							</div>
							<Link href="" className="font-16 text-muted">
								<i className="uil uil-angle-right-b"></i>
							</Link>
						</div>
					);
				})}
			</SimpleBar>
		</Card>
	);
};

export default MerchantList;
