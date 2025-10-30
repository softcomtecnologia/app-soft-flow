import Link from 'next/link';
import { DropdownButton, DropdownItem, Table } from 'react-bootstrap';
import { ICase } from '@/types/cases/ICase';
import ListSkelleton from '@/app/(admin)/apps/cases/list/skelletons/listSkelleton';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { useCasesContext } from '@/contexts/casesContext';
import CasesModalResume from '@/app/(admin)/apps/cases/list/casesModalResume';
import { useEffect, useRef, useState } from 'react';
import { CASE_CONFLICT_MODAL_CLOSE_EVENT, CASE_RESUME_MODAL_FORCE_CLOSE_EVENT } from '@/constants/caseTimeTracker';
import MobileCaseCard from './components/caseListComponents/MobileCaseCard';
import MobileCaseSkeleton from './components/caseListComponents/MobileCaseSkeleton';

type Props = {
    data: ICase[] | null;
    loading: boolean;
};

const CasesTable = ({ data, loading }: Props) => {
    const { fetchEspecifiedCases, loadMoreCases, pagination, loadingMore } = useCasesContext();
    const [openResumeModal, setOpenResumeModal] = useState(false);
    const [especifiedCase, setEspecifiedCase] = useState<ICase | null>(null);
    const sentinelRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (typeof window === 'undefined') {
            return;
        }

        const handleForceClose = () => {
            setOpenResumeModal(false);
        };

        window.addEventListener(CASE_RESUME_MODAL_FORCE_CLOSE_EVENT, handleForceClose);
        return () => {
            window.removeEventListener(CASE_RESUME_MODAL_FORCE_CLOSE_EVENT, handleForceClose);
        };
    }, []);

    useEffect(() => {
        if (!openResumeModal) {
            setEspecifiedCase(null);
        }
    }, [openResumeModal]);

    useEffect(() => {
        const node = sentinelRef.current;

        if (!node || !pagination?.has_more) {
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        loadMoreCases();
                    }
                });
            },
            {
                root: null,
                rootMargin: '200px 0px 0px 0px',
                threshold: 0,
            },
        );

        observer.observe(node);

        return () => {
            observer.disconnect();
        };
    }, [loadMoreCases, pagination?.has_more, pagination?.next_cursor]);

    const caseEspecifiedModal = (id: string) => {
        if (typeof window !== 'undefined') {
            window.dispatchEvent(new Event(CASE_CONFLICT_MODAL_CLOSE_EVENT));
            window.dispatchEvent(new Event(CASE_RESUME_MODAL_FORCE_CLOSE_EVENT));
        }
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
                            <>
                                {(data || []).map((c, index) => (
                                    <tr key={`${c.caso.id}-${index}`}>
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
                                            <span className="fw-semibold">-</span>
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
                                                    Visualização resumida
                                                </DropdownItem>
                                            </DropdownButton>
                                        </td>
                                    </tr>
                                ))}
                                {loadingMore && <ListSkelleton rows={15} />}
                            </>
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
                    <MobileCaseSkeleton rows={5} />
                ) : (data || []).length ? (
                    <>
                        {(data || []).map((c, index) => (
                            <MobileCaseCard key={`mobile-case-${c.caso.id}-${index}`} item={c} onView={caseEspecifiedModal} />
                        ))}
                        {loadingMore && <MobileCaseSkeleton rows={15} />}
                    </>
                ) : (
                    <p className="text-center text-muted py-4">Nenhum caso encontrado.</p>
                )}
            </div>

            <div
                ref={sentinelRef}
                style={{
                    height: pagination?.has_more ? 1 : 0,
                    width: '100%',
                }}
            />
            <CasesModalResume setOpen={setOpenResumeModal} open={openResumeModal} case={especifiedCase} />
        </>
    );
};

export default CasesTable;
