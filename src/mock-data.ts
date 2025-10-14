import { Course, Trail, TrailContentItem, Event, Channel, Pulse, Group } from './types';

export const EMPTY_COURSE: Course = {
  name: '',
  internalCode: '',
  category: 'Sem Categoria',
  language: 'pt-BR',
  description: '',
  bannerUrl: null,
  cardUrl: null,
  workload: '00:00',
  courseType: 'type1',
  evaluationType: 'eval1',
  isActive: true,
  enableSatisfactionSurvey: true,
  allowRetake: false,
  allowRetakeForFailed: false,
  minimumPerformanceRequired: false,
  hasCustomMetadata: false,
  isTemporary: false,
  contentLocking: {
    enabled: false,
    minimumTime: 10
  },
  hasCustomCertificate: false,
  visibility: 'internal',
  topics: []
};


export const MOCK_COURSE_TEMPLATE: Course = {
  name: 'Integração de Novos Colaboradores',
  internalCode: 'INC-2024',
  category: 'Recursos Humanos',
  language: 'pt-BR',
  description: 'Um processo de integração padrão para todos os novos contratados. Cobre a cultura da empresa, políticas e ferramentas essenciais.',
  bannerUrl: null,
  cardUrl: null,
  workload: '08:00',
  courseType: 'type2',
  evaluationType: 'eval2',
  isActive: true,
  enableSatisfactionSurvey: true,
  allowRetake: true,
  allowRetakeForFailed: true,
  minimumPerformanceRequired: false,
  hasCustomMetadata: false,
  isTemporary: false,
  contentLocking: {
    enabled: false,
    minimumTime: 10
  },
  hasCustomCertificate: true,
  visibility: 'internal',
  topics: [
    {
      id: 'topic_1',
      title: 'Módulo 1: Boas-vindas à Empresa',
      contents: [
        { id: 'content_1', type: 'video', title: 'Uma Mensagem do nosso CEO', description: '', source: 'https://www.youtube.com/watch?v=nO_d_J-h3bY'},
        { id: 'content_2', type: 'document', title: 'Manual da Empresa', description: '', source: ''}
      ]
    },
    {
      id: 'topic_2',
      title: 'Módulo 2: Ferramentas e Sistemas',
      contents: [
        { id: 'content_3', type: 'video', title: '6 dicas essenciais de como dar feedback', description: 'Episódio 2', source: 'https://www.youtube.com/watch?v=3z_PYm_H50I'}
      ]
    }
  ]
};

export const EMPTY_TRAIL: Trail = {
  name: '',
  description: '',
  trailType: 'Técnico',
  language: 'pt-BR',
  isActive: true,
  expirationDate: null,
  hasCertificate: false,
  bannerUrl: null,
  cardUrl: null,
  content: []
};

export const MOCK_TRAIL_TEMPLATE: Trail = {
  name: 'Trilha de Vendas para Iniciantes',
  description: 'Uma trilha completa para capacitar novos membros da equipe de vendas, cobrindo desde a prospecção até o fechamento.',
  trailType: 'Técnico',
  language: 'pt-BR',
  isActive: true,
  expirationDate: null,
  hasCertificate: true,
  bannerUrl: null,
  cardUrl: null,
  content: [
    { id: 'm_1', type: 'mission', title: 'Missão: Onboarding de Vendas', duration: '2h' },
    { id: 'p_1', type: 'pulse', title: 'Pulse: Novas Técnicas de Fechamento', duration: '15min' },
    { id: 'p_2', type: 'pulse', title: 'Pulse: Lidando com Objeções', duration: '20min' },
    { id: 'm_2', type: 'mission', title: 'Missão: Cultura da Empresa', duration: '1h 30min' },
  ]
};

export const MOCK_SEARCHABLE_CONTENT: TrailContentItem[] = [
  { id: 'm_1', type: 'mission', title: 'Missão: Onboarding de Vendas', duration: '2h' },
  { id: 'p_1', type: 'pulse', title: 'Pulse: Novas Técnicas de Fechamento', duration: '15min' },
  { id: 'm_2', type: 'mission', title: 'Missão: Cultura da Empresa', duration: '1h 30min' },
  { id: 'p_2', type: 'pulse', title: 'Pulse: Lidando com Objeções', duration: '20min' },
  { id: 'm_3', type: 'mission', title: 'Missão: Segurança da Informação', duration: '4h' },
  { id: 'p_3', type: 'pulse', title: 'Pulse: Phishing - Como se Proteger', duration: '10min' },
];

