import { Card, CardBody } from 'react-bootstrap';
import statsImg from '@/assets/images/svg/email-campaign.svg';
import Image from 'next/image';

const Statistics = () => {
	/**
	 * Live count generator
	 */
	// const liveCountGenerator = () => {
	// 	setInterval(function () {
	// 		const activeUsersCount = Math.floor(Math.random() * 600 + 150);

	// 		const activeUserElement = document.getElementById('active-users-count');
	// 		if (activeUserElement) {
	// 			activeUserElement.innerHTML = activeUsersCount.toString();
	// 		}

	// 		const activeViewsElement = document.getElementById('active-views-count');
	// 		if (activeViewsElement) {
	// 			activeViewsElement.innerHTML = Math.floor(
	// 				Math.random() * activeUsersCount + 200
	// 			).toString();
	// 		}
	// 	}, 2000);
	// };
	// liveCountGenerator();

	return (
		<>
			<Card className="tilebox-one">
				<CardBody>
					<i className="uil uil-users-alt float-end"></i>
					<h6 className="text-uppercase mt-0">Active Users</h6>
					<h2 className="my-2" id="active-users-count">
						121
					</h2>
					<p className="mb-0 text-muted">
						<span className="text-success me-2">
							<span className="mdi mdi-arrow-up-bold"></span> 5.27%
						</span>
						<span className="text-nowrap">Since last month</span>
					</p>
				</CardBody>
			</Card>

			<Card className="tilebox-one">
				<CardBody>
					<i className="uil uil-window-restore float-end"></i>
					<h6 className="text-uppercase mt-0">Views per minute</h6>
					<h2 className="my-2" id="active-views-count">
						560
					</h2>
					<p className="mb-0 text-muted">
						<span className="text-danger me-2">
							<span className="mdi mdi-arrow-down-bold"></span> 1.08%
						</span>
						<span className="text-nowrap">Since previous week</span>
					</p>
				</CardBody>
			</Card>

			<Card className="cta-box overflow-hidden">
				<CardBody>
					<div className="d-flex align-items-center">
						<div>
							<h3 className="m-0 fw-normal cta-box-title">
								Enhance your <b>Campaign</b> for better outreach
								<i className="mdi mdi-arrow-right"></i>
							</h3>
						</div>
						<Image className="ms-3" src={statsImg} width="92" alt="Generic placeholder" />
					</div>
				</CardBody>
			</Card>
		</>
	);
};

export default Statistics;
