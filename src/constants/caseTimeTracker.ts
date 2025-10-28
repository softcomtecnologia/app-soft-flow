export const ACTIVE_CASE_STORAGE_KEY = 'softflow_active_case';
export const ACTIVE_CASE_EVENT = 'softflow-active-case-updated';

export interface ActiveCaseStorageData {
	caseId: string;
	startedAt: string;
}
