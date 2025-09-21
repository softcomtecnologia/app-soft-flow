import avatar1 from '@/assets/images/users/avatar-1.jpg';
import avatar2 from '@/assets/images/users/avatar-2.jpg';
import avatar3 from '@/assets/images/users/avatar-3.jpg';
import avatar4 from '@/assets/images/users/avatar-4.jpg';
import avatar5 from '@/assets/images/users/avatar-5.jpg';
import avatar6 from '@/assets/images/users/avatar-6.jpg';
import avatar7 from '@/assets/images/users/avatar-7.jpg';
import avatar8 from '@/assets/images/users/avatar-8.jpg';
import avatar9 from '@/assets/images/users/avatar-9.jpg';
import avatar10 from '@/assets/images/users/avatar-10.jpg';
import { Case } from './types';

export const casesData: Case[] = [
  {
    caseNumber: '10010',
    openedBy: { name: 'Jerry Geiger', avatar: avatar1 },
    status: 'Aberto',
    version: 'v1.12.0',
    hoursOpen: 6,
    summary: 'Erro intermitente ao salvar itens na agenda compartilhada.',
  },
  {
    caseNumber: '10009',
    openedBy: { name: 'Adam Thomas', avatar: avatar2 },
    status: 'Aberto',
    version: 'v1.11.4',
    hoursOpen: 14,
    summary: 'Notificações não chegam para usuários iOS em canais privados.',
  },
  {
    caseNumber: '10008',
    openedBy: { name: 'Sara Lewis', avatar: avatar3 },
    status: 'Aberto',
    version: 'v1.11.3',
    hoursOpen: 2,
    summary: 'Falha ao anexar arquivos acima de 10MB.',
  },
  {
    caseNumber: '10007',
    openedBy: { name: 'Myrtle Johnson', avatar: avatar4 },
    status: 'Aberto',
    version: 'v1.10.9',
    hoursOpen: 33,
    summary: 'Views da agenda não persistem após recarregar a página.',
  },
  {
    caseNumber: '10006',
    openedBy: { name: 'Bryan Collier', avatar: avatar5 },
    status: 'Aberto',
    version: 'v1.10.9',
    hoursOpen: 4,
    summary: 'Filtro por squad retorna itens de outras equipes.',
  },
  {
    caseNumber: '10005',
    openedBy: { name: 'Joshua Moody', avatar: avatar6 },
    status: 'Aberto',
    version: 'v1.10.2',
    hoursOpen: 58,
    summary: 'Exportação CSV gera colunas trocadas (horas/descrição).',
  },
  {
    caseNumber: '10004',
    openedBy: { name: 'John Clune', avatar: avatar7 },
    status: 'Aberto',
    version: 'v1.9.7',
    hoursOpen: 8,
    summary: 'Erro 403 ao compartilhar eventos com convidados externos.',
  },
  {
    caseNumber: '10003',
    openedBy: { name: 'Jamie Romero', avatar: avatar8 },
    status: 'Aberto',
    version: 'v1.9.5',
    hoursOpen: 1,
    summary: 'Botão de editar evento não habilita campos no Safari.',
  },
  {
    caseNumber: '10002',
    openedBy: { name: 'Clint Percival', avatar: avatar9 },
    status: 'Aberto',
    version: 'v1.9.2',
    hoursOpen: 19,
    summary: 'Integração com Slack não cria itens de agenda automaticamente.',
  },
  {
    caseNumber: '10001',
    openedBy: { name: 'Donna Lynch', avatar: avatar10 },
    status: 'Aberto',
    version: 'v1.8.0',
    hoursOpen: 72,
    summary: 'Timezone incorreto em eventos criados por usuários de PT-BR.',
  },
];
