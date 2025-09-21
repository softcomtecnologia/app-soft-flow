import Link from 'next/link';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import Image from 'next/image';

import avatar1 from '@/assets/images/users/avatar-6.jpg';
import avatar2 from '@/assets/images/users/avatar-7.jpg';
import avatar3 from '@/assets/images/users/avatar-8.jpg';
import avatar4 from '@/assets/images/users/avatar-4.jpg';
import avatar5 from '@/assets/images/users/avatar-5.jpg';
import avatar6 from '@/assets/images/users/avatar-3.jpg';

const TeamMembers = () => {
	return (
		<>
			<h5>Team Members:</h5>
			<OverlayTrigger placement="top" overlay={<Tooltip>James Anderson</Tooltip>}>
				<Link href="" className="d-inline-block me-1">
					<Image src={avatar1} className="rounded-circle img-thumbnail avatar-sm" alt="friend" />
				</Link>
			</OverlayTrigger>

			<OverlayTrigger placement="top" overlay={<Tooltip>Mat Helme</Tooltip>}>
				<Link href="" className="d-inline-block me-1">
					<Image src={avatar2} className="rounded-circle img-thumbnail avatar-sm" alt="friend" />
				</Link>
			</OverlayTrigger>

			<OverlayTrigger placement="top" overlay={<Tooltip>Michael Zenaty</Tooltip>}>
				<Link href="" className="d-inline-block me-1">
					<Image src={avatar3} className="rounded-circle img-thumbnail avatar-sm" alt="friend" />
				</Link>
			</OverlayTrigger>

			<OverlayTrigger placement="top" overlay={<Tooltip>Michael Zenaty</Tooltip>}>
				<Link href="" className="d-inline-block me-1">
					<Image src={avatar4} className="rounded-circle img-thumbnail avatar-sm" alt="friend" />
				</Link>
			</OverlayTrigger>

			<OverlayTrigger placement="top" overlay={<Tooltip>Michael Zenaty</Tooltip>}>
				<Link href="" className="d-inline-block me-1">
					<Image src={avatar5} className="rounded-circle img-thumbnail avatar-sm" alt="friend" />
				</Link>
			</OverlayTrigger>

			<OverlayTrigger placement="top" overlay={<Tooltip>Michael Zenaty</Tooltip>}>
				<Link href="" className="d-inline-block">
					<Image src={avatar6} className="rounded-circle img-thumbnail avatar-sm" alt="friend" />
				</Link>
			</OverlayTrigger>
		</>
	);
};

export default TeamMembers;
