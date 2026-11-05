/* ============================================================
   UPTZ · Dashboard de Prácticas y Pasantías
   Aplicación autónoma (sin dependencias) con persistencia local.
   ============================================================ */
'use strict';

/* ------------------------- Constantes ------------------------- */
const STORAGE_KEY = 'uptz_practicas_v2';
const THEME_KEY = 'uptz_practicas_theme';
const PERIODO = '2026-II';

const CARRERAS = [
  'Ingeniería en Informática',
  'Ingeniería en Electrónica',
  'Ingeniería en Mantenimiento Mecánico',
  'Ingeniería en Petróleo',
  'Ingeniería Química',
  'Ingeniería en Alimentos',
  'Licenciatura en Administración',
  'Licenciatura en Contaduría Pública'
];

const LOCALIDADES = [
  'Maracaibo',
  'San Francisco',
  'Cabimas',
  'Lagunillas',
  'Santa Rita',
  'Miranda',
  'Machiques de Perijá',
  'Rosario de Perijá',
  'Jesús Enrique Lossada',
  'Baralt'
];

const DEFAULT_CONFIG = {
  porcentajeMin: 50,
  promedioMin: 12,
  modalidad: 'Presencial',
  exigirExoneracion: true
};

const PAGE_TITLES = {
  resumen: 'Resumen general',
  estudiantes: 'Estudiantes',
  asignaciones: 'Asignaciones',
  empresas: 'Empresas y plazas',
  validacion: 'Validación de requisitos',
  reportes: 'Reportes del periodo'
};

const AVATAR_PALETTES = [
  { bg: 'linear-gradient(135deg,#dbeafe,#bfdbfe)', fg: '#1e4e8c' },
  { bg: 'linear-gradient(135deg,#dcfce7,#bbf7d0)', fg: '#166534' },
  { bg: 'linear-gradient(135deg,#fef3c7,#fde68a)', fg: '#92400e' },
  { bg: 'linear-gradient(135deg,#ede9fe,#ddd6fe)', fg: '#5b21b6' },
  { bg: 'linear-gradient(135deg,#ffe4e6,#fecdd3)', fg: '#9f1239' },
  { bg: 'linear-gradient(135deg,#cffafe,#a5f3fc)', fg: '#155e75' },
  { bg: 'linear-gradient(135deg,#ffedd5,#fed7aa)', fg: '#9a3412' },
  { bg: 'linear-gradient(135deg,#e0e7ff,#c7d2fe)', fg: '#3730a3' }
];

/* --------------------------- Datos demo --------------------------- */
function createSeedState() {
  const empresas = [
    {
      id: 'c1', nombre: 'Tecnipesa C.A.', sector: 'Tecnología y servicios', municipio: 'Maracaibo',
      convenio: 'Activo', contacto: 'Ing. Ricardo Peñaloza', telefono: '+58 261 750 1122',
      plazas: [
        { id: 'c1p1', carrera: 'Ingeniería en Informática', vacantes: 3, tutor: 'Ing. Ricardo Peñaloza' },
        { id: 'c1p2', carrera: 'Ingeniería en Electrónica', vacantes: 2, tutor: 'Ing. Dayana Ferrer' },
        { id: 'c1p3', carrera: 'Licenciatura en Administración', vacantes: 1, tutor: 'Lcda. María Suárez' }
      ]
    },
    {
      id: 'c2', nombre: 'Corpoelec Zulia', sector: 'Energía eléctrica', municipio: 'Maracaibo',
      convenio: 'Activo', contacto: 'Ing. José Ferrer', telefono: '+58 261 718 4400',
      plazas: [
        { id: 'c2p1', carrera: 'Ingeniería en Electrónica', vacantes: 2, tutor: 'Ing. José Ferrer' },
        { id: 'c2p2', carrera: 'Ingeniería en Mantenimiento Mecánico', vacantes: 2, tutor: 'Ing. Pedro Nava' }
      ]
    },
    {
      id: 'c3', nombre: 'PDVSA Occidente', sector: 'Petróleo y gas', municipio: 'Maracaibo',
      convenio: 'Activo', contacto: 'Ing. Carmen Villalobos', telefono: '+58 261 730 9000',
      plazas: [
        { id: 'c3p1', carrera: 'Ingeniería en Petróleo', vacantes: 4, tutor: 'Ing. Carmen Villalobos' },
        { id: 'c3p2', carrera: 'Ingeniería Química', vacantes: 2, tutor: 'Ing. Luis Ávila' },
        { id: 'c3p3', carrera: 'Ingeniería en Mantenimiento Mecánico', vacantes: 2, tutor: 'Ing. Jesús Portillo' }
      ]
    },
    {
      id: 'c4', nombre: 'Hidrolago', sector: 'Servicios públicos', municipio: 'Maracaibo',
      convenio: 'Activo', contacto: 'Ing. Marisela Urdaneta', telefono: '+58 261 741 2000',
      plazas: [
        { id: 'c4p1', carrera: 'Ingeniería Química', vacantes: 2, tutor: 'Ing. Marisela Urdaneta' },
        { id: 'c4p2', carrera: 'Ingeniería en Informática', vacantes: 1, tutor: 'Ing. Andrés Bracho' }
      ]
    },
    {
      id: 'c5', nombre: 'Banco BOD', sector: 'Sector financiero', municipio: 'Maracaibo',
      convenio: 'Activo', contacto: 'Lcdo. Rafael Colina', telefono: '+58 261 710 5500',
      plazas: [
        { id: 'c5p1', carrera: 'Licenciatura en Contaduría Pública', vacantes: 2, tutor: 'Lcdo. Rafael Colina' },
        { id: 'c5p2', carrera: 'Licenciatura en Administración', vacantes: 2, tutor: 'Lcda. Ana Rincón' }
      ]
    },
    {
      id: 'c6', nombre: 'Alcaldía de Maracaibo', sector: 'Sector público', municipio: 'Maracaibo',
      convenio: 'Activo', contacto: 'Lcdo. José Gutiérrez', telefono: '+58 261 720 3000',
      plazas: [
        { id: 'c6p1', carrera: 'Licenciatura en Administración', vacantes: 2, tutor: 'Lcdo. José Gutiérrez' },
        { id: 'c6p2', carrera: 'Ingeniería en Informática', vacantes: 1, tutor: 'Ing. Luis Sánchez' }
      ]
    },
    {
      id: 'c7', nombre: 'Cemex Venezuela', sector: 'Construcción', municipio: 'San Francisco',
      convenio: 'Activo', contacto: 'Ing. Daniela Pérez', telefono: '+58 261 760 8800',
      plazas: [
        { id: 'c7p1', carrera: 'Ingeniería en Mantenimiento Mecánico', vacantes: 2, tutor: 'Ing. Daniela Pérez' },
        { id: 'c7p2', carrera: 'Ingeniería Química', vacantes: 1, tutor: 'Ing. Fernando Silva' }
      ]
    },
    {
      id: 'c8', nombre: 'Fundación UPTZ', sector: 'Educación superior', municipio: 'Maracaibo',
      convenio: 'Institucional', contacto: 'Ing. María González', telefono: '+58 261 700 1200',
      plazas: [
        { id: 'c8p1', carrera: 'Ingeniería en Informática', vacantes: 2, tutor: 'Ing. María González' },
        { id: 'c8p2', carrera: 'Licenciatura en Administración', vacantes: 1, tutor: 'Lcda. Carmen Prieto' }
      ]
    }
  ];

  const estudiantes = [
    {
      id: 'e1', cedula: 'V-25.148.302', nombre: 'Ana Gabriela Pérez', carrera: 'Ingeniería en Informática',
      semestre: 8, materiasAprobadas: 24, materiasTotales: 30, promedio: 16.5,
      fase1: true, fase2: true, universidadOrigen: 'UPTZ', exoneracion: false,
      localidad: 'Maracaibo', modalidad: 'Presencial', email: 'ana.perez@uptz.edu.ve', telefono: '+58 412 650 1122',
      asignacion: { empresaId: 'c1', plazaId: 'c1p1', tutor: 'Ing. Ricardo Peñaloza', inicio: '2026-09-15', estado: 'En curso', fechaAsignacion: '2026-09-10', observaciones: 'Jornada completa en el área de desarrollo de software.' }
    },
    {
      id: 'e2', cedula: 'V-26.331.887', nombre: 'Luis Fernando Rodríguez', carrera: 'Ingeniería en Electrónica',
      semestre: 7, materiasAprobadas: 16, materiasTotales: 32, promedio: 13.2,
      fase1: true, fase2: true, universidadOrigen: 'UPTZ', exoneracion: false,
      localidad: 'San Francisco', modalidad: 'Presencial', email: 'luis.rodriguez@uptz.edu.ve', telefono: '+58 414 780 2244',
      asignacion: { empresaId: 'c2', plazaId: 'c2p1', tutor: 'Ing. José Ferrer', inicio: '2026-10-05', estado: 'En curso', fechaAsignacion: '2026-10-01', observaciones: '' }
    },
    {
      id: 'e3', cedula: 'V-27.205.441', nombre: 'María José González', carrera: 'Licenciatura en Contaduría Pública',
      semestre: 7, materiasAprobadas: 20, materiasTotales: 28, promedio: 15.1,
      fase1: true, fase2: true, universidadOrigen: 'UPTZ', exoneracion: false,
      localidad: 'Maracaibo', modalidad: 'Presencial', email: 'maria.gonzalez@uptz.edu.ve', telefono: '+58 424 615 9080',
      asignacion: null
    },
    {
      id: 'e4', cedula: 'V-28.190.664', nombre: 'Carlos Eduardo Méndez', carrera: 'Ingeniería en Mantenimiento Mecánico',
      semestre: 6, materiasAprobadas: 12, materiasTotales: 30, promedio: 14.0,
      fase1: true, fase2: true, universidadOrigen: 'UPTZ', exoneracion: false,
      localidad: 'Maracaibo', modalidad: 'Presencial', email: 'carlos.mendez@uptz.edu.ve', telefono: '+58 416 332 7810',
      asignacion: null
    },
    {
      id: 'e5', cedula: 'V-27.884.113', nombre: 'Daniela Sofía Bracho', carrera: 'Ingeniería Química',
      semestre: 8, materiasAprobadas: 18, materiasTotales: 26, promedio: 11.4,
      fase1: true, fase2: true, universidadOrigen: 'UPTZ', exoneracion: false,
      localidad: 'Maracaibo', modalidad: 'Presencial', email: 'daniela.bracho@uptz.edu.ve', telefono: '+58 412 205 6644',
      asignacion: null
    },
    {
      id: 'e6', cedula: 'V-25.977.520', nombre: 'José Manuel Urdaneta', carrera: 'Ingeniería en Petróleo',
      semestre: 9, materiasAprobadas: 22, materiasTotales: 30, promedio: 13.8,
      fase1: true, fase2: false, universidadOrigen: 'UPTZ', exoneracion: false,
      localidad: 'Cabimas', modalidad: 'Presencial', email: 'jose.urdaneta@uptz.edu.ve', telefono: '+58 414 908 3311',
      asignacion: null
    },
    {
      id: 'e7', cedula: 'V-28.442.019', nombre: 'Andrea Valentina Chirinos', carrera: 'Licenciatura en Administración',
      semestre: 7, materiasAprobadas: 23, materiasTotales: 28, promedio: 17.3,
      fase1: true, fase2: true, universidadOrigen: 'Otra', exoneracion: false,
      localidad: 'Maracaibo', modalidad: 'Presencial', email: 'andrea.chirinos@gmail.com', telefono: '+58 424 771 5020',
      asignacion: null
    },
    {
      id: 'e8', cedula: 'V-26.774.902', nombre: 'Miguel Ángel Reverol', carrera: 'Ingeniería en Informática',
      semestre: 8, materiasAprobadas: 19, materiasTotales: 30, promedio: 12.8,
      fase1: true, fase2: true, universidadOrigen: 'Otra', exoneracion: true,
      localidad: 'Maracaibo', modalidad: 'Presencial', email: 'miguel.reverol@gmail.com', telefono: '+58 412 884 1190',
      asignacion: null
    },
    {
      id: 'e9', cedula: 'V-27.619.305', nombre: 'Génesis Carolina Petit', carrera: 'Licenciatura en Contaduría Pública',
      semestre: 8, materiasAprobadas: 21, materiasTotales: 26, promedio: 14.7,
      fase1: true, fase2: true, universidadOrigen: 'UPTZ', exoneracion: false,
      localidad: 'Cabimas', modalidad: 'Semipresencial', email: 'genesis.petit@uptz.edu.ve', telefono: '+58 416 447 2233',
      asignacion: null
    },
    {
      id: 'e10', cedula: 'V-25.302.778', nombre: 'Rafael Antonio Nava', carrera: 'Ingeniería en Petróleo',
      semestre: 9, materiasAprobadas: 25, materiasTotales: 32, promedio: 15.9,
      fase1: true, fase2: true, universidadOrigen: 'UPTZ', exoneracion: false,
      localidad: 'Otro estado', modalidad: 'Presencial', email: 'rafael.nava@uptz.edu.ve', telefono: '+58 414 330 8877',
      asignacion: null
    },
    {
      id: 'e11', cedula: 'V-28.906.144', nombre: 'Yoselin Mariana Portillo', carrera: 'Ingeniería en Alimentos',
      semestre: 7, materiasAprobadas: 17, materiasTotales: 30, promedio: 12.0,
      fase1: true, fase2: true, universidadOrigen: 'UPTZ', exoneracion: false,
      localidad: 'Maracaibo', modalidad: 'Presencial', email: 'yoselin.portillo@uptz.edu.ve', telefono: '+58 424 118 9045',
      asignacion: null
    },
    {
      id: 'e12', cedula: 'V-29.551.087', nombre: 'Jesús David Villalobos', carrera: 'Ingeniería en Informática',
      semestre: 5, materiasAprobadas: 10, materiasTotales: 30, promedio: 9.8,
      fase1: false, fase2: false, universidadOrigen: 'UPTZ', exoneracion: false,
      localidad: 'Maracaibo', modalidad: 'Presencial', email: 'jesus.villalobos@uptz.edu.ve', telefono: '+58 412 707 6612',
      asignacion: null
    },
    {
      id: 'e13', cedula: 'V-26.019.553', nombre: 'Paola Andreína Barrios', carrera: 'Ingeniería en Petróleo',
      semestre: 8, materiasAprobadas: 24, materiasTotales: 30, promedio: 16.2,
      fase1: true, fase2: true, universidadOrigen: 'UPTZ', exoneracion: false,
      localidad: 'San Francisco', modalidad: 'Presencial', email: 'paola.barrios@uptz.edu.ve', telefono: '+58 414 606 7734',
      asignacion: { empresaId: 'c3', plazaId: 'c3p1', tutor: 'Ing. Carmen Villalobos', inicio: '2026-11-16', estado: 'Por iniciar', fechaAsignacion: '2026-10-28', observaciones: 'Inducción de seguridad programada para la primera semana.' }
    },
    {
      id: 'e14', cedula: 'V-27.402.810', nombre: 'Samuel Enrique Gutiérrez', carrera: 'Licenciatura en Administración',
      semestre: 6, materiasAprobadas: 15, materiasTotales: 28, promedio: 12.5,
      fase1: true, fase2: true, universidadOrigen: 'UPTZ', exoneracion: false,
      localidad: 'Maracaibo', modalidad: 'Presencial', email: 'samuel.gutierrez@uptz.edu.ve', telefono: '+58 424 519 0067',
      asignacion: null
    },
    {
      id: 'e15', cedula: 'V-26.883.091', nombre: 'Valeria Nicole Salas', carrera: 'Ingeniería en Mantenimiento Mecánico',
      semestre: 7, materiasAprobadas: 20, materiasTotales: 31, promedio: 13.4,
      fase1: true, fase2: true, universidadOrigen: 'UPTZ', exoneracion: false,
      localidad: 'Santa Rita', modalidad: 'Presencial', email: 'valeria.salas@uptz.edu.ve', telefono: '+58 416 220 4418',
      asignacion: null
    }
  ];

  const historial = [
    { mes: 'Feb', total: 54 }, { mes: 'Mar', total: 63 }, { mes: 'Abr', total: 71 },
    { mes: 'May', total: 84 }, { mes: 'Jun', total: 96 }, { mes: 'Jul', total: 101 },
    { mes: 'Ago', total: 108 }, { mes: 'Sep', total: 114 }, { mes: 'Oct', total: 121 },
    { mes: 'Nov', total: 124 }
  ];

  return { estudiantes, empresas, historial, config: { ...DEFAULT_CONFIG } };
}

