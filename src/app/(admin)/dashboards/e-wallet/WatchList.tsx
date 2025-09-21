'use client'
import CardTitle from '@/components/CardTitle';
import dynamic from "next/dynamic";
const SimpleBar = dynamic(() => import('simplebar-react'),{ssr: false});
import classNames from 'classnames';
import React, { Fragment } from 'react';
import { Card, CardBody } from 'react-bootstrap';
import { WatchListItem } from './types';

type WatchListProps = {
	watchList: Array<WatchListItem>;
};

const WatchList = ({ watchList }: WatchListProps) => {
	return (
		<Card>
			<CardBody>
				<CardTitle
					containerClass="d-flex align-items-center justify-content-between"
					title="My Watchlist"
					menuItems={[
						{ label: 'Refresh', icon: 'mdi mdi-cached' },
						{ label: 'Edit', icon: 'mdi mdi-circle-edit-outline' },
						{
							label: 'Remove',
							icon: 'mdi mdi-delete-outline',
							variant: 'text-danger',
						},
					]}
				/>
			</CardBody>

			<SimpleBar style={{ maxHeight: '315px' }} className="card-body py-0">
				{(watchList || []).map((watch, index) => {
					return (
						<Fragment key={index.toString()}>
							<div className="d-flex align-items-center">
								<div className="flex-shrink-0">
									<div className="avatar-sm rounded">
										<span
											className={classNames(
												'avatar-title',
												'bg-' + watch.variant + '-lighten',
												'text-' + watch.variant,
												'border',
												'border-' + watch.variant,
												'rounded-circle',
												'h3',
												'my-0'
											)}
										>
											<i className={classNames(watch.icon)} />
										</span>
									</div>
								</div>
								<div className="flex-grow-1 ms-2">
									<h4 className="mt-0 mb-1 font-16 fw-semibold">{watch.title}</h4>
									<p className="mb-0 text-muted">{watch.amount}</p>
								</div>
								<p
									className={classNames('mb-0', {
										'text-success': watch.trendStatus === 'up',
										'text-danger': watch.trendStatus === 'down',
									})}
								>
									<i
										className={classNames('me-1', {
											'mdi mdi-trending-up': watch.trendStatus === 'up',
											'mdi mdi-trending-down': watch.trendStatus === 'down',
										})}
									></i>
									{watch.trend}
								</p>
							</div>

							<hr className="opacity-50 bg-secondary-lighten" />
						</Fragment>
					);
				})}
			</SimpleBar>
		</Card>
	);
};

export default WatchList;
