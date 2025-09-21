import Link from 'next/link';
import { Dropdown, ButtonGroup, ProgressBar, DropdownToggle, DropdownMenu, DropdownItem } from 'react-bootstrap';

const LeftPanel = () => {
	return (
		<>
			<ButtonGroup className="d-block mb-2">
				<Dropdown>
					<DropdownToggle className="btn btn-success dropdown-toggle w-100">
						<i className="mdi mdi-plus"></i> Create New
					</DropdownToggle>
					<DropdownMenu>
						<DropdownItem>
							<i className="mdi mdi-folder-plus-outline me-1"></i> Folder
						</DropdownItem>
						<DropdownItem>
							<i className="mdi mdi-file-plus-outline me-1"></i> File
						</DropdownItem>
						<DropdownItem>
							<i className="mdi mdi-file-document me-1"></i> Document
						</DropdownItem>
						<DropdownItem>
							<i className="mdi mdi-upload me-1"></i> Choose File
						</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			</ButtonGroup>

			<div className="email-menu-list mt-3">
				<Link href="/apps/file">
					<i className="mdi mdi-folder-outline font-18 align-middle me-2"></i>My Files
				</Link>
				<Link href="/apps/file">
					<i className="mdi mdi-google-drive font-18 align-middle me-2"></i>
					Google Drive
				</Link>
				<Link href="/apps/file">
					<i className="mdi mdi-dropbox font-18 align-middle me-2"></i>Dropbox
				</Link>
				<Link href="/apps/file">
					<i className="mdi mdi-share-variant font-18 align-middle me-2"></i>
					Share with me
				</Link>
				<Link href="/apps/file">
					<i className="mdi mdi-clock-outline font-18 align-middle me-2"></i>
					Recent
				</Link>
				<Link href="/apps/file">
					<i className="mdi mdi-star-outline font-18 align-middle me-2"></i>
					Starred
				</Link>
				<Link href="/apps/file">
					<i className="mdi mdi-delete font-18 align-middle me-2"></i>Deleted Files
				</Link>
			</div>

			<div className="mt-5">
				<h4>
					<span className="badge rounded-pill p-1 px-2 badge-secondary-lighten">FREE</span>
				</h4>
				<h6 className="text-uppercase mt-3">Storage</h6>
				<ProgressBar variant="success" now={46} className="my-2 progress-sm" />
				<p className="text-muted font-13 mb-0">7.02 GB (46%) of 15 GB used</p>
			</div>
		</>
	);
};

export default LeftPanel;