/* --------------------------- Estado --------------------------- */
let state = loadState();

function loadState() {
  const seed = createSeedState();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return seed;
    const parsed = JSON.parse(raw);
    return {
      estudiantes: Array.isArray(parsed.estudiantes) ? parsed.estudiantes : seed.estudiantes,
      empresas: Array.isArray(parsed.empresas) ? parsed.empresas : seed.empresas,
      historial: Array.isArray(parsed.historial) ? parsed.historial : seed.historial,
      config: { ...DEFAULT_CONFIG, ...(parsed.config || {}) }
    };
  } catch (err) {
    return seed;
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      estudiantes: state.estudiantes,
      empresas: state.empresas,
      historial: state.historial,
      config: state.config
    }));
  } catch (err) {
    /* Almacenamiento no disponible: la sesión sigue funcionando en memoria. */
  }
}

/* --------------------------- Utilidades --------------------------- */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

function esc(value) {
  return String(value == null ? '' : value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function norm(value) {
  return String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

function pct(part, total) {
  if (!total) return 0;
  return Math.round((part / total) * 100);
}

function ico(name) {
  return `<svg class="icon" aria-hidden="true"><use href="#i-${name}"></use></svg>`;
}

function hashText(text) {
  let h = 0;
  const str = String(text || '');
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) | 0;
  return Math.abs(h);
}

function avatarStyle(name) {
  const p = AVATAR_PALETTES[hashText(name) % AVATAR_PALETTES.length];
  return `background:${p.bg};color:${p.fg}`;
}

function initials(name) {
  const particles = ['de', 'del', 'la', 'las', 'los', 'y'];
  const words = String(name || '').trim().split(/\s+/).filter(w => w && !particles.includes(w.toLowerCase()));
  if (!words.length) return '?';
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
}

function todayISO() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function defaultStartDate() {
  const d = new Date();
  d.setDate(d.getDate() + 7);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function formatDate(iso) {
  if (!iso) return '—';
  const d = new Date(iso + 'T00:00:00');
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString('es-VE', { day: '2-digit', month: 'short', year: 'numeric' });
}

function formatLongDate(date = new Date()) {
  return date.toLocaleDateString('es-VE', { day: '2-digit', month: 'long', year: 'numeric' });
}

function getEst(id) {
  return state.estudiantes.find(e => e.id === id) || null;
}

function getEmpresa(id) {
  return state.empresas.find(c => c.id === id) || null;
}

function findPlaza(plazaId) {
  for (const empresa of state.empresas) {
    const plaza = empresa.plazas.find(p => p.id === plazaId);
    if (plaza) return { empresa, plaza };
  }
  return null;
}

function plazaAvailable(plazaId) {
  const found = findPlaza(plazaId);
  if (!found) return 0;
  const used = state.estudiantes.filter(e => e.asignacion && e.asignacion.plazaId === plazaId).length;
  return Math.max(0, found.plaza.vacantes - used);
}

function totalSlots() {
  return state.empresas.reduce((acc, c) => acc + c.plazas.reduce((s, p) => s + Number(p.vacantes || 0), 0), 0);
}

function totalAvailableSlots() {
  return state.empresas.reduce((acc, c) => acc + c.plazas.reduce((s, p) => s + plazaAvailable(p.id), 0), 0);
}

function assignments() {
  return state.estudiantes
    .filter(e => e.asignacion)
    .map(e => {
      const empresa = getEmpresa(e.asignacion.empresaId);
      const plaza = empresa ? empresa.plazas.find(p => p.id === e.asignacion.plazaId) : null;
      return { estudiante: e, empresa, plaza, asignacion: e.asignacion };
    })
    .sort((a, b) => String(b.asignacion.fechaAsignacion || '').localeCompare(String(a.asignacion.fechaAsignacion || '')));
}

/* --------------------- Motor de elegibilidad --------------------- */
function evaluate(est) {
  const cfg = state.config;
  const total = Number(est.materiasTotales) || 0;
  const aprobadas = Number(est.materiasAprobadas) || 0;
  const porcentaje = pct(aprobadas, total);
  const ratio = total > 0 ? (aprobadas / total) * 100 : 0;
  const promedio = Number(est.promedio) || 0;
  const externo = est.universidadOrigen !== 'UPTZ';
  const exoAplica = externo && cfg.exigirExoneracion;

  const items = [
    {
      key: 'materias', short: 'Materias', label: 'Materias aprobadas',
      ok: total > 0 && ratio >= Number(cfg.porcentajeMin), applicable: true,
      detail: `${aprobadas} de ${total} materias · ${porcentaje}%`,
      requirement: `≥ ${cfg.porcentajeMin}%`
    },
    {
      key: 'promedio', short: 'Promedio', label: 'Promedio académico',
      ok: promedio >= Number(cfg.promedioMin), applicable: true,
      detail: `${promedio.toFixed(1)} / 20 puntos`,
      requirement: `≥ ${cfg.promedioMin} pts`
    },
    {
      key: 'sc', short: 'Servicio comunitario', label: 'Servicio comunitario',
      ok: !!(est.fase1 && est.fase2), applicable: true,
      detail: est.fase1 && est.fase2
        ? 'Fase I y Fase II aprobadas'
        : est.fase1
          ? 'Fase I aprobada · Fase II pendiente'
          : est.fase2
            ? 'Fase I pendiente · Fase II aprobada'
            : 'Fases I y II pendientes',
      requirement: 'Fases I y II'
    },
    {
      key: 'contexto', short: 'Contexto Zulia', label: 'Contexto y localidad',
      ok: est.localidad !== 'Otro estado', applicable: true,
      detail: est.localidad === 'Otro estado' ? 'Reside fuera del estado Zulia' : `Municipio ${est.localidad}, Zulia`,
      requirement: 'Municipio del Zulia'
    },
    {
      key: 'modalidad', short: 'Presencial', label: 'Modalidad de estudio',
      ok: est.modalidad === cfg.modalidad, applicable: true,
      detail: est.modalidad === cfg.modalidad ? `${est.modalidad} · modalidad válida` : `${est.modalidad} · no permitida`,
      requirement: cfg.modalidad
    },
    {
      key: 'exoneracion', short: 'Exoneración', label: 'Aprobación por exoneración',
      ok: !exoAplica || !!est.exoneracion,
      applicable: exoAplica,
      detail: !externo
        ? 'No aplica · estudiante UPTZ'
        : !cfg.exigirExoneracion
          ? 'No exigida en este periodo'
          : est.exoneracion
            ? 'Exoneración aprobada'
            : 'Sin aprobación por exoneración',
      requirement: 'Estudiantes externos'
    }
  ];

  const failures = items.filter(i => i.applicable && !i.ok);
  return {
    porcentaje, ratio, promedio, items, failures,
    failureCount: failures.length,
    elegible: failures.length === 0
  };
}

function statusOf(est) {
  const ev = evaluate(est);
  if (ev.elegible && est.asignacion) return { key: 'asignado', label: 'Asignado', cls: 'asignado' };
  if (ev.elegible) return { key: 'elegible', label: 'Elegible', cls: 'elegible' };
  return { key: 'no-elegible', label: 'No elegible', cls: 'no-elegible' };
}

function assignmentBadge(estado) {
  if (estado === 'En curso') return '<span class="badge badge-green">En curso</span>';
  if (estado === 'Por iniciar') return '<span class="badge badge-amber">Por iniciar</span>';
  if (estado === 'Culminada') return '<span class="badge badge-gray">Culminada</span>';
  return `<span class="badge badge-gray">${esc(estado || '—')}</span>`;
}

function getAlerts() {
  return state.estudiantes
    .filter(e => {
      const ev = evaluate(e);
      return !ev.elegible && ev.failureCount === 1 && !e.asignacion;
    })
    .map(e => ({ est: e, ev: evaluate(e), reason: evaluate(e).failures[0] }))
    .sort((a, b) => a.est.nombre.localeCompare(b.est.nombre));
}

/* --------------------------- UI state --------------------------- */
let currentPage = 'resumen';
const ui = {
  search: '',
  career: '',
  status: '',
  locality: '',
  onlyEligible: false,
  assignmentStatus: ''
};

/* --------------------------- Render base --------------------------- */
function renderCriteriaStrip() {
  const cfg = state.config;
  const criteria = [
    { icon: 'book', cls: '', title: `${cfg.porcentajeMin}% de materias`, sub: 'Mínimo aprobado del pensum' },
    { icon: 'award', cls: 'gold', title: `Promedio ≥ ${cfg.promedioMin}`, sub: 'Escala de 0 a 20 puntos' },
    { icon: 'clipboard', cls: 'green', title: 'Servicio comunitario', sub: 'Fases I y II aprobadas' },
    { icon: 'shield', cls: 'gold', title: 'Exoneración', sub: 'Solo universidades externas' },
    { icon: 'pin', cls: 'red', title: 'Zulia · presencial', sub: 'Contexto y localidad UPTZ' }
  ];
  $('#criteriaStrip').innerHTML = criteria.map(c => `
    <div class="criteria-item">
      <div class="criteria-icon ${c.cls}">${ico(c.icon)}</div>
      <div class="criteria-text">
        <strong>${esc(c.title)}</strong>
        <span>${esc(c.sub)}</span>
      </div>
    </div>
  `).join('');
}

function renderKpis() {
  const total = state.estudiantes.length;
  const elegibles = state.estudiantes.filter(e => evaluate(e).elegible).length;
  const asignados = state.estudiantes.filter(e => e.asignacion).length;
  const noElegibles = total - elegibles;
  const libres = totalAvailableSlots();
  const plazas = totalSlots();
  const alertas = getAlerts().length;
  const pctElegibles = pct(elegibles, total);
  const pctAsignados = pct(asignados, elegibles);

  const cards = [
    {
      cls: '', icon: 'users', label: 'Estudiantes', value: total,
      meta: `<span>${CARRERAS.filter(c => state.estudiantes.some(e => e.carrera === c)).length} carreras</span> · <span>periodo ${PERIODO}</span>`
    },
    {
      cls: 'green', icon: 'shield', label: 'Elegibles', value: elegibles,
      meta: `<span class="up">${ico('trend')} ${pctElegibles}%</span><span>del padrón cumple requisitos</span>`
    },
    {
      cls: 'violet', icon: 'briefcase', label: 'Asignados', value: asignados,
      meta: `<span>${pctAsignados}%</span><span>de los elegibles con empresa</span>`
    },
    {
      cls: 'red', icon: 'alert', label: 'No elegibles', value: noElegibles,
      meta: alertas
        ? `<span class="down">${alertas}</span><span>a un solo requisito</span>`
        : `<span>Sin casos críticos</span>`
    },
    {
      cls: 'gold', icon: 'building', label: 'Plazas libres', value: libres,
      meta: `<span>de ${plazas} vacantes</span><span>en convenio</span>`
    }
  ];

  $('#kpiGrid').innerHTML = cards.map(k => `
    <article class="kpi ${k.cls}">
      <div class="kpi-top">
        <div class="kpi-icon">${ico(k.icon)}</div>
      </div>
      <p class="kpi-label">${k.label}</p>
      <p class="kpi-value">${k.value}</p>
      <div class="kpi-meta">${k.meta}</div>
    </article>
  `).join('');
}

function renderDonut() {
  const counts = { elegible: 0, asignado: 0, 'no-elegible': 0 };
  state.estudiantes.forEach(e => { counts[statusOf(e).key] += 1; });
  const total = state.estudiantes.length;
  const circ = 2 * Math.PI * 62;
  const segments = [
    { key: 'asignado', label: 'Asignados', color: 'var(--blue)', value: counts.asignado },
    { key: 'elegible', label: 'Elegibles sin asignar', color: 'var(--green)', value: counts.elegible },
    { key: 'no-elegible', label: 'No elegibles', color: 'var(--red)', value: counts['no-elegible'] }
  ].filter(s => s.value > 0);

  let acc = 0;
  const circles = segments.map(s => {
    const len = (s.value / total) * circ;
    const gap = segments.length > 1 ? 5 : 0;
    const draw = Math.max(0.5, len - gap);
    const dash = `${draw} ${circ - draw}`;
    const offset = -acc;
    acc += len;
    return `<circle cx="84" cy="84" r="62" fill="none" stroke="${s.color}" stroke-width="15" stroke-dasharray="${dash}" stroke-dashoffset="${offset}" stroke-linecap="round"><title>${s.label}: ${s.value}</title></circle>`;
  }).join('');

  const legend = segments.length
    ? segments.map(s => `
        <div class="legend-row">
          <span class="legend-dot" style="background:${s.color}"></span>
          <span>${s.label}</span>
          <strong>${s.value}</strong>
          <em>${pct(s.value, total)}%</em>
        </div>`).join('')
    : '<div class="legend-row"><span>Sin estudiantes registrados</span></div>';

  $('#donutChart').innerHTML = `
    <div class="donut-layout">
      <div class="donut-wrap">
        <svg viewBox="0 0 168 168" role="img" aria-label="Distribución de elegibilidad">
          <circle cx="84" cy="84" r="62" fill="none" stroke="var(--surface-3)" stroke-width="15"></circle>
          ${circles}
        </svg>
        <div class="donut-center">
          <strong>${total}</strong>
          <span>estudiantes</span>
        </div>
      </div>
      <div class="legend">${legend}</div>
    </div>
  `;
  $('#donutPeriod').textContent = PERIODO;
}

function renderCareerChart() {
  const rows = CARRERAS.map(carrera => {
    const list = state.estudiantes.filter(e => e.carrera === carrera);
    const eligibles = list.filter(e => evaluate(e).elegible).length;
    return { carrera, total: list.length, eligibles };
  }).filter(r => r.total > 0).sort((a, b) => b.total - a.total);

  $('#careerTotal').textContent = `${rows.length} carreras`;
  if (!rows.length) {
    $('#careerChart').innerHTML = emptyState('users', 'Sin datos por carrera', 'Registra estudiantes para ver la distribución.');
    return;
  }

  $('#careerChart').innerHTML = rows.map(r => {
    const noEli = r.total - r.eligibles;
    return `
      <div class="bar-row">
        <div class="bar-label" title="${esc(r.carrera)}">${esc(r.carrera.replace('Ingeniería en ', 'Ing. ').replace('Licenciatura en ', 'Lic. '))}</div>
        <div class="bar-track" title="${r.eligibles} elegibles de ${r.total}">
          <span class="bar-fill green" style="width:${pct(r.eligibles, r.total)}%"></span>
          <span class="bar-fill red" style="width:${pct(noEli, r.total)}%"></span>
        </div>
        <div class="bar-value"><strong>${r.eligibles}</strong>/${r.total}</div>
      </div>
    `;
  }).join('');
}

function renderTrend() {
  const data = state.historial;
  if (!data || data.length < 2) {
    $('#trendChart').innerHTML = emptyState('trend', 'Sin histórico', 'Aún no hay datos suficientes.');
    return;
  }
  const W = 640, H = 214;
  const pad = { l: 34, r: 18, t: 18, b: 28 };
  const maxVal = Math.ceil(Math.max(...data.map(d => d.total)) / 20) * 20;
  const minVal = 0;
  const x = i => pad.l + (i * (W - pad.l - pad.r)) / (data.length - 1);
  const y = v => pad.t + ((maxVal - v) / (maxVal - minVal)) * (H - pad.t - pad.b);
  const base = y(minVal);

  let grid = '';
  for (let i = 0; i <= 4; i++) {
    const val = maxVal - (i * maxVal) / 4;
    const yy = y(val);
    grid += `<line class="chart-gridline" x1="${pad.l}" y1="${yy}" x2="${W - pad.r}" y2="${yy}"></line>`;
    grid += `<text class="chart-axis-label" x="${pad.l - 7}" y="${yy + 3}" text-anchor="end">${Math.round(val)}</text>`;
  }

  const metaVal = 120;
  if (metaVal > 0 && metaVal < maxVal) {
    const metaY = y(metaVal);
    grid += `
      <line x1="${pad.l}" y1="${metaY}" x2="${W - pad.r}" y2="${metaY}" stroke="var(--line-strong)" stroke-width="1.4" stroke-dasharray="5 6">
        <title>Meta institucional: ${metaVal} asignaciones</title>
      </line>
      <text class="chart-axis-label" x="${W - pad.r}" y="${metaY - 5}" text-anchor="end">Meta ${metaVal}</text>
    `;
  }

  const points = data.map((d, i) => ({ x: x(i), y: y(d.total), ...d }));
  let line = `M ${points[0].x} ${points[0].y}`;
  for (let i = 1; i < points.length; i++) {
    const mid = (points[i - 1].x + points[i].x) / 2;
    line += ` C ${mid} ${points[i - 1].y}, ${mid} ${points[i].y}, ${points[i].x} ${points[i].y}`;
  }
  const area = `${line} L ${points[points.length - 1].x} ${base} L ${points[0].x} ${base} Z`;
  const dots = points.map(p => `
    <circle cx="${p.x}" cy="${p.y}" r="3.2" fill="var(--surface)" stroke="var(--primary-2)" stroke-width="2">
      <title>${p.mes}: ${p.total} asignaciones acumuladas</title>
    </circle>
  `).join('');
  const xLabels = points.map(p => `<text class="chart-axis-label" x="${p.x}" y="${H - 7}" text-anchor="middle">${p.mes}</text>`).join('');
  const last = points[points.length - 1];

  $('#trendChart').innerHTML = `
    <svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Tendencia de asignaciones">
      <defs>
        <linearGradient id="trendFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="var(--primary-2)" stop-opacity="0.26"></stop>
          <stop offset="100%" stop-color="var(--primary-2)" stop-opacity="0"></stop>
        </linearGradient>
      </defs>
      ${grid}
      <path d="${area}" fill="url(#trendFill)"></path>
      <path d="${line}" fill="none" stroke="var(--primary-2)" stroke-width="2.4" stroke-linecap="round"></path>
      ${dots}
      <circle cx="${last.x}" cy="${last.y}" r="5.5" fill="var(--primary-2)" stroke="var(--surface)" stroke-width="2.5"></circle>
      <text class="chart-point-label" x="${last.x - 6}" y="${last.y - 12}" text-anchor="end">${last.total}</text>
      ${xLabels}
    </svg>
    <div class="trend-legend">
      <span><i></i> Asignaciones acumuladas</span>
      <span><i class="dashed"></i> Meta institucional del periodo</span>
    </div>
  `;
}

function renderAlerts() {
  const alerts = getAlerts();
  $('#alertCount').textContent = alerts.length;
  if (!alerts.length) {
    $('#alertsList').innerHTML = emptyState('check', 'Todos al día', 'No hay estudiantes a un requisito de ser elegibles.');
    return;
  }
  $('#alertsList').innerHTML = alerts.map(a => `
    <div class="alert-item" data-view="${a.est.id}" role="button" tabindex="0" title="Revisar ficha de ${esc(a.est.nombre)}">
      <div class="alert-dot">${ico('alert')}</div>
      <div class="alert-meta">
        <strong>${esc(a.est.nombre)}</strong>
        <span>${esc(a.est.carrera)}</span>
      </div>
      <span class="alert-reason">${esc(a.reason.short)}</span>
    </div>
  `).join('');
}

function renderRecentAssignments() {
  const list = assignments().slice(0, 5);
  if (!list.length) {
    $('#recentAssignments').innerHTML = emptyState('briefcase', 'Sin asignaciones', 'Aún no se han vinculado estudiantes a empresas.');
    return;
  }
  $('#recentAssignments').innerHTML = `
    <div class="table-wrap">
      <table>
        <thead>
          <tr><th>Estudiante</th><th>Empresa</th><th>Carrera</th><th>Inicio</th><th>Estado</th><th><span class="sr-only">Acciones</span></th></tr>
        </thead>
        <tbody>
          ${list.map(item => `
            <tr>
              <td>
                <div class="person">
                  <div class="avatar" style="${avatarStyle(item.estudiante.nombre)}">${esc(initials(item.estudiante.nombre))}</div>
                  <div class="person-meta">
                    <strong>${esc(item.estudiante.nombre)}</strong>
                    <span>${esc(item.estudiante.cedula)}</span>
                  </div>
                </div>
              </td>
              <td>${esc(item.empresa ? item.empresa.nombre : 'Empresa no disponible')}</td>
              <td class="career-cell">${esc(item.plaza ? item.plaza.carrera : item.estudiante.carrera)}</td>
              <td>${esc(formatDate(item.asignacion.inicio))}</td>
              <td>${assignmentBadge(item.asignacion.estado)}</td>
              <td>
                <div class="cell-actions">
                  <button class="icon-btn" data-view="${item.estudiante.id}" title="Ver ficha">${ico('user')}</button>
                </div>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

/* --------------------------- Chrome / navegación --------------------------- */
function updateChrome() {
  const alerts = getAlerts().length;
  $('#navStudents').textContent = state.estudiantes.length;
  $('#navAssignments').textContent = assignments().length;
  $('#navAlerts').textContent = alerts;
  $('#notifBadge').textContent = alerts;
  $('#notifBadge').dataset.zero = alerts === 0 ? 'true' : 'false';
  const notifBtn = document.querySelector('.notif');
  if (notifBtn) notifBtn.setAttribute('aria-label', alerts ? `Ver ${alerts} alertas de elegibilidad` : 'Ver alertas de elegibilidad');
  $('#pageTitle').textContent = PAGE_TITLES[currentPage] || 'Resumen general';
  $('#periodLabel').textContent = `Periodo académico ${PERIODO} · UPTZ`;
  $$('.nav-item').forEach(btn => btn.classList.toggle('active', btn.dataset.page === currentPage));
}

function renderStudents() {
  const term = norm(ui.search);
  let list = state.estudiantes.filter(est => {
    if (term && !(norm(est.nombre).includes(term) || norm(est.cedula).includes(term))) return false;
    if (ui.career && est.carrera !== ui.career) return false;
    if (ui.locality && est.localidad !== ui.locality) return false;
    if (ui.status && statusOf(est).key !== ui.status) return false;
    if (ui.onlyEligible) {
      const s = statusOf(est).key;
      if (s !== 'elegible' && s !== 'asignado') return false;
    }
    return true;
  });

  const total = state.estudiantes.length;
  $('#studentsCount').textContent = list.length === total ? `${total} estudiantes` : `${list.length} de ${total}`;
  $('#studentsSubtitle').textContent = `${list.filter(e => evaluate(e).elegible).length} cumplen todos los requisitos · verificación automática`;
  $('#filterOnlyEligible').classList.toggle('active', ui.onlyEligible);

  if (!list.length) {
    $('#studentsTable').innerHTML = emptyState('filter', 'Sin resultados', 'Ajusta los filtros o la búsqueda para encontrar estudiantes.');
    return;
  }

  $('#studentsTable').innerHTML = `
    <table>
      <thead>
        <tr>
          <th>Estudiante</th>
          <th>Carrera</th>
          <th>Materias</th>
          <th>Promedio</th>
          <th>Servicio comunitario</th>
          <th>Localidad</th>
          <th>Estado</th>
          <th><span class="sr-only">Acciones</span></th>
        </tr>
      </thead>
      <tbody>
        ${list.map(est => {
          const ev = evaluate(est);
          const status = statusOf(est);
          const meterCls = ev.ratio >= state.config.porcentajeMin ? '' : 'bad';
          const avgOk = ev.promedio >= state.config.promedioMin;
          return `
            <tr>
              <td>
                <div class="person">
                  <div class="avatar" style="${avatarStyle(est.nombre)}">${esc(initials(est.nombre))}</div>
                  <div class="person-meta">
                    <strong>${esc(est.nombre)}</strong>
                    <span>${esc(est.cedula)} · ${est.universidadOrigen === 'UPTZ' ? 'UPTZ' : 'Externa'}</span>
                  </div>
                </div>
              </td>
              <td class="career-cell">
                ${esc(est.carrera)}
                <small>Semestre ${esc(est.semestre)} · ${esc(est.modalidad)}</small>
              </td>
              <td>
                <div class="meter-wrap" title="${ev.porcentaje}% · ${est.materiasAprobadas}/${est.materiasTotales} materias">
                  <div class="meter"><i class="${meterCls}" style="width:${Math.min(100, ev.porcentaje)}%"></i></div>
                  <span class="meter-value">${ev.porcentaje}%</span>
                </div>
              </td>
              <td><span class="avg-chip ${avgOk ? '' : 'bad'}">${ev.promedio.toFixed(1)}</span></td>
              <td>
                <div class="sc-cell">
                  <span class="sc-pill ${est.fase1 ? '' : 'off'}" title="Fase I">${ico(est.fase1 ? 'check' : 'x')} F1</span>
                  <span class="sc-pill ${est.fase2 ? '' : 'off'}" title="Fase II">${ico(est.fase2 ? 'check' : 'x')} F2</span>
                </div>
              </td>
              <td>
                <span class="locality ${est.localidad === 'Otro estado' ? 'out' : ''}">${ico('pin')} ${esc(est.localidad === 'Otro estado' ? 'Fuera de Zulia' : est.localidad)}</span>
              </td>
              <td><span class="status ${status.cls}">${status.label}</span></td>
              <td>
                <div class="cell-actions">
                  <button class="icon-btn" data-view="${est.id}" title="Ver ficha integral">${ico('user')}</button>
                  <button class="icon-btn" data-action="edit-student" data-id="${est.id}" title="Editar ficha">${ico('edit')}</button>
                  ${ev.elegible && !est.asignacion ? `<button class="icon-btn" data-action="assign-student" data-id="${est.id}" title="Asignar pasantía">${ico('briefcase')}</button>` : ''}
                </div>
              </td>
            </tr>
          `;
        }).join('')}
      </tbody>
    </table>
    <div class="table-foot">
      <span>Mostrando ${list.length} de ${total} estudiantes</span>
      <span>${list.filter(e => evaluate(e).elegible).length} elegibles en este filtro</span>
    </div>
  `;
}

function emptyState(icon, title, text) {
  return `<div class="empty-state">${ico(icon)}<strong>${esc(title)}</strong>${esc(text)}</div>`;
}

/* --------------------------- Asignaciones --------------------------- */
function renderAssignmentKpis() {
  const list = assignments();
  const enCurso = list.filter(a => a.asignacion.estado === 'En curso').length;
  const porIniciar = list.filter(a => a.asignacion.estado === 'Por iniciar').length;
  const culminadas = list.filter(a => a.asignacion.estado === 'Culminada').length;
  const cards = [
    { icon: 'briefcase', cls: '', label: 'Total asignaciones', value: list.length },
    { icon: 'clock', cls: 'green', label: 'En curso', value: enCurso },
    { icon: 'calendar', cls: 'amber', label: 'Por iniciar', value: porIniciar },
    { icon: 'award', cls: 'violet', label: 'Culminadas', value: culminadas }
  ];
  $('#assignmentKpis').innerHTML = cards.map(c => `
    <div class="mini-kpi">
      <div class="mini-kpi-icon ${c.cls}">${ico(c.icon)}</div>
      <div><strong>${c.value}</strong><span>${c.label}</span></div>
    </div>
  `).join('');
}

function renderAssignments() {
  renderAssignmentKpis();
  const all = assignments();
  const list = ui.assignmentStatus ? all.filter(a => a.asignacion.estado === ui.assignmentStatus) : all;

  if (!list.length) {
    $('#assignmentsTable').innerHTML = emptyState('briefcase', 'Sin asignaciones', 'No hay registros para el filtro seleccionado.');
  } else {
    $('#assignmentsTable').innerHTML = `
      <table>
        <thead>
          <tr><th>Estudiante</th><th>Empresa</th><th>Carrera</th><th>Tutor</th><th>Inicio</th><th>Estado</th><th><span class="sr-only">Acciones</span></th></tr>
        </thead>
        <tbody>
          ${list.map(item => `
            <tr>
              <td>
                <div class="person">
                  <div class="avatar" style="${avatarStyle(item.estudiante.nombre)}">${esc(initials(item.estudiante.nombre))}</div>
                  <div class="person-meta">
                    <strong>${esc(item.estudiante.nombre)}</strong>
                    <span>${esc(item.estudiante.cedula)}</span>
                  </div>
                </div>
              </td>
              <td>${esc(item.empresa ? item.empresa.nombre : '—')}</td>
              <td class="career-cell">${esc(item.plaza ? item.plaza.carrera : item.estudiante.carrera)}<small>${esc(item.empresa ? item.empresa.municipio : '')}</small></td>
              <td>${esc(item.asignacion.tutor)}</td>
              <td>${esc(formatDate(item.asignacion.inicio))}</td>
              <td>${assignmentBadge(item.asignacion.estado)}</td>
              <td>
                <div class="cell-actions">
                  <button class="icon-btn" data-view="${item.estudiante.id}" title="Ver ficha">${ico('user')}</button>
                  ${item.asignacion.estado !== 'Culminada'
                    ? `<button class="icon-btn" data-action="complete-assignment" data-id="${item.estudiante.id}" title="Marcar como culminada">${ico('check')}</button>`
                    : ''}
                  <button class="icon-btn" data-action="unassign" data-id="${item.estudiante.id}" title="Liberar asignación">${ico('x')}</button>
                </div>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
      <div class="table-foot">
        <span>${list.length} de ${all.length} asignaciones</span>
        <span>${totalAvailableSlots()} plazas disponibles</span>
      </div>
    `;
  }

  $('#availablePlazasPill').textContent = `${totalAvailableSlots()} libres`;
  const rows = state.empresas.map(emp => {
    const total = emp.plazas.reduce((s, p) => s + Number(p.vacantes || 0), 0);
    const available = emp.plazas.reduce((s, p) => s + plazaAvailable(p.id), 0);
    return { emp, total, available };
  }).filter(r => r.total > 0).sort((a, b) => b.available - a.available);

  $('#availabilityList').innerHTML = rows.length ? rows.map(r => {
    const p = pct(r.available, r.total);
    const cls = r.available === 0 ? 'empty' : p < 35 ? 'low' : '';
    return `
      <div class="availability-row">
        <div class="availability-top">
          <strong>${esc(r.emp.nombre)}</strong>
          <span>${r.available} / ${r.total} libres</span>
        </div>
        <div class="availability-bar"><i class="${cls}" style="width:${p}%"></i></div>
      </div>
    `;
  }).join('') : emptyState('building', 'Sin plazas', 'Registra empresas y plazas para el periodo.');
}

/* --------------------------- Empresas --------------------------- */
function renderCompanies() {
  if (!state.empresas.length) {
    $('#companyGrid').innerHTML = emptyState('building', 'Sin empresas', 'Agrega convenios institucionales para comenzar.');
    return;
  }
  $('#companyGrid').innerHTML = state.empresas.map(emp => {
    const total = emp.plazas.reduce((s, p) => s + Number(p.vacantes || 0), 0);
    const available = emp.plazas.reduce((s, p) => s + plazaAvailable(p.id), 0);
    const tagConvenio = emp.convenio === 'Institucional' ? 'badge-violet' : 'badge-green';
    return `
      <article class="card company-card">
        <div class="company-top">
          <div class="company-logo" style="${avatarStyle(emp.nombre)}">${esc(initials(emp.nombre))}</div>
          <div class="company-meta">
            <h3>${esc(emp.nombre)}</h3>
            <p>${esc(emp.sector)}</p>
            <div class="company-tags">
              <span class="badge ${tagConvenio}">${esc(emp.convenio === 'Institucional' ? 'Convenio institucional' : 'Convenio activo')}</span>
              <span class="badge badge-gray">${esc(emp.municipio)}</span>
            </div>
          </div>
        </div>
        <div class="company-info">
          <span>${ico('user')} ${esc(emp.contacto)}</span>
          <span>${ico('pin')} ${esc(emp.municipio)}, Zulia</span>
        </div>
        <div class="company-plazas">
          ${emp.plazas.length ? emp.plazas.map(p => {
            const avail = plazaAvailable(p.id);
            const width = pct(avail, p.vacantes);
            return `
              <div class="company-plaza-row" title="${esc(p.carrera)} · Tutor: ${esc(p.tutor || 'por asignar')}">
                <span class="career-name">${esc(p.carrera.replace('Ingeniería en ', 'Ing. ').replace('Licenciatura en ', 'Lic. '))}</span>
                <div class="bar-track"><span class="bar-fill ${avail === 0 ? 'gray' : ''}" style="width:${width}%"></span></div>
                <span class="slots">${avail}/${p.vacantes}</span>
              </div>
            `;
          }).join('') : '<p class="hint">Sin plazas registradas.</p>'}
        </div>
        <div class="company-foot">
          <span class="slots-total"><strong>${available}</strong> de ${total} plazas libres</span>
          <div class="section-actions">
            <button class="btn btn-sm" data-action="new-plaza" data-company="${emp.id}">${ico('plus')} Plaza</button>
            <button class="btn btn-sm btn-primary" data-action="assign-company" data-company="${emp.id}" ${available === 0 ? 'disabled' : ''}>${ico('briefcase')} Asignar</button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

/* --------------------------- Validación --------------------------- */
function renderValidation() {
  const defs = [
    { key: 'materias', label: `Materias aprobadas (≥ ${state.config.porcentajeMin}%)` },
    { key: 'promedio', label: `Promedio (≥ ${state.config.promedioMin} pts)` },
    { key: 'sc', label: 'Servicio comunitario (Fases I y II)' },
    { key: 'contexto', label: 'Contexto geográfico (Zulia)' },
    { key: 'modalidad', label: `Modalidad (${state.config.modalidad})` },
    { key: 'exoneracion', label: 'Exoneración (estudiantes externos)' }
  ];

  const compliance = defs.map(def => {
    let applicable = 0, passed = 0;
    state.estudiantes.forEach(est => {
      const item = evaluate(est).items.find(i => i.key === def.key);
      if (!item || !item.applicable) return;
      applicable += 1;
      if (item.ok) passed += 1;
    });
    return { ...def, applicable, passed, percent: pct(passed, applicable) };
  });

  $('#complianceList').innerHTML = compliance.map(c => `
    <div class="compliance-item">
      <div class="compliance-top">
        <strong>${esc(c.label)}</strong>
        <span>${c.applicable ? `${c.passed}/${c.applicable} · ${c.percent}%` : 'Sin casos aplicables'}</span>
      </div>
      <div class="stacked-bar">
        <i class="${c.percent === 100 ? 'full' : ''}" style="width:${c.applicable ? c.percent : 0}%"></i>
      </div>
    </div>
  `).join('');

  const reasons = {};
  let noElegibles = 0;
  state.estudiantes.forEach(est => {
    const ev = evaluate(est);
    if (ev.elegible) return;
    noElegibles += 1;
    const reason = ev.failures[0].label;
    reasons[reason] = (reasons[reason] || 0) + 1;
  });
  const reasonRows = Object.entries(reasons).sort((a, b) => b[1] - a[1]);
  const maxReason = reasonRows.length ? Math.max(...reasonRows.map(r => r[1])) : 0;
  $('#reasonsList').innerHTML = reasonRows.length ? reasonRows.map(([label, count]) => `
    <div class="bar-row">
      <div class="bar-label" title="${esc(label)}">${esc(label)}</div>
      <div class="bar-track"><span class="bar-fill red" style="width:${pct(count, maxReason)}%"></span></div>
      <div class="bar-value"><strong>${count}</strong> caso${count === 1 ? '' : 's'}</div>
    </div>
  `).join('') : emptyState('check', 'Sin casos', 'Todos los estudiantes cumplen los requisitos.');

  const localityMap = {};
  state.estudiantes.forEach(e => { localityMap[e.localidad] = (localityMap[e.localidad] || 0) + 1; });
  const localityRows = Object.entries(localityMap).sort((a, b) => b[1] - a[1]);
  const maxLoc = localityRows.length ? Math.max(...localityRows.map(r => r[1])) : 0;
  $('#localityList').innerHTML = localityRows.map(([loc, count]) => {
    const out = loc === 'Otro estado';
    return `
      <div class="bar-row">
        <div class="bar-label" title="${esc(loc)}">${esc(out ? 'Fuera de Zulia' : loc)}</div>
        <div class="bar-track"><span class="bar-fill ${out ? 'red' : 'blue'}" style="width:${pct(count, maxLoc)}%"></span></div>
        <div class="bar-value"><strong>${count}</strong> est.</div>
      </div>
    `;
  }).join('');

  const pending = state.estudiantes.filter(e => !evaluate(e).elegible);
  $('#pendingCount').textContent = `${pending.length} pendientes`;
  if (!pending.length) {
    $('#pendingTable').innerHTML = emptyState('check', 'Sin pendientes', 'Todo el padrón cumple los requisitos de elegibilidad.');
  } else {
    $('#pendingTable').innerHTML = `
      <table>
        <thead>
          <tr><th>Estudiante</th><th>Carrera</th><th>Requisitos pendientes</th><th>Causa principal</th><th><span class="sr-only">Acciones</span></th></tr>
        </thead>
        <tbody>
          ${pending.map(est => {
            const ev = evaluate(est);
            const shown = ev.failures.slice(0, 2);
            const extra = ev.failures.length - shown.length;
            return `
              <tr>
                <td>
                  <div class="person">
                    <div class="avatar" style="${avatarStyle(est.nombre)}">${esc(initials(est.nombre))}</div>
                    <div class="person-meta">
                      <strong>${esc(est.nombre)}</strong>
                      <span>${esc(est.cedula)}</span>
                    </div>
                  </div>
                </td>
                <td class="career-cell">${esc(est.carrera)}<small>Semestre ${esc(est.semestre)}</small></td>
                <td>
                  <div class="sc-cell" style="flex-wrap:wrap">
                    ${shown.map(f => `<span class="sc-pill off">${esc(f.short)}</span>`).join('')}
                    ${extra > 0 ? `<span class="sc-pill off">+${extra}</span>` : ''}
                  </div>
                </td>
                <td style="font-size:11px;color:var(--muted)">${esc(ev.failures[0].detail)}</td>
                <td>
                  <div class="cell-actions">
                    <button class="icon-btn" data-view="${est.id}" title="Revisar ficha">${ico('user')}</button>
                    <button class="icon-btn" data-action="edit-student" data-id="${est.id}" title="Editar ficha">${ico('edit')}</button>
                  </div>
                </td>
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>
      <div class="table-foot">
        <span>${pending.length} de ${state.estudiantes.length} estudiantes con requisitos pendientes</span>
        <span>${noElegibles} no elegibles</span>
      </div>
    `;
  }
}

/* --------------------------- Reportes --------------------------- */
function renderReports() {
  const rows = CARRERAS.map(carrera => {
    const list = state.estudiantes.filter(e => e.carrera === carrera);
    if (!list.length) return null;
    const elegibles = list.filter(e => evaluate(e).elegible).length;
    const asignados = list.filter(e => e.asignacion).length;
    return { carrera, total: list.length, elegibles, asignados, noElegibles: list.length - elegibles };
  }).filter(Boolean);

  const totals = rows.reduce((acc, r) => ({
    total: acc.total + r.total,
    elegibles: acc.elegibles + r.elegibles,
    asignados: acc.asignados + r.asignados,
    noElegibles: acc.noElegibles + r.noElegibles
  }), { total: 0, elegibles: 0, asignados: 0, noElegibles: 0 });

  $('#reportGenerated').textContent = `Generado el ${formatLongDate()}`;

  if (!rows.length) {
    $('#reportTable').innerHTML = emptyState('chart', 'Sin datos', 'Registra estudiantes para generar el reporte.');
    return;
  }

  $('#reportTable').innerHTML = `
    <table>
      <thead>
        <tr><th>Carrera</th><th>Estudiantes</th><th>Elegibles</th><th>Asignados</th><th>No elegibles</th><th>% elegibilidad</th></tr>
      </thead>
      <tbody>
        ${rows.map(r => {
          const p = pct(r.elegibles, r.total);
          return `
            <tr>
              <td style="font-weight:600">${esc(r.carrera)}</td>
              <td>${r.total}</td>
              <td>${r.elegibles}</td>
              <td>${r.asignados}</td>
              <td>${r.noElegibles}</td>
              <td>
                <div class="meter-wrap">
                  <div class="meter"><i class="${p < 50 ? 'warn' : ''}" style="width:${p}%"></i></div>
                  <span class="meter-value">${p}%</span>
                </div>
              </td>
            </tr>
          `;
        }).join('')}
        <tr style="background:var(--surface-2);font-weight:700">
          <td>Total del periodo ${PERIODO}</td>
          <td>${totals.total}</td>
          <td>${totals.elegibles}</td>
          <td>${totals.asignados}</td>
          <td>${totals.noElegibles}</td>
          <td>${pct(totals.elegibles, totals.total)}%</td>
        </tr>
      </tbody>
    </table>
    <div class="table-foot">
      <span>Fuente: sistema de gestión de pasantías UPTZ</span>
      <span>${formatLongDate()}</span>
    </div>
  `;
}

/* --------------------------- Render global --------------------------- */
function renderAll() {
  renderCriteriaStrip();
  renderKpis();
  renderDonut();
  renderCareerChart();
  renderTrend();
  renderAlerts();
  renderRecentAssignments();
  renderStudents();
  renderAssignments();
  renderCompanies();
  renderValidation();
  renderReports();
  updateChrome();
}

/* --------------------------- Overlays / toast --------------------------- */
let currentDrawerId = null;

function openModal(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.add('open');
  el.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
}

function closeAllOverlays() {
  $$('.modal, .drawer').forEach(el => {
    el.classList.remove('open');
    el.setAttribute('aria-hidden', 'true');
  });
  document.body.classList.remove('modal-open');
}

function toast(type, title, message) {
  const container = $('#toasts');
  const el = document.createElement('div');
  el.className = `toast ${type || 'success'}`;
  const icon = type === 'error' ? 'alert' : type === 'info' ? 'bell' : 'check';
  el.innerHTML = `
    <div class="toast-icon">${ico(icon)}</div>
    <div class="toast-meta"><strong>${esc(title)}</strong><span>${esc(message || '')}</span></div>
  `;
  container.appendChild(el);
  setTimeout(() => {
    el.classList.add('leaving');
    setTimeout(() => el.remove(), 260);
  }, 3600);
}

/* --------------------------- Drawer estudiante --------------------------- */
function openStudentDrawer(id) {
  const est = getEst(id);
  if (!est) return;
  currentDrawerId = id;
  const ev = evaluate(est);
  const status = statusOf(est);
  const empresa = est.asignacion ? getEmpresa(est.asignacion.empresaId) : null;
  const plaza = est.asignacion ? findPlaza(est.asignacion.plazaId) : null;

  let banner;
  if (est.asignacion) {
    banner = `
      <div class="elig-banner assigned">
        ${ico('briefcase')}
        <div>
          <strong>Asignación activa en ${esc(empresa ? empresa.nombre : 'una empresa')}</strong>
          <span>Estado del proceso: ${esc(est.asignacion.estado)} · Tutor: ${esc(est.asignacion.tutor)}</span>
        </div>
      </div>`;
  } else if (ev.elegible) {
    banner = `
      <div class="elig-banner ok">
        ${ico('shield')}
        <div>
          <strong>Cumple todos los requisitos</strong>
          <span>Habilitado para la asignación de prácticas profesionales.</span>
        </div>
      </div>`;
  } else {
    banner = `
      <div class="elig-banner bad">
        ${ico('alert')}
        <div>
          <strong>${ev.failureCount} requisito${ev.failureCount === 1 ? '' : 's'} pendiente${ev.failureCount === 1 ? '' : 's'}</strong>
          <span>No puede iniciar prácticas hasta completar la validación.</span>
        </div>
      </div>`;
  }

  const info = [
    ['Promedio', `${ev.promedio.toFixed(1)} / 20`],
    ['Materias aprobadas', `${est.materiasAprobadas} de ${est.materiasTotales} · ${ev.porcentaje}%`],
    ['Semestre', String(est.semestre)],
    ['Universidad de origen', est.universidadOrigen === 'UPTZ' ? 'UPTZ' : 'Otra universidad'],
    ['Localidad', est.localidad],
    ['Modalidad', est.modalidad],
    ['Correo', est.email || '—'],
    ['Teléfono', est.telefono || '—']
  ];

  const reqs = ev.items.map(item => {
    const cls = !item.applicable ? 'na' : item.ok ? '' : 'fail';
    const stateLabel = !item.applicable ? 'No aplica' : item.ok ? 'Cumple' : 'Pendiente';
    const stateIcon = !item.applicable ? 'x' : item.ok ? 'check' : 'x';
    return `
      <div class="req-item ${cls}">
        <div class="req-icon">${ico(stateIcon)}</div>
        <div class="req-meta">
          <strong>${esc(item.label)} <span style="font-weight:400;color:var(--muted)">· ${esc(item.requirement)}</span></strong>
          <span>${esc(item.detail)}</span>
        </div>
        <span class="req-badge">${stateLabel}</span>
      </div>
    `;
  }).join('');

  let assignmentSection = '';
  if (est.asignacion && empresa) {
    assignmentSection = `
      <div class="drawer-section">
        <h3>Asignación de pasantía</h3>
        <div class="assignment-box">
          <div class="assignment-box-top">
            <div class="company-logo" style="${avatarStyle(empresa.nombre)}">${esc(initials(empresa.nombre))}</div>
            <div>
              <strong>${esc(empresa.nombre)}</strong>
              <span>${esc(empresa.sector)} · ${esc(empresa.municipio)}</span>
            </div>
          </div>
          <div class="assignment-facts">
            <span>Tutor: <b>${esc(est.asignacion.tutor)}</b></span>
            <span>Inicio: <b>${esc(formatDate(est.asignacion.inicio))}</b></span>
            <span>Estado: <b>${esc(est.asignacion.estado)}</b></span>
            <span>Plaza: <b>${esc(plaza ? plaza.plaza.carrera : est.carrera)}</b></span>
          </div>
          ${est.asignacion.observaciones ? `<p class="hint" style="border-top:1px solid var(--line);padding-top:8px">${esc(est.asignacion.observaciones)}</p>` : ''}
        </div>
      </div>`;
  }

  const assignButton = ev.elegible && !est.asignacion
    ? `<button class="btn btn-primary" data-action="assign-student" data-id="${est.id}">${ico('briefcase')} Asignar pasantía</button>`
    : '';
  const releaseButton = est.asignacion
    ? `<button class="btn btn-danger" data-action="unassign" data-id="${est.id}">${ico('x')} Liberar asignación</button>`
    : '';
  const pendingNote = !ev.elegible
    ? `<div class="drawer-note">${ico('alert')}<span>Regulariza los requisitos pendientes desde la ficha académica. La elegibilidad se recalcula automáticamente.</span></div>`
    : '';

  $('#drawerBody').innerHTML = `
    <div class="drawer-profile">
      <div class="avatar avatar-lg" style="${avatarStyle(est.nombre)}">${esc(initials(est.nombre))}</div>
      <div class="drawer-profile-meta">
        <h2 id="drawerName">${esc(est.nombre)}</h2>
        <p>${esc(est.cedula)} · ${esc(est.carrera)}</p>
      </div>
      <span class="status ${status.cls}">${status.label}</span>
    </div>

    ${banner}

    <div class="drawer-actions">
      <button class="btn btn-sm" data-action="edit-student" data-id="${est.id}">${ico('edit')} Editar ficha</button>
    </div>

    <div class="drawer-section">
      <h3>Resumen académico</h3>
      <div class="info-grid">
        ${info.map(([label, value]) => `<div class="info-box"><span>${esc(label)}</span><strong>${esc(value)}</strong></div>`).join('')}
      </div>
    </div>

    <div class="drawer-section">
      <h3>Verificación de requisitos</h3>
      <div class="req-list">${reqs}</div>
    </div>

    ${assignmentSection}
    ${pendingNote}

    <div class="drawer-foot">
      <button class="btn" data-close>Cerrar</button>
      ${assignButton}
      ${releaseButton}
    </div>
  `;

  const drawer = $('#studentDrawer');
  drawer.classList.add('open');
  drawer.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
}

/* --------------------------- Modal estudiante --------------------------- */
function updateExoState() {
  const origen = $('#f-origen').value;
  const checkbox = $('#f-exoneracion');
  const field = $('#exoField');
  const hint = $('#exoHint');
  const isInternal = origen === 'UPTZ';
  checkbox.disabled = isInternal;
  if (isInternal) checkbox.checked = false;
  field.classList.toggle('disabled', isInternal);
  hint.textContent = isInternal
    ? 'No aplica: el estudiante pertenece a la UPTZ.'
    : 'La exoneración es obligatoria para estudiantes de otra universidad.';
}

function formValues() {
  return {
    nombre: $('#f-nombre').value.trim(),
    cedula: $('#f-cedula').value.trim(),
    carrera: $('#f-carrera').value,
    semestre: Number($('#f-semestre').value) || 1,
    materiasAprobadas: Number($('#f-aprobadas').value) || 0,
    materiasTotales: Number($('#f-totales').value) || 0,
    promedio: Number($('#f-promedio').value) || 0,
    fase1: $('#f-fase1').checked,
    fase2: $('#f-fase2').checked,
    universidadOrigen: $('#f-origen').value,
    exoneracion: $('#f-exoneracion').checked,
    localidad: $('#f-localidad').value,
    modalidad: $('#f-modalidad').value,
    email: $('#f-email').value.trim(),
    telefono: $('#f-telefono').value.trim()
  };
}

function updateFormPreview() {
  const preview = $('#formPreview');
  if (!preview) return;
  const ev = evaluate(formValues());
  const pills = ev.items.map(item => {
    const cls = !item.applicable ? 'na' : item.ok ? 'ok' : '';
    const iconName = !item.applicable ? 'x' : item.ok ? 'check' : 'x';
    return `<span class="preview-pill ${cls}">${ico(iconName)} ${esc(item.short)}</span>`;
  }).join('');
  const msg = ev.elegible
    ? 'Cumple todos los requisitos para iniciar prácticas profesionales.'
    : `${ev.failureCount} requisito${ev.failureCount === 1 ? '' : 's'} pendiente${ev.failureCount === 1 ? '' : 's'} para ser elegible.`;
  preview.innerHTML = `
    <div class="preview-head">${ico('shield')} Vista previa de elegibilidad</div>
    <div class="preview-pills">${pills}</div>
    <p class="preview-message ${ev.elegible ? 'ok' : 'bad'}">${msg}</p>
  `;
}

function openStudentModal(id = null) {
  closeAllOverlays();
  const form = $('#studentForm');
  form.reset();
  $('#f-id').value = '';
  $('#f-semestre').value = '6';
  $('#f-localidad').value = 'Maracaibo';
  $('#f-modalidad').value = 'Presencial';
  $('#f-origen').value = 'UPTZ';
  $('#f-totales').value = '30';
  $('#f-aprobadas').value = '0';
  $('#f-promedio').value = '12';
  $('#studentModalTitle').textContent = id ? 'Editar ficha académica' : 'Nuevo estudiante';

  if (id) {
    const est = getEst(id);
    if (!est) return;
    $('#f-id').value = est.id;
    $('#f-nombre').value = est.nombre;
    $('#f-cedula').value = est.cedula;
    $('#f-carrera').value = est.carrera;
    $('#f-semestre').value = String(est.semestre);
    $('#f-aprobadas').value = est.materiasAprobadas;
    $('#f-totales').value = est.materiasTotales;
    $('#f-promedio').value = est.promedio;
    $('#f-fase1').checked = !!est.fase1;
    $('#f-fase2').checked = !!est.fase2;
    $('#f-origen').value = est.universidadOrigen;
    $('#f-exoneracion').checked = !!est.exoneracion;
    $('#f-localidad').value = est.localidad;
    $('#f-modalidad').value = est.modalidad;
    $('#f-email').value = est.email || '';
    $('#f-telefono').value = est.telefono || '';
  } else {
    $('#f-nombre').value = '';
    $('#f-cedula').value = '';
    $('#f-carrera').value = '';
    $('#f-fase1').checked = false;
    $('#f-fase2').checked = false;
    $('#f-email').value = '';
    $('#f-telefono').value = '';
  }

  updateExoState();
  updateFormPreview();
  openModal('modalStudent');
  setTimeout(() => $('#f-nombre').focus(), 120);
}

/* --------------------------- Modal asignación --------------------------- */
function studentSummaryHTML(est) {
  return `
    <div class="assign-summary">
      <div class="avatar" style="${avatarStyle(est.nombre)}">${esc(initials(est.nombre))}</div>
      <div class="assign-summary-meta">
        <strong>${esc(est.nombre)}</strong>
        <span>${esc(est.cedula)} · ${esc(est.carrera)} · Semestre ${esc(est.semestre)}</span>
      </div>
      <span class="badge badge-green">Elegible</span>
    </div>
  `;
}

function renderPlazaList() {
  const sid = $('#f-assign-student').value;
  const companyFilter = $('#f-assign-company').value;
  const est = getEst(sid);
  const box = $('#plazaList');
  const tutorInput = $('#f-tutor');
  const submit = $('#assignForm button[type="submit"]');
  if (!est) {
    box.innerHTML = '<div class="plaza-empty"><strong>Sin estudiante seleccionado</strong>Elige un estudiante elegible para continuar.</div>';
    if (submit) submit.disabled = true;
    return;
  }

  const options = [];
  state.empresas.forEach(emp => {
    if (companyFilter && emp.id !== companyFilter) return;
    emp.plazas.forEach(plaza => {
      if (plaza.carrera !== est.carrera) return;
      const available = plazaAvailable(plaza.id);
      if (available <= 0) return;
      options.push({ emp, plaza, available });
    });
  });

  if (!options.length) {
    box.innerHTML = `
      <div class="plaza-empty">
        <strong>Sin plazas disponibles</strong>
        No hay vacantes de ${esc(est.carrera)}${companyFilter ? ' en la empresa seleccionada' : ''}. Registra una nueva plaza para continuar.
      </div>`;
    if (submit) submit.disabled = true;
    return;
  }

  box.innerHTML = options.map((o, i) => `
    <div class="plaza-option">
      <input type="radio" name="plaza" id="plaza-${o.emp.id}-${o.plaza.id}" value="${o.emp.id}|${o.plaza.id}" data-tutor="${esc(o.plaza.tutor || '')}" ${i === 0 ? 'checked' : ''}>
      <label for="plaza-${o.emp.id}-${o.plaza.id}">
        <span class="p-company">${esc(o.emp.nombre)}</span>
        <span class="p-meta">${esc(o.emp.municipio)} · ${esc((o.plaza.tutor || 'Tutor por asignar'))}</span>
        <span class="p-slots">${ico('check')} ${o.available} vacante${o.available === 1 ? '' : 's'} disponible${o.available === 1 ? '' : 's'}</span>
      </label>
    </div>
  `).join('');

  if (submit) submit.disabled = false;
  if (tutorInput && !tutorInput.value) tutorInput.value = options[0].plaza.tutor || '';
  if (tutorInput && options[0].plaza.tutor) tutorInput.dataset.auto = 'true';
}

function openAssignModal(studentId = null, companyId = null) {
  closeAllOverlays();
  const form = $('#assignForm');
  form.reset();
  $('#assignStudentSummary').style.display = 'none';
  $('#assignStudentSelectWrap').style.display = 'flex';
  $('#f-assign-company').value = companyId || '';
  $('#f-tutor').value = '';
  $('#f-inicio').value = defaultStartDate();
  $('#f-observaciones').value = '';

  const select = $('#f-assign-student-select');
  const eligible = state.estudiantes.filter(e => !e.asignacion && evaluate(e).elegible);
  select.innerHTML = eligible.map(e => `<option value="${e.id}">${esc(e.nombre)} · ${esc(e.carrera)}</option>`).join('');

  if (studentId) {
    const est = getEst(studentId);
    if (!est) return;
    const ev = evaluate(est);
    if (!ev.elegible) {
      toast('error', 'Estudiante no elegible', 'Debe completar los requisitos pendientes antes de asignar una plaza.');
      return;
    }
    if (est.asignacion) {
      toast('info', 'Asignación existente', 'El estudiante ya tiene una plaza asignada. Libera la actual para reasignar.');
      return;
    }
    $('#f-assign-student').value = est.id;
    $('#assignStudentSelectWrap').style.display = 'none';
    const summary = $('#assignStudentSummary');
    summary.style.display = 'flex';
    summary.innerHTML = studentSummaryHTML(est);
  } else {
    if (!eligible.length) {
      toast('info', 'Sin estudiantes disponibles', 'No hay estudiantes elegibles sin asignación en este momento.');
      return;
    }
    $('#f-assign-student').value = eligible[0].id;
    select.value = eligible[0].id;
  }

  renderPlazaList();
  openModal('modalAssign');
}

/* --------------------------- Modal plaza --------------------------- */
function openPlazaModal(companyId = null) {
  closeAllOverlays();
  const form = $('#plazaForm');
  form.reset();
  const select = $('#p-empresa');
  select.innerHTML = state.empresas.map(e => `<option value="${e.id}">${esc(e.nombre)}</option>`).join('');
  if (companyId && getEmpresa(companyId)) select.value = companyId;
  $('#p-carrera').value = CARRERAS[0];
  $('#p-vacantes').value = '1';
  $('#p-tutor').value = '';
  openModal('modalPlaza');
}

/* --------------------------- Selects --------------------------- */
function populateStaticSelects() {
  const careerOptions = CARRERAS.map(c => `<option value="${esc(c)}">${esc(c)}</option>`).join('');
  const localityOptions = LOCALIDADES.map(l => `<option value="${esc(l)}">${esc(l)}</option>`).join('');

  $('#filterCareer').innerHTML = `<option value="">Todas las carreras</option>${careerOptions}`;
  $('#filterLocality').innerHTML = `<option value="">Todas</option>${localityOptions}`;
  $('#f-carrera').innerHTML = `<option value="">Selecciona una carrera…</option>${careerOptions}`;
  $('#f-localidad').innerHTML = localityOptions;
  $('#p-carrera').innerHTML = careerOptions;
  $('#f-semestre').innerHTML = Array.from({ length: 10 }, (_, i) => `<option value="${i + 1}">Semestre ${i + 1}</option>`).join('');
  $('#p-empresa').innerHTML = state.empresas.map(e => `<option value="${e.id}">${esc(e.nombre)}</option>`).join('');
}

function populateRulesForm() {
  $('#rulePct').value = state.config.porcentajeMin;
  $('#ruleAvg').value = state.config.promedioMin;
  $('#ruleModality').value = state.config.modalidad;
  $('#ruleExo').value = state.config.exigirExoneracion ? 'true' : 'false';
}

/* --------------------------- Tema / navegación --------------------------- */
function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const icon = $('#themeIcon');
  if (icon) icon.setAttribute('href', theme === 'dark' ? '#i-sun' : '#i-moon');
  const btn = $('#themeBtn');
  if (btn) btn.title = theme === 'dark' ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro';
  try { localStorage.setItem(THEME_KEY, theme); } catch (err) { /* sin persistencia */ }
}

function toggleTheme() {
  const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  applyTheme(next);
}

function navigate(page) {
  if (!PAGE_TITLES[page]) return;
  currentPage = page;
  $$('.page').forEach(p => p.classList.toggle('active', p.id === `page-${page}`));
  renderAll();
  window.scrollTo({ top: 0, behavior: 'smooth' });
  $('#sidebar').classList.remove('open');
  $('#sidebarOverlay').classList.remove('open');
}

/* --------------------------- Exportación --------------------------- */
function csvCell(value) {
  return `"${String(value == null ? '' : value).replace(/"/g, '""')}"`;
}

function downloadCSV(filename, rows) {
  const content = '\uFEFF' + rows.map(row => row.map(csvCell).join(';')).join('\r\n');
  const blob = new Blob([content], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  toast('success', 'Archivo generado', filename);
}

function exportData(kind) {
  if (kind === 'students') {
    const rows = [[
      'Cédula', 'Nombre', 'Carrera', 'Semestre', 'Universidad de origen', 'Materias aprobadas',
      'Total materias', '% materias', 'Promedio', 'Fase I', 'Fase II', 'Exoneración', 'Localidad',
      'Modalidad', 'Elegible', 'Estado', 'Empresa', 'Tutor', 'Inicio'
    ]];
    state.estudiantes.forEach(est => {
      const ev = evaluate(est);
      const st = statusOf(est);
      const empresa = est.asignacion ? getEmpresa(est.asignacion.empresaId) : null;
      rows.push([
        est.cedula, est.nombre, est.carrera, est.semestre,
        est.universidadOrigen === 'UPTZ' ? 'UPTZ' : 'Otra universidad',
        est.materiasAprobadas, est.materiasTotales, `${ev.porcentaje}%`, ev.promedio.toFixed(1),
        est.fase1 ? 'Aprobada' : 'Pendiente', est.fase2 ? 'Aprobada' : 'Pendiente',
        est.universidadOrigen === 'UPTZ' ? 'No aplica' : est.exoneracion ? 'Aprobada' : 'Pendiente',
        est.localidad, est.modalidad, ev.elegible ? 'Sí' : 'No', st.label,
        empresa ? empresa.nombre : '', est.asignacion ? est.asignacion.tutor : '',
        est.asignacion ? formatDate(est.asignacion.inicio) : ''
      ]);
    });
    downloadCSV(`UPTZ_padron_estudiantes_${PERIODO}_${todayISO()}.csv`, rows);
  } else if (kind === 'assignments') {
    const rows = [['Estudiante', 'Cédula', 'Carrera', 'Empresa', 'Municipio', 'Tutor', 'Inicio', 'Estado', 'Fecha de asignación']];
    assignments().forEach(item => {
      rows.push([
        item.estudiante.nombre, item.estudiante.cedula,
        item.plaza ? item.plaza.carrera : item.estudiante.carrera,
        item.empresa ? item.empresa.nombre : '', item.empresa ? item.empresa.municipio : '',
        item.asignacion.tutor, formatDate(item.asignacion.inicio), item.asignacion.estado,
        formatDate(item.asignacion.fechaAsignacion)
      ]);
    });
    downloadCSV(`UPTZ_asignaciones_${PERIODO}_${todayISO()}.csv`, rows);
  }
}

/* --------------------------- Acciones --------------------------- */
function releaseAssignment(id) {
  const est = getEst(id);
  if (!est || !est.asignacion) return;
  const empresa = getEmpresa(est.asignacion.empresaId);
  const ok = window.confirm(`¿Liberar la asignación de ${est.nombre}${empresa ? ' en ' + empresa.nombre : ''}? La plaza volverá a estar disponible.`);
  if (!ok) return;
  est.asignacion = null;
  saveState();
  renderAll();
  if (currentDrawerId === id && $('#studentDrawer').classList.contains('open')) openStudentDrawer(id);
  toast('info', 'Asignación liberada', `La plaza de ${est.nombre} vuelve a estar disponible.`);
}

function completeAssignment(id) {
  const est = getEst(id);
  if (!est || !est.asignacion) return;
  est.asignacion.estado = 'Culminada';
  saveState();
  renderAll();
  if (currentDrawerId === id && $('#studentDrawer').classList.contains('open')) openStudentDrawer(id);
  toast('success', 'Pasantía culminada', `Se actualizó el estado de ${est.nombre}.`);
}

function resetDemo() {
  const ok = window.confirm('¿Restablecer los datos de demostración? Se perderán los cambios guardados en este navegador.');
  if (!ok) return;
  closeAllOverlays();
  state = createSeedState();
  saveState();
  ui.search = '';
  ui.career = '';
  ui.status = '';
  ui.locality = '';
  ui.onlyEligible = false;
  ui.assignmentStatus = '';
  $('#studentSearch').value = '';
  $('#globalSearch').value = '';
  $('#filterCareer').value = '';
  $('#filterStatus').value = '';
  $('#filterLocality').value = '';
  $('#filterAssignment').value = '';
  populateStaticSelects();
  populateRulesForm();
  renderAll();
  toast('success', 'Datos restablecidos', 'El dashboard volvió a su estado de demostración.');
}

function handleAction(action, btn) {
  const id = btn.dataset.id;
  const company = btn.dataset.company;
  switch (action) {
    case 'new-student': openStudentModal(); break;
    case 'edit-student': openStudentModal(id); break;
    case 'assign-student': openAssignModal(id); break;
    case 'assign-company': openAssignModal(null, company); break;
    case 'new-assignment': openAssignModal(); break;
    case 'new-plaza': openPlazaModal(company || null); break;
    case 'unassign': releaseAssignment(id); break;
    case 'complete-assignment': completeAssignment(id); break;
    case 'print': window.print(); break;
    case 'reset-demo': resetDemo(); break;
    default: break;
  }
}

/* --------------------------- Formularios --------------------------- */
function submitStudent(e) {
  e.preventDefault();
  const id = $('#f-id').value;
  const data = formValues();

  if (data.nombre.length < 3) {
    toast('error', 'Nombre inválido', 'Ingresa el nombre y apellido del estudiante.');
    return;
  }
  if (!data.cedula) {
    toast('error', 'Cédula requerida', 'Ingresa la cédula de identidad del estudiante.');
    return;
  }
  if (!CARRERAS.includes(data.carrera)) {
    toast('error', 'Carrera requerida', 'Selecciona una carrera del pensum UPTZ.');
    return;
  }
  if (data.materiasTotales < 1) {
    toast('error', 'Materias inválidas', 'El total de materias debe ser mayor a cero.');
    return;
  }
  if (data.materiasAprobadas > data.materiasTotales) {
    toast('error', 'Materias inconsistentes', 'Las materias aprobadas no pueden superar el total del pensum.');
    return;
  }
  if (data.promedio < 0 || data.promedio > 20) {
    toast('error', 'Promedio inválido', 'El promedio debe estar entre 0 y 20 puntos.');
    return;
  }

  const digits = data.cedula.replace(/\D/g, '');
  const duplicate = state.estudiantes.find(est => est.id !== id && est.cedula.replace(/\D/g, '') === digits);
  if (duplicate) {
    toast('error', 'Cédula duplicada', `La cédula ya está registrada para ${duplicate.nombre}.`);
    return;
  }

  if (id) {
    const est = getEst(id);
    if (!est) return;
    Object.assign(est, data);
    const ev = evaluate(est);
    let released = false;
    if (est.asignacion && !ev.elegible) {
      est.asignacion = null;
      released = true;
    }
    saveState();
    renderAll();
    closeAllOverlays();
    toast('success', 'Ficha actualizada', released
      ? 'El estudiante dejó de cumplir requisitos y su asignación fue liberada.'
      : 'Los datos y la elegibilidad fueron recalculados.');
  } else {
    state.estudiantes.push({ id: `e-${Date.now()}`, ...data, asignacion: null });
    saveState();
    renderAll();
    closeAllOverlays();
    const ev = evaluate(state.estudiantes[state.estudiantes.length - 1]);
    toast('success', 'Estudiante registrado', ev.elegible
      ? 'Cumple todos los requisitos y ya puede ser asignado.'
      : `Quedó registrado con ${ev.failureCount} requisito${ev.failureCount === 1 ? '' : 's'} pendiente${ev.failureCount === 1 ? '' : 's'}.`);
  }
}

function submitAssignment(e) {
  e.preventDefault();
  const sid = $('#f-assign-student').value;
  const est = getEst(sid);
  if (!est) {
    toast('error', 'Estudiante requerido', 'Selecciona un estudiante para asignar la plaza.');
    return;
  }
  if (est.asignacion) {
    toast('error', 'Asignación existente', 'El estudiante ya tiene una plaza asignada.');
    return;
  }
  const ev = evaluate(est);
  if (!ev.elegible) {
    toast('error', 'Estudiante no elegible', 'No cumple los requisitos para iniciar prácticas profesionales.');
    return;
  }
  const radio = $('input[name="plaza"]:checked');
  if (!radio) {
    toast('error', 'Plaza requerida', 'Selecciona una plaza disponible.');
    return;
  }
  const [empresaId, plazaId] = radio.value.split('|');
  const found = findPlaza(plazaId);
  if (!found || plazaAvailable(plazaId) <= 0) {
    toast('error', 'Plaza no disponible', 'La vacante seleccionada ya fue ocupada. Elige otra plaza.');
    renderPlazaList();
    return;
  }
  const tutor = $('#f-tutor').value.trim();
  const inicio = $('#f-inicio').value;
  if (!tutor) {
    toast('error', 'Tutor requerido', 'Indica el tutor empresarial responsable.');
    return;
  }
  if (!inicio) {
    toast('error', 'Fecha requerida', 'Selecciona la fecha de inicio de la pasantía.');
    return;
  }

  est.asignacion = {
    empresaId,
    plazaId,
    tutor,
    inicio,
    estado: inicio <= todayISO() ? 'En curso' : 'Por iniciar',
    fechaAsignacion: todayISO(),
    observaciones: $('#f-observaciones').value.trim()
  };
  saveState();
  renderAll();
  closeAllOverlays();
  toast('success', 'Asignación confirmada', `${est.nombre} fue asignado a ${found.empresa.nombre}.`);
}

function submitPlaza(e) {
  e.preventDefault();
  const empresa = getEmpresa($('#p-empresa').value);
  if (!empresa) {
    toast('error', 'Empresa requerida', 'Selecciona la empresa del convenio.');
    return;
  }
  const carrera = $('#p-carrera').value;
  const vacantes = Number($('#p-vacantes').value);
  if (!CARRERAS.includes(carrera)) {
    toast('error', 'Carrera requerida', 'Selecciona la carrera de la plaza.');
    return;
  }
  if (!Number.isFinite(vacantes) || vacantes < 1) {
    toast('error', 'Vacantes inválidas', 'Registra al menos una vacante.');
    return;
  }
  empresa.plazas.push({
    id: `p-${Date.now()}`,
    carrera,
    vacantes,
    tutor: $('#p-tutor').value.trim()
  });
  saveState();
  renderAll();
  closeAllOverlays();
  toast('success', 'Plaza registrada', `${vacantes} vacante${vacantes === 1 ? '' : 's'} de ${carrera} en ${empresa.nombre}.`);
}

function submitRules(e) {
  e.preventDefault();
  const porcentajeMin = Math.min(100, Math.max(0, Number($('#rulePct').value) || 0));
  const promedioMin = Math.min(20, Math.max(0, Number($('#ruleAvg').value) || 0));
  state.config = {
    porcentajeMin,
    promedioMin,
    modalidad: $('#ruleModality').value,
    exigirExoneracion: $('#ruleExo').value === 'true'
  };
  saveState();
  renderAll();
  populateRulesForm();
  toast('success', 'Criterios actualizados', 'La elegibilidad del padrón fue recalculada con los nuevos parámetros.');
}

function resetRules() {
  state.config = { ...DEFAULT_CONFIG };
  saveState();
  renderAll();
  populateRulesForm();
  toast('info', 'Criterios restaurados', 'Se aplicaron los valores institucionales por defecto.');
}

/* --------------------------- Eventos --------------------------- */
function bindEvents() {
  document.addEventListener('click', e => {
    const pageBtn = e.target.closest('[data-page]');
    if (pageBtn) {
      navigate(pageBtn.dataset.page);
      return;
    }
    const closeBtn = e.target.closest('[data-close]');
    if (closeBtn) {
      closeAllOverlays();
      return;
    }
    const viewBtn = e.target.closest('[data-view]');
    if (viewBtn) {
      openStudentDrawer(viewBtn.dataset.view);
      return;
    }
    const exportBtn = e.target.closest('[data-export]');
    if (exportBtn) {
      exportData(exportBtn.dataset.export);
      return;
    }
    const actionBtn = e.target.closest('[data-action]');
    if (actionBtn) {
      handleAction(actionBtn.dataset.action, actionBtn);
      return;
    }
  });

  $('#themeBtn').addEventListener('click', toggleTheme);
  $('#menuBtn').addEventListener('click', () => {
    $('#sidebar').classList.toggle('open');
    $('#sidebarOverlay').classList.toggle('open');
  });
  $('#sidebarOverlay').addEventListener('click', () => {
    $('#sidebar').classList.remove('open');
    $('#sidebarOverlay').classList.remove('open');
  });

  $('#studentSearch').addEventListener('input', e => {
    ui.search = e.target.value;
    $('#globalSearch').value = e.target.value;
    renderStudents();
  });

  $('#globalSearch').addEventListener('keydown', e => {
    if (e.key !== 'Enter') return;
    e.preventDefault();
    ui.search = e.target.value.trim();
    $('#studentSearch').value = ui.search;
    navigate('estudiantes');
  });

  $('#filterCareer').addEventListener('change', e => { ui.career = e.target.value; renderStudents(); });
  $('#filterStatus').addEventListener('change', e => { ui.status = e.target.value; renderStudents(); });
  $('#filterLocality').addEventListener('change', e => { ui.locality = e.target.value; renderStudents(); });
  $('#filterOnlyEligible').addEventListener('click', () => {
    ui.onlyEligible = !ui.onlyEligible;
    renderStudents();
  });
  $('#clearFilters').addEventListener('click', () => {
    ui.search = ''; ui.career = ''; ui.status = ''; ui.locality = ''; ui.onlyEligible = false;
    $('#studentSearch').value = '';
    $('#globalSearch').value = '';
    $('#filterCareer').value = '';
    $('#filterStatus').value = '';
    $('#filterLocality').value = '';
    renderStudents();
  });

  $('#filterAssignment').addEventListener('change', e => {
    ui.assignmentStatus = e.target.value;
    renderAssignments();
  });

  $('#studentForm').addEventListener('submit', submitStudent);
  $('#studentForm').addEventListener('input', updateFormPreview);
  $('#studentForm').addEventListener('change', updateFormPreview);
  $('#f-origen').addEventListener('change', updateExoState);

  $('#assignForm').addEventListener('submit', submitAssignment);
  $('#f-assign-student-select').addEventListener('change', e => {
    $('#f-assign-student').value = e.target.value;
    $('#f-tutor').value = '';
    renderPlazaList();
  });
  $('#plazaList').addEventListener('change', e => {
    const radio = e.target.closest('input[name="plaza"]');
    if (radio) $('#f-tutor').value = radio.dataset.tutor || '';
  });

  $('#plazaForm').addEventListener('submit', submitPlaza);
  $('#rulesForm').addEventListener('submit', submitRules);
  $('#resetRules').addEventListener('click', resetRules);
  $('#p-empresa').addEventListener('change', () => {
    const emp = getEmpresa($('#p-empresa').value);
    if (emp) $('#p-tutor').value = emp.contacto || '';
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeAllOverlays();
      $('#sidebar').classList.remove('open');
      $('#sidebarOverlay').classList.remove('open');
    }
  });
}

/* --------------------------- Inicio --------------------------- */
function init() {
  let theme = 'light';
  try { theme = localStorage.getItem(THEME_KEY) || 'light'; } catch (err) { /* sin persistencia */ }
  applyTheme(theme === 'dark' ? 'dark' : 'light');
  populateStaticSelects();
  populateRulesForm();
  bindEvents();
  renderAll();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
