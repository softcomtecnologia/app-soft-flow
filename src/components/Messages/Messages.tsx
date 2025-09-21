import { Card, CardBody } from 'react-bootstrap';
import Image from 'next/image';
import MessageList from './MessageList';
import MessageItem from './MessageItem';
import Link from 'next/link';
import CardTitle from '../CardTitle';

import profileImg from '@/assets/images/users/avatar-2.jpg';
import avatar1 from '@/assets/images/users/avatar-3.jpg';
import avatar2 from '@/assets/images/users/avatar-4.jpg';
import avatar3 from '@/assets/images/users/avatar-5.jpg';
import avatar6 from '@/assets/images/users/avatar-6.jpg';

const Messages = () => {
	return (
		<Card>
			<CardBody>
				<CardTitle
					containerClass="d-flex align-items-center justify-content-between mb-3"
					title="Messages"
					menuItems={[{ label: 'Settings' }, { label: 'Action' }]}
				/>

				<MessageList>
					<MessageItem>
						<div className="inbox-item-img">
							<Image src={profileImg} height={40} width={40} className="rounded-circle" alt="" />
						</div>
						<p className="inbox-item-author">Tomaslau</p>
						<p className="inbox-item-text">I&apos;ve finished it! See you so...</p>
						<p className="inbox-item-date">
							<Link href="" className="btn btn-sm btn-link text-info font-13">
								Reply
							</Link>
						</p>
					</MessageItem>

					<MessageItem>
						<div className="inbox-item-img">
							<Image src={avatar1} height={40} width={40} className="rounded-circle" alt="" />
						</div>
						<p className="inbox-item-author">Stillnotdavid</p>
						<p className="inbox-item-text">This theme is awesome!</p>
						<p className="inbox-item-date">
							<Link href="" className="btn btn-sm btn-link text-info font-13">
								Reply
							</Link>
						</p>
					</MessageItem>

					<MessageItem>
						<div className="inbox-item-img">
							<Image src={avatar2} height={40} width={40} className="rounded-circle" alt="" />
						</div>
						<p className="inbox-item-author">Kurafire</p>
						<p className="inbox-item-text">Nice to meet you</p>
						<p className="inbox-item-date">
							<Link href="" className="btn btn-sm btn-link text-info font-13">
								Reply
							</Link>
						</p>
					</MessageItem>

					<MessageItem>
						<div className="inbox-item-img">
							<Image src={avatar3} height={40} width={40} className="rounded-circle" alt="" />
						</div>
						<p className="inbox-item-author">Shahedk</p>
						<p className="inbox-item-text">Hey! there I&apos;m available...</p>
						<p className="inbox-item-date">
							<Link href="" className="btn btn-sm btn-link text-info font-13">
								Reply
							</Link>
						</p>
					</MessageItem>

					<MessageItem>
						<div className="inbox-item-img">
							<Image src={avatar6} height={40} width={40} className="rounded-circle" alt="" />
						</div>
						<p className="inbox-item-author">Adhamdannaway</p>
						<p className="inbox-item-text">This theme is awesome!</p>
						<p className="inbox-item-date">
							<Link href="" className="btn btn-sm btn-link text-info font-13">
								Reply
							</Link>
						</p>
					</MessageItem>
				</MessageList>
			</CardBody>
		</Card>
	);
};

export default Messages;
