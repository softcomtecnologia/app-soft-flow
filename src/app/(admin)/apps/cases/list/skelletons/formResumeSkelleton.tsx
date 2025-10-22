import { Placeholder } from 'react-bootstrap';

export default function FormResumeSkelleton() {
	return (
		<>
			<Placeholder as="span" animation="glow">
				{/* Ajuste a altura do Placeholder para a altura típica de um input */}
				<Placeholder xs={12} style={{ height: '38px' }} />
			</Placeholder>
		</>
	);
};