export const EMPTY_EVENT: Event = {
  name: '',
  description: '',
  category: 'Sem Categoria',
  language: 'pt-BR',
  missionType: 'presencial',
  internalCode: '',
  evaluationType: 'eval1',
  bannerUrl: null,
  cardUrl: null,
  isActive: true,
  isEvaluationRequired: false,
  allowEnrollmentRenewal: false,
  minimumPerformance: 70,
  expirationDate: null,
  completionGoalDays: 0,
  minimumContentProgress: 100,
  hasCustomCertificate: false,
  groups: [],
  contributors: [],
  address: '',
  callLink: '',
  vacancies: 0,
  allowSelfPresence: false,
  notifyEnrolledUsers: false,
  dates: [],
  supportMaterials: [],
  instructors: [],
};

export const MOCK_EVENT_TEMPLATE: Event = {
  name: 'Workshop de Design Thinking',
  description: 'Um workshop prático para aprender e aplicar os princípios do Design Thinking em problemas reais de negócio.',
  category: 'Inovação',
  language: 'pt-BR',
  missionType: 'presencial',
  internalCode: 'EVT-DT-2024',
  evaluationType: 'eval1',
  bannerUrl: null,
  cardUrl: null,
  isActive: true,
  isEvaluationRequired: true,
  allowEnrollmentRenewal: false,
  minimumPerformance: 80,
  expirationDate: '2024-12-31',
  completionGoalDays: 7,
  minimumContentProgress: 100,
  hasCustomCertificate: true,
  groups: [],
  contributors: [],
  address: 'Rua da Inovação, 123, Sala 5, São Paulo - SP',
  callLink: '',
  vacancies: 25,
  allowSelfPresence: true,
  notifyEnrolledUsers: true,
  dates: [
      { id: `date_${Date.now()}`, startDate: '2024-10-20T09:00', endDate: '2024-10-20T17:00' }
  ],
  supportMaterials: [],
  instructors: [
      { id: `inst_${Date.now()}`, name: 'Ana Inovadora' }
  ],
};

export const EMPTY_CHANNEL: Channel = {
  name: '',
  description: '',
  category: 'Geral',
  channelType: 'Educação',
  language: 'pt-BR',
  isActive: true,
  coverImageUrl: null,
};

export const MOCK_CHANNEL_TEMPLATE: Channel = {
  name: 'Canal de Dicas de Produtividade',
  description: 'Um canal focado em compartilhar dicas rápidas e pulses sobre como ser mais produtivo no dia a dia.',
  category: 'Desenvolvimento Pessoal',
  channelType: 'Dicas',
  language: 'pt-BR',
  isActive: true,
  coverImageUrl: null,
};

export const EMPTY_PULSE: Pulse = {
  type: 'text',
  name: '',
  description: '',
  coverImageUrl: null,
  status: 'draft',
  fileName: '',
  linkUrl: '',
  textContent: '',
  questions: [],
  config: {
    questionsToDisplay: null,
    randomizeQuestions: false,
    randomizeAlternatives: false,
    retakeAttempts: 1,
    showImmediateFeedback: true,
    maxTimeMinutes: null
  }
};

export const MOCK_GROUPS: Group[] = [
  { id: '1', name: 'Todos os Colaboradores', users: 150, missions: 5, learning_trails: 2, channels: 3, is_integration: true },
  { id: '2', name: 'Equipe de Vendas', users: 25, missions: 12, learning_trails: 4, channels: 1 },
  { id: '3', name: 'Desenvolvimento', users: 40, missions: 8, learning_trails: 3, channels: 5 },
  { id: '4', name: 'Liderança', users: 15, missions: 20, learning_trails: 6, channels: 2 },
  { id: '5', name: 'Marketing', users: 18, missions: 10, learning_trails: 3, channels: 4 },
  { id: '6', name: 'Recursos Humanos', users: 8, missions: 7, learning_trails: 2, channels: 2 },
];
