import { Dropdown } from 'react-bootstrap';
import { useToggle } from '@/hooks';
import Link from 'next/link';

const SearchDropdown = () => {
	const [isOpen, toggleDropdown] = useToggle();

	return (
		<Dropdown show={isOpen} onToggle={toggleDropdown}>
			<Dropdown.Toggle variant="link" id="dropdown-apps" as={Link} href="" onClick={toggleDropdown} className="nav-link dropdown-toggle arrow-none">
				<i className="ri-search-line font-22"></i>
			</Dropdown.Toggle>

			<Dropdown.Menu className="dropdown-menu-animated dropdown-lg p-0">
				<form className="p-3">
					<input type="text" className="form-control" placeholder="Search ..." />
				</form>
			</Dropdown.Menu>
		</Dropdown>
	);
};

export default SearchDropdown;
