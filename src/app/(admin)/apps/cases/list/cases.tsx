import Link from 'next/link';
import { DropdownButton, DropdownItem, FormCheck, Table } from 'react-bootstrap';
import { ICase } from '@/types/cases/ICase';
import ListSkelleton from '@/app/(admin)/apps/cases/list/skelletons/listSkelleton';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { useCasesContext } from '@/contexts/casesContext';
import CasesModalResume from '@/app/(admin)/apps/cases/list/casesModalResume';
import { useState } from 'react';

type Props = {
	data: ICase[] | null;
	loading: boolean;
};

const CasesTable = ({ data, loading }: Props) => {

	const { fetchEspecifiedCases} = useCasesContext();
	const [openResumeModal, setOpenResumeModal] = useState(false);
	const [especifiedCase, setEspecifiedCase] = useState<ICase | null>(null);

	const caseEspecifiedModal = (id:string) => {
		setEspecifiedCase(null)
		fetchEspecifiedCases(id).then(response => {
			if(response) {
				setEspecifiedCase(response.data)
			}
		});
		setOpenResumeModal(true);
	}

	return (
		<Table responsive className="table-centered table-nowrap mb-0">
			<thead className="table-light">
			<tr>
				<th style={{ width: '20px' }}>
					<form>
						<FormCheck type="checkbox" id="all-cases" />
					</form>
				</th>
				<th>Número do Caso</th>
				<th>Atribuido</th>
				<th>Produto</th>
				<th>Versão</th>
				<th>Prioridade</th>
				<th>Descrição / Resumo</th>
				<th>Status</th>
				<th style={{ width: '125px' }}>Ações</th>
			</tr>
			</thead>

			<tbody>
			{loading ? (
				<ListSkelleton rows={10} />
			) : (data || []).length ? (
				(data || []).map((c, index) => (
					<tr key={`${c.caso.id}-${index}`}>
						<td>
							<form>
								<FormCheck type="checkbox" id={`${c.caso.id}`} />
							</form>
						</td>

						<td>
							<Link href="#" className="text-body fw-bold">
								{c.caso.id}
							</Link>
						</td>

						<td><span className="text-muted">{c.caso.usuarios.desenvolvimento?.nome}</span></td>

						<td><span className="text-muted">{c.produto?.nome}</span></td>

						<td><span className="fw-semibold">{c.caso.campos_adicionais.versao_produto}</span></td>

						<td><span className="text-muted">{c.caso.caracteristicas.prioridade}</span></td>

						<td style={{ maxWidth: 360 }}>
							<p className="mb-0 text-truncate" title={c.caso.textos.descricao_resumo}>
								{c.caso.textos.descricao_resumo}
							</p>
						</td>

						<td>
							<h5 className="my-0">
									{c.caso.status.descricao}
							</h5>
						</td>

						<td>
							<DropdownButton variant="light" title={<IconifyIcon icon={"lucide:align-left"}/>}>
								<DropdownItem className='text-center' onClick={() => caseEspecifiedModal(`${c.caso.id}`)}>Visualização Resumida</DropdownItem>
							</DropdownButton>
						</td>
					</tr>
				))
			) : (
				<tr>
					<td colSpan={8} className="text-center text-muted py-4">
						Nenhum caso encontrado.
					</td>
				</tr>
			)}
			</tbody>
		<CasesModalResume setOpen={setOpenResumeModal} open={openResumeModal} case={especifiedCase}/>
		</Table>
	);
};

export default CasesTable;
