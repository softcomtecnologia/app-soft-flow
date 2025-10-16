import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { Badge, FormCheck, Table } from 'react-bootstrap';
import { ICase } from '@/types/cases/ICase';
import ListSkelleton from '@/app/(admin)/apps/cases/list/skelletons/listSkelleton';

type Props = {
	data: ICase[] | null;
	loading: boolean;
};

const CasesTable = ({ data, loading }: Props) => {
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
				<th>Aberto por</th>
				<th>Produto</th>
				<th>Versão</th>
				<th>Tempo (Minutos)</th>
				<th>Descrição / Resumo</th>
				<th>Status</th>
				<th style={{ width: '125px' }}>Ações</th>
			</tr>
			</thead>

			<tbody>
			{loading ? (
				<ListSkelleton rows={10} />
			) : (data || []).length ? (
				(data || []).map((c) => (
					<tr key={c.numero_caso}>
						<td>
							<form>
								<FormCheck type="checkbox" id={`${c.numero_caso}`} />
							</form>
						</td>

						<td>
							<Link href="#" className="text-body fw-bold">
								{c.numero_caso}
							</Link>
						</td>

						<td><span className="text-muted">{c.atribuido_para_nome}</span></td>

						<td><span className="text-muted">{c.produto}</span></td>

						<td><span className="text-muted">{c.versao_produto}</span></td>

						<td><span className="fw-semibold">{c.estimado}</span></td>

						<td style={{ maxWidth: 360 }}>
							<p className="mb-0 text-truncate" title={c.descricao_resumo}>
								{c.descricao_resumo}
							</p>
						</td>

						<td>
							<h5 className="my-0">
									{c.status_caso}
							</h5>
						</td>

						<td>
							<Link
								href="#"
								className="action-icon"
								aria-label="Editar caso"
							>
								<i className="mdi mdi-square-edit-outline"></i>
							</Link>
							<Link
								href="#"
								className="action-icon"
								aria-label="Excluir caso"
							>
								<i className="mdi mdi-delete"></i>
							</Link>
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
		</Table>
	);
};

export default CasesTable;
