import PageBreadcrumb from '@/components/PageBreadcrumb';
import type { Metadata } from 'next';
import { Card, CardBody, Col, Row } from 'react-bootstrap';
import LeftPanel from './LeftPanel';
import QuickAccess from './QuickAccess';
import Recent from './Recent';
import { quickAccessFiles, recentFiles } from './data';

export const metadata: Metadata = { title: 'File Manager' };

const FileManagerApp = () => {
	return (
		<>
			<PageBreadcrumb title="File Manager" subName="Apps" />
			<Row>
				<Col>
					<Card>
						<CardBody>
							<div className="page-aside-left">
								<LeftPanel />
							</div>

							<div className="page-aside-right">
								<div className="d-flex justify-content-between align-items-center">
									<div className="app-search">
										<form>
											<div className="mb-2 position-relative">
												<input type="text" className="form-control" placeholder="Search files..." />
												<span className="mdi mdi-magnify search-icon"></span>
											</div>
										</form>
									</div>
									<div>
										<button type="submit" className="btn btn-sm btn-light">
											<i className="mdi mdi-format-list-bulleted"></i>
										</button>
										<button type="submit" className="btn btn-sm">
											<i className="mdi mdi-view-grid"></i>
										</button>
										<button type="submit" className="btn btn-sm">
											<i className="mdi mdi-information-outline"></i>
										</button>
									</div>
								</div>

								<QuickAccess quickAccessFiles={quickAccessFiles} />

								<Recent recentFiles={recentFiles} />
							</div>
						</CardBody>
					</Card>
				</Col>
			</Row>
		</>
	);
};

export default FileManagerApp;
