import { Dropdown } from 'react-bootstrap';
import classNames from 'classnames';
import { ProfileOption } from './types';
import { useToggle } from '@/hooks';
import Link from 'next/link';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';

type ProfileDropdownProps = {
	menuItems: Array<ProfileOption>;
	userImage: StaticImageData;
	username: string;
};

const ProfileDropdown = ({ username, menuItems, userImage }: ProfileDropdownProps) => {
	const [isOpen, toggleDropdown] = useToggle();

	return (
		<Dropdown show={isOpen} onToggle={toggleDropdown}>
			<Dropdown.Toggle
				variant="link"
				id="dropdown-profile"
				as={'button'}
				onClick={toggleDropdown}
				className="nav-link dropdown-toggle arrow-none nav-user px-2"
			>
				<span className="account-user-avatar">
					<Image src={userImage} className="rounded-circle" width={32} alt="user" />
				</span>
				<span className="d-lg-flex flex-column gap-1 d-none">
					<h5 className="my-0">{username}</h5>
				</span>
			</Dropdown.Toggle>
			<Dropdown.Menu align={'end'} className="dropdown-menu-animated profile-dropdown">
				<div onClick={toggleDropdown}>
					<div className="dropdown-header noti-title">
						<h6 className="text-overflow m-0">Bem vindo!</h6>
					</div>
					{menuItems.map((item, i) => {
						return (
							<Link href={item.redirectTo} className="dropdown-item notify-item" key={i + '-profile-menu'}>
								<i className={classNames(item.icon, 'me-1')}></i>
								<span>{item.label}</span>
							</Link>
						);
					})}
				</div>
			</Dropdown.Menu>
		</Dropdown>
	);
};

export default ProfileDropdown;
