'use client';
import { ApexOptions } from 'apexcharts';
const Chart = dynamic(() => import('react-apexcharts'),{ssr: false});
import { Card, Nav, NavItem, NavLink, Tab } from 'react-bootstrap';
import useBalanceStatus from './useBalanceStatus';
import dynamic from "next/dynamic";

const BalanceStatus = () => {
	const { getDayBalance, getWeekBalance, getMonthBalance, getYearBalance } = useBalanceStatus();

	const apexChartOpts: ApexOptions = {
		chart: {
			type: 'area',
			height: 350,
			toolbar: {
				show: false,
			},
		},
		colors: ['#0acf97'],
		dataLabels: {
			enabled: false,
		},
		stroke: {
			width: 1,
		},
		markers: {
			size: 0,
		},
		xaxis: {
			type: 'datetime',
			tickAmount: 6,
		},
		yaxis: {
			labels: {
				formatter: function (value) {
					return '$' + value;
				},
			},
		},
		tooltip: {
			x: {
				format: 'dd MMM yyyy',
			},
		},
		fill: {
			type: 'gradient',
			gradient: {
				shadeIntensity: 1,
				opacityFrom: 0.7,
				opacityTo: 0,
				stops: [0, 100],
			},
		},
	};

	return (
		<Card>
			<Card.Body>
				<Tab.Container defaultActiveKey="day">
					<div className="align-items-center d-sm-flex justify-content-sm-between mb-3">
						<h4 className="header-title mb-0">Balance Status</h4>
						<Nav as="ul" variant="pills" className="bg-nav-pills p-1 rounded">
							<NavItem as="li">
								<NavLink className="py-1" eventKey="day">
									Day
								</NavLink>
							</NavItem>
							<NavItem as="li">
								<NavLink className="py-1" eventKey="week">
									Week
								</NavLink>
							</NavItem>
							<NavItem as="li">
								<NavLink className="py-1" eventKey="month">
									Month
								</NavLink>
							</NavItem>
							<NavItem as="li">
								<NavLink className="py-1" eventKey="year">
									Year
								</NavLink>
							</NavItem>
						</Nav>
					</div>
					<Tab.Content>
						<Tab.Pane eventKey="day">
							<Chart options={apexChartOpts} series={getDayBalance()} type="area" className="apex-charts" height={346} />
						</Tab.Pane>
						<Tab.Pane eventKey="week">
							<Chart options={apexChartOpts} series={getWeekBalance()} type="area" className="apex-charts" height={346} />
						</Tab.Pane>
						<Tab.Pane eventKey="month">
							<Chart options={apexChartOpts} series={getMonthBalance()} type="area" className="apex-charts" height={346} />
						</Tab.Pane>
						<Tab.Pane eventKey="year">
							<Chart options={apexChartOpts} series={getYearBalance()} type="area" className="apex-charts" height={346} />
						</Tab.Pane>
					</Tab.Content>
				</Tab.Container>
			</Card.Body>
		</Card>
	);
};

export default BalanceStatus;
