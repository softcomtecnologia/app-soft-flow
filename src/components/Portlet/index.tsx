'use client';
import React from 'react';
import classNames from 'classnames';
import { Button, Card, Collapse } from 'react-bootstrap';
import { useToggle } from '@/hooks';
import usePortlet from './usePortlet';
import Link from 'next/link';

type PortletProps = {
	className?: string;
	children: React.ReactElement;
};

const Portlet = ({ className, children }: PortletProps) => {
	const [collapse, toggleContent] = useToggle(true);
	const [isHidden, , remove] = useToggle();
	const [loading, reloadContent] = usePortlet();

	return (
		<>
			{!isHidden ? (
				<Card className={classNames(className)}>
					{loading && (
						<div className="card-disabled">
							<div className="card-portlets-loader"></div>
						</div>
					)}

					<Card.Body>
						<div className="card-widgets">
							<Button variant="link" className={classNames(className,'py-0 px-1 text-dark')} onClick={reloadContent}>
								<i className="mdi mdi-refresh"></i>
							</Button>
							<Button variant="link" className={classNames(className,'py-0 px-1 text-dark')} onClick={toggleContent}>
								<i
									className={classNames('mdi', {
										'mdi-minus': collapse,
										'mdi-plus': !collapse,
									})}
								></i>
							</Button>
							<Button variant="link" className={classNames(className,'py-0 px-1 text-dark')} onClick={remove}>
								<i className="mdi mdi-close"></i>
							</Button>
						</div>

						<Card.Title as="h5" className="mb-0">
							Card title
						</Card.Title>

						<Collapse in={collapse}>
							<div>
								<div className="pt-3">{children}</div>
							</div>
						</Collapse>
					</Card.Body>
				</Card>
			) : null}
		</>
	);
};

export default Portlet;
