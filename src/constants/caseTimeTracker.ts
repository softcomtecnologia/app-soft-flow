export const ACTIVE_CASE_STORAGE_KEY = 'softflow_active_case';
export const ACTIVE_CASE_EVENT = 'softflow-active-case-updated';
export const CASE_CONFLICT_MODAL_CLOSE_EVENT = 'softflow-case-conflict-close';
export const CASE_RESUME_MODAL_FORCE_CLOSE_EVENT = 'softflow-case-resume-force-close';

export interface ActiveCaseStorageData {
	caseId: string;
	startedAt: string;
}
