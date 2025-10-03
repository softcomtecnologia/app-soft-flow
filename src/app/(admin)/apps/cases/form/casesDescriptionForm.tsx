import { Form, Card } from 'react-bootstrap';
import Select from 'react-select';
import { TextAreaInput, TextInput } from '@/components/Form';

export default function CasesDescriptionForm() {
	return (
		<div className="container mt-4">
			<Card className="shadow-sm rounded-3">
				<Card.Body>
					<div className={'row col-md-12 mt-2'}>
						<TextInput type={'text'} name={'description-resumo'} label={'Resumo da descrição'}/>
					</div>
					<div className={'row col-md-12 mt-2'}>
						<TextAreaInput  name={'description-resumo'} label={'Descrição Completa'}/>
					</div>
					<div className={'row col-md-12 mt-2'}>
						<TextInput type={'text'} name={'description-resumo'} label={'Anexo'}/>
					</div>
				</Card.Body>
			</Card>
		</div>
	);
}
