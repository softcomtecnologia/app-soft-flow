import { ReactNode } from 'react';
import { Row, Col, Breadcrumb, BreadcrumbItem } from 'react-bootstrap';

type PageTitleProps = {
	title: string;
	subName?: string;
	children?: ReactNode;
};

const PageBreadcrumb = ({ subName, title, children }: PageTitleProps) => {
	return (
		<>
			{subName && (
				<Row>
					<Col>
						<div className="page-title-box">
							<div className="page-title-right">
								<Breadcrumb listProps={{ className: 'm-0' }}>
									<BreadcrumbItem as={'li'}>Hyper</BreadcrumbItem>
									<BreadcrumbItem as={'li'}>{subName}</BreadcrumbItem>
									<BreadcrumbItem as={'li'} active>
										{title}
									</BreadcrumbItem>
								</Breadcrumb>
							</div>
							<h4 className="page-title">
								{title}
								{children ?? null}
							</h4>
						</div>
					</Col>
				</Row>
			)}
		</>
	);
};

export default PageBreadcrumb;
