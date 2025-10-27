import Link from 'next/link';
import { Button, DropdownButton, DropdownItem, FormCheck, Placeholder, Table } from 'react-bootstrap';
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

const MobileSkeleton = ({ rows }: { rows: number }) => (
    <>
        {Array.from({ length: rows }).map((_, index) => (
            <div key={`case-skeleton-${index}`} className="border rounded-3 p-3 mb-3 bg-white">
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

const MobileCaseCard = ({ item, onView }: { item: ICase; onView: (caseId: string) => void }) => {
    const caseId = `${item.caso.id}`;
    const developerName = item.caso.usuarios.desenvolvimento?.nome || 'Nao atribuido';
    const productName = item.produto?.nome || '-';
    const version = item.caso.campos_adicionais.versao_produto || '-';
    const priority = item.caso.caracteristicas.prioridade || 'N/A';
    const status = item.caso.status.descricao;
    const summary = item.caso.textos.descricao_resumo;

    return (
        <div className="border rounded-3 p-3 mb-3 bg-white shadow-sm">
            <div className="d-flex justify-content-between align-items-start mb-2">
                <div>
                    <p className="mb-0 fw-semibold">Caso #{caseId}</p>
                    <p className="mb-0 text-muted small">{developerName}</p>
                </div>
                <span className="badge bg-light text-dark text-uppercase">{priority}</span>
            </div>

            <div className="mb-2">
                <p className="mb-1 text-muted small">Produto</p>
                <p className="mb-0 fw-medium">{productName}</p>
            </div>

            <div className="mb-2 d-flex justify-content-between gap-3">
                <div>
                    <p className="mb-1 text-muted small">Versao</p>
                    <p className="mb-0 fw-medium">{version}</p>
                </div>
                <div className="text-end">
                    <p className="mb-1 text-muted small">Status</p>
                    <p className="mb-0 fw-semibold">{status}</p>
                </div>
            </div>

            <div>
                <p className="mb-1 text-muted small">Resumo</p>
                <p className="mb-0 text-break">{summary}</p>
            </div>

            <div className="mt-3">
                <Button variant="outline-primary" className="w-100" onClick={() => onView(caseId)}>
                    Visualizacao resumida
                </Button>
            </div>
        </div>
    );
};

const CasesTable = ({ data, loading }: Props) => {
    const { fetchEspecifiedCases } = useCasesContext();
    const [openResumeModal, setOpenResumeModal] = useState(false);
    const [especifiedCase, setEspecifiedCase] = useState<ICase | null>(null);

    const caseEspecifiedModal = (id: string) => {
        setEspecifiedCase(null);
        fetchEspecifiedCases(id).then((response) => {
            if (response) {
                setEspecifiedCase(response.data);
            }
        });
        setOpenResumeModal(true);
    };

    return (
        <>
            <div className="d-none d-md-block">
                <Table responsive className="table-centered table-nowrap mb-0">
                    <thead className="table-light">
                        <tr>
                            <th style={{ width: '20px' }}>
                                <form>
                                    <FormCheck type="checkbox" id="all-cases" />
                                </form>
                            </th>
                            <th>Numero do Caso</th>
                            <th>Atribuido</th>
                            <th>Produto</th>
                            <th>Versao</th>
                            <th>Prioridade</th>
                            <th>Descricao / Resumo</th>
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

                                    <td>
                                        <span className="text-muted">{c.caso.usuarios.desenvolvimento?.nome}</span>
                                    </td>

                                    <td>
                                        <span className="text-muted">{c.produto?.nome}</span>
                                    </td>

                                    <td>
                                        <span className="fw-semibold">{c.caso.campos_adicionais.versao_produto}</span>
                                    </td>

                                    <td>
                                        <span className="text-muted">{c.caso.caracteristicas.prioridade}</span>
                                    </td>

                                    <td style={{ maxWidth: 360 }}>
                                        <p className="mb-0 text-truncate" title={c.caso.textos.descricao_resumo}>
                                            {c.caso.textos.descricao_resumo}
                                        </p>
                                    </td>

                                    <td>
                                        <h5 className="my-0">{c.caso.status.descricao}</h5>
                                    </td>

                                    <td>
                                        <DropdownButton variant="light" title={<IconifyIcon icon={"lucide:align-left"} />}>
                                            <DropdownItem className="text-center" onClick={() => caseEspecifiedModal(`${c.caso.id}`)}>
                                                Visualizacao resumida
                                            </DropdownItem>
                                        </DropdownButton>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={9} className="text-center text-muted py-4">
                                    Nenhum caso encontrado.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </div>

            <div className="d-md-none">
                {loading ? (
                    <MobileSkeleton rows={5} />
                ) : (data || []).length ? (
                    (data || []).map((c, index) => (
                        <MobileCaseCard key={`mobile-case-${c.caso.id}-${index}`} item={c} onView={caseEspecifiedModal} />
                    ))
                ) : (
                    <p className="text-center text-muted py-4">Nenhum caso encontrado.</p>
                )}
            </div>

            <CasesModalResume setOpen={setOpenResumeModal} open={openResumeModal} case={especifiedCase} />
        </>
    );
};

export default CasesTable;
