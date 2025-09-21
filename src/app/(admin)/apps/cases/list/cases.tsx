import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { Badge, FormCheck, Table } from 'react-bootstrap';
import { Case } from './types'; 

export type CasesProps = {
  data: Case[];
};

const CasesTable = ({ data }: CasesProps) => {
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
          <th>Versão</th>
          <th>Tempo (h)</th>
          <th>Descrição / Resumo</th>
          <th>Status</th>
          <th style={{ width: '125px' }}>Ações</th>
        </tr>
      </thead>
      <tbody>
        {(data || []).map((c, index) => (
          <tr key={index}>
            <td>
              <form>
                <FormCheck type="checkbox" id={c.caseNumber} />
              </form>
            </td>

            <td>
              <Link href="#" className="text-body fw-bold">
                {c.caseNumber}
              </Link>
            </td>

            <td>
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0">
                  <Image src={c.openedBy.avatar} className="rounded-circle avatar-xs" alt={c.openedBy.name} />
                </div>
                <div className="flex-grow-1 ms-2">
                  <h5 className="my-0">{c.openedBy.name}</h5>
                </div>
              </div>
            </td>

            <td>
              <span className="text-muted">{c.version}</span>
            </td>

            <td>
              <span className="fw-semibold">{c.hoursOpen}</span>
            </td>

            <td style={{ maxWidth: 360 }}>
              <p className="mb-0 text-truncate" title={c.summary}>
                {c.summary}
              </p>
            </td>

            <td>
              <h5 className="my-0">
                <Badge
                  bg=""
                  className={classNames({
                    'badge-success-lighten': c.status === 'Aberto',
                    'badge-warning-lighten': c.status === 'Em Análise',
                    'badge-secondary-lighten': c.status === 'Fechado',
                  })}
                >
                  {c.status}
                </Badge>
              </h5>
            </td>

            <td>
              <Link href="#" className="action-icon" aria-label="Editar caso">
                <i className="mdi mdi-square-edit-outline"></i>
              </Link>
              <Link href="#" className="action-icon" aria-label="Excluir caso">
                <i className="mdi mdi-delete"></i>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default CasesTable;