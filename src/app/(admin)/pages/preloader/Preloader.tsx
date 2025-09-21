'use client';
import { usePreloader } from './hooks';

const Preloader = () => {
	usePreloader();

	return (
		<div id="preloader">
			<div id="status">
				<div className="bouncing-loader">
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
		</div>
	);
};

export default Preloader;
