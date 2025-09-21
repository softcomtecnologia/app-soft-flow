import Link from 'next/link';
import { Card, CardBody } from 'react-bootstrap';

const SellerBox = () => {
	return (
		<Card>
			<CardBody>
				<h4 className="header-title mt-0 mb-3">Seller Information</h4>
				<p className="text-muted font-13">
					Hye, I’m Michael Franklin residing in this beautiful world. I create websites and mobile apps with great UX and UI design. I have done work
					with big companies like Nokia, Google and Yahoo. Meet me or Contact me for any queries. One Extra line for filling space. Fill as many you
					want.
				</p>

				<hr />

				<div className="text-start">
					<p className="text-muted">
						<strong>Full Name :</strong>
						<span className="ms-2">Michael A. Franklin</span>
					</p>

					<p className="text-muted">
						<strong>Mobile :</strong>
						<span className="ms-2">(+12) 123 1234 567</span>
					</p>

					<p className="text-muted">
						<strong>Email :</strong> <span className="ms-2">coderthemes@gmail.com</span>
					</p>

					<p className="text-muted">
						<strong>Location :</strong> <span className="ms-2">USA</span>
					</p>

					<p className="text-muted">
						<strong>Languages :</strong>
						<span className="ms-2"> English, German, Spanish </span>
					</p>
					<p className="text-muted mb-0">
						<strong>Elsewhere :</strong>
						<Link className="d-inline-block ms-2 text-muted" href="">
							<i className="mdi mdi-facebook"></i>
						</Link>
						<Link className="d-inline-block ms-2 text-muted" href="">
							<i className="mdi mdi-twitter"></i>
						</Link>
						<Link className="d-inline-block ms-2 text-muted" href="">
							<i className="mdi mdi-skype"></i>
						</Link>
					</p>
				</div>
			</CardBody>
		</Card>
	);
};

export default SellerBox;
