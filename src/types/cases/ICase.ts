export interface ICase {
	id_projeto: number;
	numero_caso: number;
	usuario: string;
	di: string; // Data de início
	df: string; // Data de fim
	datas: string; // Data relacionada ao caso (talvez de criação ou modificação)
	produto: string;
	produto_id: number;
	descricao_projeto: string;
	versao_produto: string;
	prioridade: string;
	tipo_categoria: string;
	tipo_estado: string;
	tipo_resolucao: string;
	descricao_resumo: string;
	atribuido_para_nome: string;
	modulo: string | null;
	equivalencia: string;
	bloqueado: boolean;
	tempo_status: string;
	status_tempo: string;
	nao_planejado: boolean;
	estimado: number;
	realizado: number;
	qtd_retorno: number;
	retorno: number;
	qtd_testando: number;
	testando: number;
	qtd_desenvolvendo: number;
	desenvolvendo: number;
	atribuido_para: number;
	id_origem: number;
	tipo_origem: string;
	liberacao: boolean;
	prazo_conclusao: string | null;
	relator: number;
	setor: string;
	contador_producao: number;
	realizado_nao_planejado: number;
	dev_casos_id: number | null;
	faq_id: number | null;
	reuso_id: number | null;
	faq_tempo_medio_caso: number | null;
	valeu_caso: number;
	mostrar_teste: boolean;
	teste_valeu: number | null;
	teste_faq_id: number | null;
	status_caso: string;
	setor_projeto: string;
	entregue: string | null;
	passos_para_reproduzir: string | null;
	tamanho: number;
	id_usuario_abertura_caso: number;
}

export interface CaseApiResponse {
	success: boolean;
	data: ICase[];
}