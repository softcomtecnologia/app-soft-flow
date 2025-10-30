"use client";

import { Placeholder } from "react-bootstrap";

type Props = {
	rows: number;
};

export default function MobileCaseSkeleton({ rows }: Props) {
	return (
		<>
			{Array.from({ length: rows }).map((_, index) => (
				<div key={`case-mobile-skeleton-${index}`} className="border rounded-3 p-3 mb-3 shadow-sm bg-body-tertiary">
					<Placeholder as="div" animation="glow">
						<Placeholder xs={5} className="mb-2" />
						<Placeholder xs={8} className="mb-2" />
						<Placeholder xs={6} className="mb-2" />
						<Placeholder xs={10} className="mb-2" />
						<Placeholder xs={4} />
					</Placeholder>
				</div>
			))}
		</>
	);
}
