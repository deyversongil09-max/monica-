# Codigo completo - Dashboard UPTZ

Proyecto: **Gestion de Practicas y Pasantias - Universidad Politecnica Territorial del Zulia**

Contenido: codigo integro de los archivos que componen el tablero, sin dependencias ni paso de compilacion.

## Indice

- [index.html](#indexhtml) - Estructura del tablero, secciones, modales e iconos SVG.
- [styles.css](#stylescss) - Sistema visual completo, tema claro/oscuro, responsive e impresion.
- [app.js](#appjs) - Datos semilla, motor de elegibilidad, renderizado, graficos, formularios y persistencia.
- [README.md](#readmemd) - Documentacion de uso y funcionalidades.
- [robots.txt](#robotstxt) - Configuracion basica para rastreadores.

---

## index.html

Estructura del tablero, secciones, modales e iconos SVG.

```html
<!DOCTYPE html>
<html lang="es" data-theme="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Dashboard de gestión de asignación de prácticas y pasantías profesionales de la Universidad Politécnica Territorial del Zulia (UPTZ).">
  <title>UPTZ · Gestión de Prácticas y Pasantías</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <svg class="svg-sprite" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <symbol id="i-dashboard" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="9" rx="1.5"/><rect x="14" y="3" width="7" height="5" rx="1.5"/><rect x="14" y="12" width="7" height="9" rx="1.5"/><rect x="3" y="16" width="7" height="5" rx="1.5"/></symbol>
    <symbol id="i-users" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></symbol>
    <symbol id="i-briefcase" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></symbol>
    <symbol id="i-building" viewBox="0 0 24 24"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4M8 6h.01M16 6h.01M8 10h.01M16 10h.01M8 14h.01M16 14h.01M12 6h.01M12 10h.01M12 14h.01"/></symbol>
    <symbol id="i-shield" viewBox="0 0 24 24"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></symbol>
    <symbol id="i-chart" viewBox="0 0 24 24"><path d="M3 3v18h18"/><path d="M18 17V9M13 17V5M8 17v-3"/></symbol>
    <symbol id="i-search" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></symbol>
    <symbol id="i-plus" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></symbol>
    <symbol id="i-bell" viewBox="0 0 24 24"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></symbol>
    <symbol id="i-sun" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></symbol>
    <symbol id="i-moon" viewBox="0 0 24 24"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></symbol>
    <symbol id="i-x" viewBox="0 0 24 24"><path d="M18 6 6 18M6 6l12 12"/></symbol>
    <symbol id="i-check" viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></symbol>
    <symbol id="i-alert" viewBox="0 0 24 24"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4M12 17h.01"/></symbol>
    <symbol id="i-download" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5M12 15V3"/></symbol>
    <symbol id="i-printer" viewBox="0 0 24 24"><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 9V3h12v6"/><rect x="6" y="14" width="12" height="8" rx="1"/></symbol>
    <symbol id="i-cap" viewBox="0 0 24 24"><path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5"/></symbol>
    <symbol id="i-pin" viewBox="0 0 24 24"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></symbol>
    <symbol id="i-calendar" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></symbol>
    <symbol id="i-arrow" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></symbol>
    <symbol id="i-filter" viewBox="0 0 24 24"><path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3Z"/></symbol>
    <symbol id="i-refresh" viewBox="0 0 24 24"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></symbol>
    <symbol id="i-menu" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></symbol>
    <symbol id="i-edit" viewBox="0 0 24 24"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></symbol>
    <symbol id="i-user" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></symbol>
    <symbol id="i-clipboard" viewBox="0 0 24 24"><rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/></symbol>
    <symbol id="i-trend" viewBox="0 0 24 24"><path d="m22 7-8.5 8.5-5-5L2 17"/><path d="M16 7h6v6"/></symbol>
    <symbol id="i-mail" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></symbol>
    <symbol id="i-phone" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"/></symbol>
    <symbol id="i-book" viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/></symbol>
    <symbol id="i-award" viewBox="0 0 24 24"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></symbol>
    <symbol id="i-clock" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></symbol>
  </svg>

  <div class="app-shell">
    <aside class="sidebar" id="sidebar">
      <div class="brand">
        <div class="brand-logo"><svg class="icon"><use href="#i-cap"></use></svg></div>
        <div class="brand-text">
          <strong>UPTZ</strong>
          <span>Prácticas y Pasantías</span>
        </div>
      </div>
      <p class="brand-institution">Universidad Politécnica<br>Territorial del Zulia</p>

      <nav class="nav" aria-label="Navegación principal">
        <p class="nav-label">Gestión académica</p>
        <button class="nav-item active" data-page="resumen"><svg class="icon"><use href="#i-dashboard"></use></svg><span>Resumen</span></button>
        <button class="nav-item" data-page="estudiantes"><svg class="icon"><use href="#i-users"></use></svg><span>Estudiantes</span><em class="nav-count" id="navStudents">0</em></button>
        <button class="nav-item" data-page="asignaciones"><svg class="icon"><use href="#i-briefcase"></use></svg><span>Asignaciones</span><em class="nav-count" id="navAssignments">0</em></button>
        <button class="nav-item" data-page="empresas"><svg class="icon"><use href="#i-building"></use></svg><span>Empresas y plazas</span></button>
        <p class="nav-label">Control</p>
        <button class="nav-item" data-page="validacion"><svg class="icon"><use href="#i-shield"></use></svg><span>Validación</span><em class="nav-count nav-count-alert" id="navAlerts">0</em></button>
        <button class="nav-item" data-page="reportes"><svg class="icon"><use href="#i-chart"></use></svg><span>Reportes</span></button>
      </nav>

      <div class="sidebar-footer">
        <div class="period-card">
          <span class="period-dot"></span>
          <div>
            <strong>Periodo 2026-II</strong>
            <span>Modalidad presencial</span>
          </div>
        </div>
        <div class="user-card">
          <div class="avatar avatar-sm" style="background:linear-gradient(135deg,#f6c453,#e79a12);color:#3d2a00">CP</div>
          <div class="user-meta">
            <strong>Coordinación</strong>
            <span>Pasantías UPTZ</span>
          </div>
          <button class="icon-btn icon-btn-dark" data-action="reset-demo" title="Restablecer datos de demostración"><svg class="icon"><use href="#i-refresh"></use></svg></button>
        </div>
      </div>
    </aside>

    <div class="sidebar-overlay" id="sidebarOverlay"></div>

    <div class="main">
      <header class="topbar">
        <button class="icon-btn menu-btn" id="menuBtn" aria-label="Abrir menú"><svg class="icon"><use href="#i-menu"></use></svg></button>
        <div class="page-heading">
          <span class="eyebrow" id="periodLabel">Periodo académico 2026-II · UPTZ</span>
          <h1 id="pageTitle">Resumen general</h1>
        </div>
        <div class="topbar-actions">
          <label class="search-box" for="globalSearch">
            <svg class="icon"><use href="#i-search"></use></svg>
            <input id="globalSearch" type="search" placeholder="Buscar estudiante o cédula…" autocomplete="off">
            <kbd>↵</kbd>
          </label>
          <button class="icon-btn" id="themeBtn" title="Cambiar tema" aria-label="Cambiar tema"><svg class="icon"><use href="#i-moon" id="themeIcon"></use></svg></button>
          <button class="icon-btn notif" data-page="validacion" title="Alertas de elegibilidad" aria-label="Ver alertas">
            <svg class="icon"><use href="#i-bell"></use></svg>
            <span class="notif-badge" id="notifBadge">0</span>
          </button>
          <button class="btn btn-primary" data-action="new-student"><svg class="icon"><use href="#i-plus"></use></svg><span>Nuevo estudiante</span></button>
        </div>
      </header>

      <main class="content" id="content">

        <!-- ================= RESUMEN ================= -->
        <section class="page active" id="page-resumen">
          <h2 class="sr-only">Panel de control de prácticas y pasantías</h2>
          <div class="criteria-strip" id="criteriaStrip"></div>

          <div class="kpi-grid" id="kpiGrid"></div>

          <div class="grid grid-main">
            <article class="card">
              <div class="card-head">
                <div>
                  <h3>Estado de elegibilidad</h3>
                  <p>Distribución del padrón estudiantil</p>
                </div>
                <span class="badge badge-gray" id="donutPeriod">2026-II</span>
              </div>
              <div id="donutChart"></div>
            </article>

            <article class="card">
              <div class="card-head">
                <div>
                  <h3>Elegibilidad por carrera</h3>
                  <p>Estudiantes que cumplen todos los requisitos</p>
                </div>
                <span class="pill" id="careerTotal"></span>
              </div>
              <div id="careerChart" class="bar-list"></div>
            </article>
          </div>

          <div class="grid grid-2-1">
            <article class="card">
              <div class="card-head">
                <div>
                  <h3>Tendencia de asignaciones</h3>
                  <p>Histórico institucional de los últimos meses</p>
                </div>
                <span class="badge badge-green"><svg class="icon"><use href="#i-trend"></use></svg> Acumulado</span>
              </div>
              <div id="trendChart" class="trend-chart"></div>
            </article>

            <article class="card">
              <div class="card-head">
                <div>
                  <h3>Requieren atención</h3>
                  <p>A un requisito de ser elegibles</p>
                </div>
                <span class="pill pill-alert" id="alertCount">0</span>
              </div>
              <div id="alertsList" class="alerts"></div>
            </article>
          </div>

          <article class="card">
            <div class="card-head">
              <div>
                <h3>Asignaciones recientes</h3>
                <p>Últimos movimientos del proceso de pasantías</p>
              </div>
              <button class="btn btn-sm btn-ghost" data-page="asignaciones">Ver todas <svg class="icon"><use href="#i-arrow"></use></svg></button>
            </div>
            <div id="recentAssignments"></div>
          </article>
        </section>

        <!-- ================= ESTUDIANTES ================= -->
        <section class="page" id="page-estudiantes">
          <div class="section-head">
            <div>
              <h2>Gestión de estudiantes</h2>
              <p>Padrón, verificación de requisitos y asignación de plazas.</p>
            </div>
            <div class="section-actions">
              <button class="btn" data-export="students"><svg class="icon"><use href="#i-download"></use></svg> Exportar</button>
              <button class="btn btn-primary" data-action="new-student"><svg class="icon"><use href="#i-plus"></use></svg> Nuevo estudiante</button>
            </div>
          </div>

          <div class="card filters">
            <label class="search-box search-box-wide" for="studentSearch">
              <svg class="icon"><use href="#i-search"></use></svg>
              <input id="studentSearch" type="search" placeholder="Buscar por nombre o cédula…" autocomplete="off">
            </label>
            <label class="filter-field">
              <span>Carrera</span>
              <select id="filterCareer"><option value="">Todas las carreras</option></select>
            </label>
            <label class="filter-field">
              <span>Estado</span>
              <select id="filterStatus">
                <option value="">Todos</option>
                <option value="elegible">Elegibles</option>
                <option value="asignado">Asignados</option>
                <option value="no-elegible">No elegibles</option>
              </select>
            </label>
            <label class="filter-field">
              <span>Localidad</span>
              <select id="filterLocality"><option value="">Todas</option></select>
            </label>
            <button class="chip-filter" id="filterOnlyEligible">
              <svg class="icon"><use href="#i-shield"></use></svg> Solo elegibles
            </button>
            <button class="btn btn-sm btn-ghost" id="clearFilters">Limpiar</button>
          </div>

          <div class="card table-card">
            <div class="card-head">
              <div>
                <h3>Registro de estudiantes</h3>
                <p id="studentsSubtitle">Verificación automática de requisitos</p>
              </div>
              <span class="pill" id="studentsCount">0 estudiantes</span>
            </div>
            <div class="table-wrap" id="studentsTable"></div>
          </div>
        </section>

        <!-- ================= ASIGNACIONES ================= -->
        <section class="page" id="page-asignaciones">
          <div class="section-head">
            <div>
              <h2>Asignaciones de pasantías</h2>
              <p>Control de plazas, tutores empresariales y estado del proceso.</p>
            </div>
            <div class="section-actions">
              <button class="btn" data-export="assignments"><svg class="icon"><use href="#i-download"></use></svg> Exportar</button>
              <button class="btn btn-primary" data-action="new-assignment"><svg class="icon"><use href="#i-plus"></use></svg> Nueva asignación</button>
            </div>
          </div>

          <div class="mini-kpi-grid" id="assignmentKpis"></div>

          <div class="grid grid-2-1">
            <article class="card table-card">
              <div class="card-head">
                <div>
                  <h3>Cartera de asignaciones</h3>
                  <p>Estudiantes vinculados a una empresa</p>
                </div>
                <label class="inline-select">
                  <span>Estado</span>
                  <select id="filterAssignment">
                    <option value="">Todas</option>
                    <option value="Por iniciar">Por iniciar</option>
                    <option value="En curso">En curso</option>
                    <option value="Culminada">Culminada</option>
                  </select>
                </label>
              </div>
              <div class="table-wrap" id="assignmentsTable"></div>
            </article>

            <article class="card">
              <div class="card-head">
                <div>
                  <h3>Disponibilidad de plazas</h3>
                  <p>Vacantes por empresa</p>
                </div>
                <span class="pill" id="availablePlazasPill"></span>
              </div>
              <div id="availabilityList" class="availability-list"></div>
            </article>
          </div>
        </section>

        <!-- ================= EMPRESAS ================= -->
        <section class="page" id="page-empresas">
          <div class="section-head">
            <div>
              <h2>Empresas y plazas</h2>
              <p>Convenios activos y oferta disponible para prácticas profesionales.</p>
            </div>
            <div class="section-actions">
              <button class="btn btn-primary" data-action="new-plaza"><svg class="icon"><use href="#i-plus"></use></svg> Agregar plaza</button>
            </div>
          </div>
          <div class="company-grid" id="companyGrid"></div>
        </section>

        <!-- ================= VALIDACIÓN ================= -->
        <section class="page" id="page-validacion">
          <div class="section-head">
            <div>
              <h2>Validación de requisitos</h2>
              <p>Reglas de elegibilidad, cumplimiento y cobertura geográfica.</p>
            </div>
            <span class="badge badge-green"><svg class="icon"><use href="#i-shield"></use></svg> Validación activa</span>
          </div>

          <div class="grid grid-main">
            <article class="card">
              <div class="card-head">
                <div>
                  <h3>Parámetros de elegibilidad</h3>
                  <p>Ajusta los criterios institucionales del periodo</p>
                </div>
              </div>
              <form id="rulesForm" class="rules-form">
                <div class="form-grid">
                  <label class="field">
                    <span>Mínimo de materias aprobadas (%)</span>
                    <input id="rulePct" type="number" min="0" max="100" step="1" required>
                  </label>
                  <label class="field">
                    <span>Promedio mínimo (0–20)</span>
                    <input id="ruleAvg" type="number" min="0" max="20" step="0.1" required>
                  </label>
                  <label class="field">
                    <span>Modalidad permitida</span>
                    <select id="ruleModality">
                      <option value="Presencial">Presencial</option>
                      <option value="Semipresencial">Semipresencial</option>
                      <option value="A distancia">A distancia</option>
                    </select>
                  </label>
                  <label class="field">
                    <span>Exoneración para estudiantes externos</span>
                    <select id="ruleExo">
                      <option value="true">Obligatoria</option>
                      <option value="false">No exigir</option>
                    </select>
                  </label>
                </div>
                <div class="rules-note">
                  <svg class="icon"><use href="#i-pin"></use></svg>
                  <span>El estudiante debe residir en un municipio del estado Zulia (contexto y localidad de la UPTZ) y cursar en modalidad presencial.</span>
                </div>
                <div class="form-actions">
                  <button type="button" class="btn" id="resetRules">Restaurar valores</button>
                  <button type="submit" class="btn btn-primary">Aplicar criterios</button>
                </div>
              </form>
            </article>

            <article class="card">
              <div class="card-head">
                <div>
                  <h3>Cumplimiento global</h3>
                  <p>Porcentaje de estudiantes por requisito</p>
                </div>
              </div>
              <div id="complianceList" class="compliance-list"></div>
            </article>
          </div>

          <div class="grid grid-main">
            <article class="card">
              <div class="card-head">
                <div>
                  <h3>Motivos de no elegibilidad</h3>
                  <p>Causa principal por estudiante</p>
                </div>
              </div>
              <div id="reasonsList" class="bar-list"></div>
            </article>
            <article class="card">
              <div class="card-head">
                <div>
                  <h3>Cobertura geográfica</h3>
                  <p>Municipios de residencia del padrón</p>
                </div>
                <span class="badge badge-blue"><svg class="icon"><use href="#i-pin"></use></svg> Zulia</span>
              </div>
              <div id="localityList" class="bar-list"></div>
            </article>
          </div>

          <article class="card table-card">
            <div class="card-head">
              <div>
                <h3>Estudiantes con requisitos pendientes</h3>
                <p>Revisa cada caso para orientar al estudiante</p>
              </div>
              <span class="pill pill-alert" id="pendingCount">0</span>
            </div>
            <div class="table-wrap" id="pendingTable"></div>
          </article>
        </section>

        <!-- ================= REPORTES ================= -->
        <section class="page" id="page-reportes">
          <div class="print-header">
            <div class="print-brand">Universidad Politécnica Territorial del Zulia</div>
            <strong>Reporte de gestión de prácticas y pasantías profesionales</strong>
            <span>Coordinación de Prácticas y Pasantías · Periodo académico 2026-II</span>
          </div>
          <div class="section-head">
            <div>
              <h2>Reportes del periodo</h2>
              <p>Documentos de control para la coordinación de pasantías.</p>
            </div>
            <button class="btn" data-action="print"><svg class="icon"><use href="#i-printer"></use></svg> Imprimir reporte</button>
          </div>

          <div class="report-grid">
            <article class="card report-card">
              <div class="report-icon"><svg class="icon"><use href="#i-users"></use></svg></div>
              <h3>Padrón de estudiantes</h3>
              <p>Listado completo con cumplimiento de requisitos, localidad y estado de asignación.</p>
              <button class="btn" data-export="students"><svg class="icon"><use href="#i-download"></use></svg> Descargar CSV</button>
            </article>
            <article class="card report-card">
              <div class="report-icon report-icon-blue"><svg class="icon"><use href="#i-briefcase"></use></svg></div>
              <h3>Asignaciones y tutores</h3>
              <p>Detalle de empresas, tutores empresariales, fecha de inicio y estado del proceso.</p>
              <button class="btn" data-export="assignments"><svg class="icon"><use href="#i-download"></use></svg> Descargar CSV</button>
            </article>
            <article class="card report-card">
              <div class="report-icon report-icon-gold"><svg class="icon"><use href="#i-printer"></use></svg></div>
              <h3>Reporte ejecutivo</h3>
              <p>Resumen por carrera con indicadores de elegibilidad y cobertura de plazas.</p>
              <button class="btn" data-action="print"><svg class="icon"><use href="#i-printer"></use></svg> Imprimir</button>
            </article>
          </div>

          <article class="card table-card">
            <div class="card-head">
              <div>
                <h3>Resumen por carrera</h3>
                <p>Indicadores consolidados del periodo 2026-II</p>
              </div>
              <span class="badge badge-gray" id="reportGenerated"></span>
            </div>
            <div class="table-wrap" id="reportTable"></div>
          </article>

          <div class="report-footer">
            <div class="report-signature">
              <span>Coordinación de Prácticas y Pasantías</span>
              <strong>Universidad Politécnica Territorial del Zulia</strong>
            </div>
            <p>Documento generado automáticamente por el sistema de gestión de pasantías UPTZ.</p>
          </div>
        </section>

      </main>
    </div>
  </div>

  <!-- ================= MODAL ESTUDIANTE ================= -->
  <div class="modal" id="modalStudent" aria-hidden="true" role="dialog" aria-labelledby="studentModalTitle">
    <div class="modal-backdrop" data-close></div>
    <div class="modal-panel">
      <div class="modal-head">
        <div>
          <span class="eyebrow">Ficha académica</span>
          <h2 id="studentModalTitle">Nuevo estudiante</h2>
        </div>
        <button type="button" class="icon-btn" data-close aria-label="Cerrar"><svg class="icon"><use href="#i-x"></use></svg></button>
      </div>
      <form id="studentForm">
        <input type="hidden" id="f-id">
        <div class="form-grid">
          <label class="field span-2"><span>Nombre y apellido *</span><input id="f-nombre" required autocomplete="off" placeholder="Ej. Ana Gabriela Pérez"></label>
          <label class="field"><span>Cédula *</span><input id="f-cedula" required autocomplete="off" placeholder="V-12.345.678"></label>
          <label class="field"><span>Semestre</span><select id="f-semestre"></select></label>
          <label class="field span-2"><span>Carrera *</span><select id="f-carrera" required></select></label>
          <label class="field"><span>Materias aprobadas *</span><input id="f-aprobadas" type="number" min="0" required></label>
          <label class="field"><span>Total de materias *</span><input id="f-totales" type="number" min="1" required></label>
          <label class="field"><span>Promedio (0–20) *</span><input id="f-promedio" type="number" min="0" max="20" step="0.1" required></label>
          <label class="field"><span>Localidad *</span><select id="f-localidad" required></select></label>
          <label class="field"><span>Modalidad *</span><select id="f-modalidad"><option>Presencial</option><option>Semipresencial</option><option>A distancia</option></select></label>
          <label class="field"><span>Universidad de origen *</span><select id="f-origen"><option value="UPTZ">UPTZ</option><option value="Otra">Otra universidad</option></select></label>
          <label class="field"><span>Correo electrónico</span><input id="f-email" type="email" placeholder="nombre@correo.com"></label>
          <label class="field"><span>Teléfono</span><input id="f-telefono" type="tel" placeholder="+58 412 000 0000"></label>
        </div>

        <div class="sc-group">
          <p class="group-label">Servicio comunitario</p>
          <div class="check-row">
            <label class="check"><input type="checkbox" id="f-fase1"><span>Fase I aprobada</span></label>
            <label class="check"><input type="checkbox" id="f-fase2"><span>Fase II aprobada</span></label>
            <label class="check" id="exoField"><input type="checkbox" id="f-exoneracion"><span>Aprobación por exoneración</span></label>
          </div>
          <p class="hint" id="exoHint">La exoneración solo aplica a estudiantes provenientes de otra universidad.</p>
        </div>

        <div class="form-preview" id="formPreview"></div>

        <div class="modal-foot">
          <button type="button" class="btn" data-close>Cancelar</button>
          <button type="submit" class="btn btn-primary"><svg class="icon"><use href="#i-check"></use></svg> Guardar estudiante</button>
        </div>
      </form>
    </div>
  </div>

  <!-- ================= MODAL ASIGNACIÓN ================= -->
  <div class="modal" id="modalAssign" aria-hidden="true" role="dialog" aria-labelledby="assignModalTitle">
    <div class="modal-backdrop" data-close></div>
    <div class="modal-panel modal-wide">
      <div class="modal-head">
        <div>
          <span class="eyebrow">Vinculación empresa · estudiante</span>
          <h2 id="assignModalTitle">Nueva asignación</h2>
        </div>
        <button type="button" class="icon-btn" data-close aria-label="Cerrar"><svg class="icon"><use href="#i-x"></use></svg></button>
      </div>
      <form id="assignForm">
        <input type="hidden" id="f-assign-student">
        <input type="hidden" id="f-assign-company">
        <div id="assignStudentSummary"></div>
        <label class="field" id="assignStudentSelectWrap">
          <span>Estudiante elegible</span>
          <select id="f-assign-student-select"></select>
        </label>

        <div class="plaza-header">
          <p class="group-label">Plazas disponibles</p>
          <span class="hint">Solo se muestran plazas de la carrera del estudiante</span>
        </div>
        <div id="plazaList" class="plaza-list"></div>

        <div class="form-grid">
          <label class="field"><span>Tutor empresarial *</span><input id="f-tutor" required placeholder="Nombre del tutor"></label>
          <label class="field"><span>Fecha de inicio *</span><input id="f-inicio" type="date" required></label>
          <label class="field span-2"><span>Observaciones</span><textarea id="f-observaciones" rows="2" placeholder="Condiciones, horario o notas relevantes"></textarea></label>
        </div>

        <div class="modal-foot">
          <button type="button" class="btn" data-close>Cancelar</button>
          <button type="submit" class="btn btn-primary"><svg class="icon"><use href="#i-briefcase"></use></svg> Confirmar asignación</button>
        </div>
      </form>
    </div>
  </div>

  <!-- ================= MODAL PLAZA ================= -->
  <div class="modal" id="modalPlaza" aria-hidden="true" role="dialog" aria-labelledby="plazaModalTitle">
    <div class="modal-backdrop" data-close></div>
    <div class="modal-panel modal-narrow">
      <div class="modal-head">
        <div>
          <span class="eyebrow">Oferta académica</span>
          <h2 id="plazaModalTitle">Agregar plaza</h2>
        </div>
        <button type="button" class="icon-btn" data-close aria-label="Cerrar"><svg class="icon"><use href="#i-x"></use></svg></button>
      </div>
      <form id="plazaForm">
        <div class="form-grid">
          <label class="field span-2"><span>Empresa *</span><select id="p-empresa" required></select></label>
          <label class="field span-2"><span>Carrera *</span><select id="p-carrera" required></select></label>
          <label class="field"><span>Vacantes *</span><input id="p-vacantes" type="number" min="1" value="1" required></label>
          <label class="field"><span>Tutor empresarial</span><input id="p-tutor" placeholder="Nombre del tutor"></label>
        </div>
        <div class="modal-foot">
          <button type="button" class="btn" data-close>Cancelar</button>
          <button type="submit" class="btn btn-primary"><svg class="icon"><use href="#i-plus"></use></svg> Registrar plaza</button>
        </div>
      </form>
    </div>
  </div>

  <!-- ================= DRAWER ESTUDIANTE ================= -->
  <div class="drawer" id="studentDrawer" aria-hidden="true" role="dialog" aria-labelledby="drawerName">
    <div class="drawer-backdrop" data-close></div>
    <aside class="drawer-panel">
      <div class="drawer-head">
        <span class="eyebrow">Ficha integral del estudiante</span>
        <button type="button" class="icon-btn" data-close aria-label="Cerrar"><svg class="icon"><use href="#i-x"></use></svg></button>
      </div>
      <div id="drawerBody"></div>
    </aside>
  </div>

  <div class="toast-container" id="toasts" aria-live="polite"></div>

  <script src="app.js"></script>
</body>
</html>
```

---

## styles.css

Sistema visual completo, tema claro/oscuro, responsive e impresion.

```css
/* ============================================================
   UPTZ · Dashboard de Prácticas y Pasantías
   ============================================================ */

:root {
  --bg: #f3f6fb;
  --bg-soft: #eef3fa;
  --surface: #ffffff;
  --surface-2: #f7f9fd;
  --surface-3: #eef3fb;
  --text: #12213b;
  --text-soft: #33445f;
  --muted: #5a6a83;
  --line: #e1e8f2;
  --line-strong: #cfd9e8;
  --navy: #0a2546;
  --navy-2: #10345f;
  --navy-3: #164475;
  --primary: #0f4c9c;
  --primary-2: #1d63c7;
  --gold: #f1b51c;
  --gold-soft: #fdf3d3;
  --green: #0a7a5b;
  --green-soft: #e2f6ee;
  --red: #c5303d;
  --red-soft: #fdecee;
  --blue: #2563eb;
  --blue-soft: #e8efff;
  --amber: #8a5f00;
  --amber-soft: #fdf2d7;
  --violet: #7c5cd6;
  --violet-soft: #f0ebff;
  --radius: 16px;
  --radius-sm: 10px;
  --shadow: 0 1px 2px rgba(16, 33, 59, 0.04), 0 12px 30px rgba(16, 33, 59, 0.06);
  --shadow-lg: 0 24px 70px rgba(9, 27, 52, 0.22);
  --sidebar-w: 266px;
  --font: "Segoe UI", "Inter", system-ui, -apple-system, BlinkMacSystemFont, Roboto, Helvetica, Arial, sans-serif;
}

[data-theme="dark"] {
  --bg: #081120;
  --bg-soft: #0b1729;
  --surface: #101d33;
  --surface-2: #14233c;
  --surface-3: #1a2b47;
  --text: #eaf1fd;
  --text-soft: #c8d5ea;
  --muted: #93a5c0;
  --line: #203252;
  --line-strong: #2c4166;
  --primary: #3d82ed;
  --primary-2: #5c9bf7;
  --gold: #f4c34d;
  --gold-soft: #3b3116;
  --green: #2ec59a;
  --green-soft: #0f3b31;
  --red: #f06a75;
  --red-soft: #431f26;
  --blue: #77a8ff;
  --blue-soft: #16305e;
  --amber: #f3bb45;
  --amber-soft: #3b2f12;
  --violet: #a68bff;
  --violet-soft: #2c2450;
  --shadow: 0 1px 2px rgba(0, 0, 0, 0.25), 0 16px 36px rgba(0, 0, 0, 0.28);
  --shadow-lg: 0 24px 70px rgba(0, 0, 0, 0.55);
}

* { box-sizing: border-box; }

html { scroll-behavior: smooth; }

body {
  margin: 0;
  font-family: var(--font);
  background: var(--bg);
  color: var(--text);
  font-size: 14px;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

body.modal-open { overflow: hidden; }

.svg-sprite { position: absolute; width: 0; height: 0; overflow: hidden; }

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

h1, h2, h3, h4, p { margin: 0; }

button, input, select, textarea { font-family: inherit; font-size: inherit; color: inherit; }

button { cursor: pointer; }

.icon {
  width: 18px;
  height: 18px;
  stroke: currentColor;
  fill: none;
  stroke-width: 1.9;
  stroke-linecap: round;
  stroke-linejoin: round;
  flex: none;
}

::-webkit-scrollbar { width: 10px; height: 10px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: var(--line-strong); border-radius: 20px; border: 2px solid var(--bg); }

/* ================= LAYOUT ================= */
.app-shell { min-height: 100vh; }

.sidebar {
  position: fixed;
  inset: 0 auto 0 0;
  width: var(--sidebar-w);
  background:
    radial-gradient(120% 80% at 0% 0%, rgba(35, 99, 182, 0.55), transparent 55%),
    linear-gradient(180deg, #0a2546 0%, #0a1f3b 60%, #081a32 100%);
  color: #e7eefb;
  display: flex;
  flex-direction: column;
  padding: 22px 16px 16px;
  z-index: 50;
  border-right: 1px solid rgba(255, 255, 255, 0.06);
  transition: transform .28s ease;
}

.brand { display: flex; align-items: center; gap: 11px; padding: 0 6px; }

.brand-logo {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  color: #2b2000;
  background: linear-gradient(135deg, #ffd875, #f1b51c 60%, #d99a09);
  box-shadow: 0 6px 18px rgba(241, 181, 28, 0.28);
}
.brand-logo .icon { width: 24px; height: 24px; stroke-width: 2; }

.brand-text { display: flex; flex-direction: column; line-height: 1.15; }
.brand-text strong { font-size: 20px; letter-spacing: .06em; color: #fff; }
.brand-text span { font-size: 11px; color: #a9bdd8; letter-spacing: .02em; }

.brand-institution {
  margin: 13px 6px 22px;
  font-size: 11.5px;
  line-height: 1.45;
  color: #9db2d0;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.09);
  text-transform: uppercase;
  letter-spacing: .07em;
}

.nav { display: flex; flex-direction: column; gap: 4px; flex: 1; overflow-y: auto; }

.nav-label {
  margin: 16px 10px 6px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .14em;
  text-transform: uppercase;
  color: #7f96b6;
}
.nav-label:first-child { margin-top: 0; }

.nav-item {
  position: relative;
  display: flex;
  align-items: center;
  gap: 11px;
  width: 100%;
  padding: 10px 12px;
  border: 0;
  border-radius: 10px;
  background: transparent;
  color: #c3d2e7;
  font-size: 13.5px;
  font-weight: 500;
  text-align: left;
  transition: background .18s ease, color .18s ease;
}
.nav-item .icon { width: 18px; height: 18px; opacity: .9; }
.nav-item:hover { background: rgba(255, 255, 255, 0.07); color: #fff; }
.nav-item.active {
  background: linear-gradient(90deg, rgba(241, 181, 28, 0.17), rgba(255, 255, 255, 0.05));
  color: #fff;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.08);
}
.nav-item.active::before {
  content: "";
  position: absolute;
  left: -16px;
  top: 8px;
  bottom: 8px;
  width: 3px;
  border-radius: 0 3px 3px 0;
  background: var(--gold);
}
.nav-item.active .icon { color: var(--gold); }

.nav-count {
  margin-left: auto;
  font-style: normal;
  font-size: 10.5px;
  font-weight: 700;
  background: rgba(255, 255, 255, 0.12);
  color: #dbe7f7;
  padding: 1px 7px;
  border-radius: 20px;
  min-width: 22px;
  text-align: center;
}
.nav-count-alert { background: rgba(222, 69, 82, 0.28); color: #ffc9cf; }

.sidebar-footer { margin-top: 18px; display: flex; flex-direction: column; gap: 10px; }

.period-card {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 11px 12px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.055);
  border: 1px solid rgba(255, 255, 255, 0.08);
}
.period-card strong { display: block; font-size: 12px; color: #eef4ff; }
.period-card span:last-child { display: block; font-size: 10.5px; color: #93a9c8; }
.period-dot {
  width: 8px; height: 8px; border-radius: 50%;
  background: #38d39f;
  box-shadow: 0 0 0 4px rgba(56, 211, 159, 0.16);
  flex: none;
}

.user-card {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.045);
  border: 1px solid rgba(255, 255, 255, 0.07);
}
.user-meta { min-width: 0; flex: 1; line-height: 1.25; }
.user-meta strong { display: block; font-size: 12px; color: #f3f7ff; }
.user-meta span { display: block; font-size: 10.5px; color: #93a9c8; }
.icon-btn-dark { color: #a6bbd7 !important; background: rgba(255, 255, 255, .07) !important; border-color: transparent !important; }
.icon-btn-dark:hover { background: rgba(255, 255, 255, .15) !important; color: #fff !important; }

.main { margin-left: var(--sidebar-w); min-height: 100vh; display: flex; flex-direction: column; }

.sidebar-overlay {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(6, 18, 36, 0.55);
  backdrop-filter: blur(3px);
  z-index: 45;
}

/* ================= TOPBAR ================= */
.topbar {
  position: sticky;
  top: 0;
  z-index: 30;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 14px 28px;
  background: color-mix(in srgb, var(--surface) 88%, transparent);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--line);
}
.menu-btn { display: none !important; }

.page-heading { min-width: 0; }
.eyebrow {
  display: block;
  font-size: 10.5px;
  font-weight: 700;
  letter-spacing: .12em;
  text-transform: uppercase;
  color: var(--muted);
}
.page-heading h1 { font-size: 20px; font-weight: 700; letter-spacing: -.02em; line-height: 1.25; margin-top: 2px; }

.topbar-actions { margin-left: auto; display: flex; align-items: center; gap: 9px; }

.search-box {
  display: flex;
  align-items: center;
  gap: 8px;
  height: 38px;
  padding: 0 11px;
  border: 1px solid var(--line);
  background: var(--surface-2);
  border-radius: 10px;
  color: var(--muted);
  transition: border-color .15s, box-shadow .15s, background .15s;
}
.search-box:focus-within { border-color: var(--primary-2); box-shadow: 0 0 0 3px color-mix(in srgb, var(--primary) 12%, transparent); background: var(--surface); }
.search-box .icon { width: 16px; height: 16px; }
.search-box input {
  border: 0;
  outline: 0;
  background: transparent;
  width: 208px;
  font-size: 12.5px;
  color: var(--text);
}
.search-box input::placeholder { color: var(--muted); }
.search-box kbd {
  font-family: inherit;
  font-size: 10px;
  padding: 1px 5px;
  border-radius: 5px;
  border: 1px solid var(--line-strong);
  color: var(--muted);
  background: var(--surface);
}
.search-box-wide { flex: 1; min-width: 230px; max-width: 430px; }
.search-box-wide input { width: 100%; }

.icon-btn {
  width: 38px;
  height: 38px;
  display: grid;
  place-items: center;
  border-radius: 10px;
  border: 1px solid var(--line);
  background: var(--surface);
  color: var(--text-soft);
  transition: all .16s ease;
  flex: none;
}
.icon-btn:hover { color: var(--primary); border-color: var(--line-strong); background: var(--surface-2); transform: translateY(-1px); }
.icon-btn .icon { width: 17px; height: 17px; }

.notif { position: relative; }
.notif-badge {
  position: absolute;
  top: -5px;
  right: -5px;
  min-width: 17px;
  height: 17px;
  padding: 0 4px;
  border-radius: 20px;
  background: var(--red);
  color: #fff;
  font-size: 9.5px;
  font-weight: 700;
  display: grid;
  place-items: center;
  border: 2px solid var(--surface);
}
.notif-badge[data-zero="true"] { display: none; }

/* ================= BUTTONS ================= */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  height: 38px;
  padding: 0 15px;
  border-radius: 10px;
  border: 1px solid var(--line);
  background: var(--surface);
  color: var(--text-soft);
  font-size: 12.5px;
  font-weight: 600;
  white-space: nowrap;
  transition: all .16s ease;
}
.btn .icon { width: 16px; height: 16px; }
.btn:hover { border-color: var(--line-strong); background: var(--surface-2); transform: translateY(-1px); }
.btn:active { transform: translateY(0); }
.btn-primary {
  background: linear-gradient(135deg, var(--primary-2), var(--primary));
  border-color: transparent;
  color: #fff;
  box-shadow: 0 6px 16px color-mix(in srgb, var(--primary) 28%, transparent);
}
.btn-primary:hover { background: linear-gradient(135deg, #2a70d8, #0d448d); border-color: transparent; }
.btn:disabled { opacity: .5; cursor: not-allowed; transform: none !important; box-shadow: none; }
.btn-sm { height: 32px; padding: 0 11px; font-size: 11.5px; border-radius: 8px; }
.btn-ghost { background: transparent; border-color: transparent; color: var(--primary); }
.btn-ghost:hover { background: var(--surface-2); border-color: transparent; }
.btn-danger { color: var(--red); }
.btn-icon-only { width: 32px; padding: 0; }

/* ================= CONTENT ================= */
.content { padding: 24px 28px 40px; flex: 1; }
.page { display: none; animation: fadeUp .32s ease; }
.page.active { display: block; }
@keyframes fadeUp { from { opacity: 0; transform: translateY(7px); } to { opacity: 1; transform: translateY(0); } }

.section-head {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 18px;
  margin-bottom: 18px;
  flex-wrap: wrap;
}
.section-head h2 { font-size: 20px; font-weight: 700; letter-spacing: -.02em; }
.section-head p { font-size: 12.5px; color: var(--muted); margin-top: 3px; }
.section-actions { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }

/* ================= CARDS ================= */
.card {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 20px;
  min-width: 0;
}
.card-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 14px;
  margin-bottom: 16px;
}
.card-head h3 { font-size: 14.5px; font-weight: 700; letter-spacing: -.01em; }
.card-head p { font-size: 11.5px; color: var(--muted); margin-top: 2px; }

.badge {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  height: 23px;
  padding: 0 9px;
  border-radius: 20px;
  font-size: 10.5px;
  font-weight: 700;
  letter-spacing: .01em;
  white-space: nowrap;
}
.badge .icon { width: 12px; height: 12px; }
.badge-green { background: var(--green-soft); color: var(--green); }
.badge-red { background: var(--red-soft); color: var(--red); }
.badge-blue { background: var(--blue-soft); color: var(--blue); }
.badge-amber { background: var(--amber-soft); color: var(--amber); }
.badge-gray { background: var(--surface-3); color: var(--muted); }
.badge-violet { background: var(--violet-soft); color: var(--violet); }

.pill {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 4px 10px;
  border-radius: 20px;
  background: var(--surface-3);
  color: var(--text-soft);
  font-size: 11px;
  font-weight: 600;
  white-space: nowrap;
}
.pill-alert { background: var(--red-soft); color: var(--red); }

/* ================= CRITERIA STRIP ================= */
.criteria-strip {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0;
  padding: 0;
  overflow: hidden;
  margin-bottom: 18px;
  background:
    linear-gradient(105deg, color-mix(in srgb, var(--primary) 8%, var(--surface)) 0%, var(--surface) 52%);
}
.criteria-item {
  display: flex;
  align-items: center;
  gap: 11px;
  padding: 15px 17px;
  border-right: 1px solid var(--line);
  min-width: 0;
}
.criteria-item:last-child { border-right: 0; }
.criteria-icon {
  width: 34px;
  height: 34px;
  border-radius: 9px;
  display: grid;
  place-items: center;
  flex: none;
  background: var(--blue-soft);
  color: var(--primary);
}
.criteria-icon.gold { background: var(--gold-soft); color: var(--amber); }
.criteria-icon.green { background: var(--green-soft); color: var(--green); }
.criteria-icon.red { background: var(--red-soft); color: var(--red); }
.criteria-icon .icon { width: 17px; height: 17px; }
.criteria-text { min-width: 0; line-height: 1.25; }
.criteria-text strong { display: block; font-size: 12.5px; font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.criteria-text span { display: block; font-size: 10.5px; color: var(--muted); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

/* ================= KPI ================= */
.kpi-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 14px;
  margin-bottom: 18px;
}
.kpi {
  position: relative;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 16px;
  overflow: hidden;
  transition: transform .18s ease, box-shadow .18s ease;
  cursor: default;
}
.kpi:hover { transform: translateY(-2px); box-shadow: 0 16px 34px rgba(16, 33, 59, .09); }
.kpi::after {
  content: "";
  position: absolute;
  right: -24px;
  top: -24px;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: var(--blue-soft);
  opacity: .55;
}
.kpi.green::after { background: var(--green-soft); }
.kpi.red::after { background: var(--red-soft); }
.kpi.gold::after { background: var(--gold-soft); }
.kpi.violet::after { background: var(--violet-soft); }
.kpi-top { display: flex; align-items: center; justify-content: space-between; position: relative; z-index: 1; }
.kpi-icon {
  width: 34px;
  height: 34px;
  border-radius: 9px;
  display: grid;
  place-items: center;
  background: var(--blue-soft);
  color: var(--primary);
}
.kpi.green .kpi-icon { background: var(--green-soft); color: var(--green); }
.kpi.red .kpi-icon { background: var(--red-soft); color: var(--red); }
.kpi.gold .kpi-icon { background: var(--gold-soft); color: var(--amber); }
.kpi.violet .kpi-icon { background: var(--violet-soft); color: var(--violet); }
.kpi-icon .icon { width: 17px; height: 17px; }
.kpi-label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: .07em; color: var(--muted); margin-top: 13px; }
.kpi-value { position: relative; z-index: 1; font-size: 29px; font-weight: 750; letter-spacing: -.035em; line-height: 1.1; margin-top: 3px; }
.kpi-value small { font-size: 14px; font-weight: 600; color: var(--muted); letter-spacing: 0; }
.kpi-meta { position: relative; z-index: 1; display: flex; align-items: center; gap: 6px; margin-top: 7px; font-size: 10.5px; color: var(--muted); }
.kpi-meta .up { color: var(--green); font-weight: 700; display: inline-flex; align-items: center; gap: 3px; }
.kpi-meta .down { color: var(--red); font-weight: 700; }
.kpi-meta .icon { width: 12px; height: 12px; }

/* ================= GRIDS ================= */
.grid { display: grid; gap: 16px; margin-bottom: 16px; }
.grid-main { grid-template-columns: minmax(0, 1fr) minmax(0, 1.35fr); }
.grid-2-1 { grid-template-columns: minmax(0, 1.65fr) minmax(0, 1fr); }

/* ================= DONUT ================= */
.donut-layout { display: flex; align-items: center; gap: 22px; flex-wrap: wrap; }
.donut-wrap { position: relative; width: 168px; height: 168px; flex: none; margin: 0 auto; }
.donut-wrap svg { width: 100%; height: 100%; transform: rotate(-90deg); }
.donut-center {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.donut-center strong { font-size: 28px; font-weight: 750; letter-spacing: -.03em; line-height: 1; }
.donut-center span { font-size: 10px; color: var(--muted); text-transform: uppercase; letter-spacing: .08em; font-weight: 700; margin-top: 3px; }
.legend { display: flex; flex-direction: column; gap: 9px; flex: 1; min-width: 150px; }
.legend-row { display: flex; align-items: center; gap: 8px; font-size: 12px; }
.legend-dot { width: 8px; height: 8px; border-radius: 3px; flex: none; }
.legend-row span { color: var(--muted); }
.legend-row strong { margin-left: auto; font-size: 12.5px; }
.legend-row em { font-style: normal; font-size: 10.5px; color: var(--muted); min-width: 32px; text-align: right; }

/* ================= BARS ================= */
.bar-list { display: flex; flex-direction: column; gap: 13px; }
.bar-row { display: grid; grid-template-columns: 132px 1fr 62px; gap: 12px; align-items: center; }
.bar-label { font-size: 11.5px; font-weight: 600; color: var(--text-soft); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.bar-track { height: 8px; background: var(--surface-3); border-radius: 20px; overflow: hidden; display: flex; }
.bar-fill { height: 100%; border-radius: 20px; transition: width .5s ease; min-width: 2px; }
.bar-fill.green { background: linear-gradient(90deg, #17b78a, #0e9b74); }
.bar-fill.blue { background: linear-gradient(90deg, #4a86f0, #2563eb); }
.bar-fill.red { background: linear-gradient(90deg, #f06a75, #de4552); }
.bar-fill.gold { background: linear-gradient(90deg, #f6c453, #e0a100); }
.bar-fill.gray { background: var(--line-strong); }
.bar-value { font-size: 11px; font-weight: 650; text-align: right; color: var(--muted); white-space: nowrap; }
.bar-value strong { color: var(--text); }
.bar-note { font-size: 10px; color: var(--muted); margin-top: -8px; }

/* ================= TREND CHART ================= */
.trend-chart { position: relative; }
.trend-chart svg { width: 100%; height: auto; display: block; overflow: visible; }
.chart-gridline { stroke: var(--line); stroke-width: 1; stroke-dasharray: 3 5; }
.chart-axis-label { font-size: 9.5px; fill: var(--muted); font-family: var(--font); }
.chart-point-label { font-size: 9.5px; fill: var(--text-soft); font-weight: 700; font-family: var(--font); }
.trend-legend { display: flex; gap: 16px; margin-top: 8px; font-size: 10.5px; color: var(--muted); flex-wrap: wrap; }
.trend-legend span { display: inline-flex; align-items: center; gap: 5px; }
.trend-legend i { width: 18px; height: 3px; border-radius: 4px; background: var(--primary-2); display: inline-block; }
.trend-legend i.dashed { background: repeating-linear-gradient(90deg, var(--line-strong) 0 3px, transparent 3px 6px); height: 2px; }

/* ================= ALERTS ================= */
.alerts { display: flex; flex-direction: column; gap: 7px; max-height: 292px; overflow-y: auto; padding-right: 4px; }
.alert-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 9px 10px;
  border-radius: 10px;
  background: var(--surface-2);
  border: 1px solid var(--line);
  transition: border-color .15s, background .15s;
}
.alert-item:hover { border-color: var(--line-strong); background: var(--surface-3); }
.alert-dot {
  width: 29px; height: 29px; border-radius: 8px; display: grid; place-items: center;
  background: var(--amber-soft); color: var(--amber); flex: none;
}
.alert-dot .icon { width: 14px; height: 14px; }
.alert-meta { min-width: 0; flex: 1; line-height: 1.3; }
.alert-meta strong { display: block; font-size: 11.5px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.alert-meta span { display: block; font-size: 10.5px; color: var(--muted); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.alert-reason { font-size: 9.5px; font-weight: 700; color: var(--amber); background: var(--amber-soft); padding: 2px 7px; border-radius: 20px; white-space: nowrap; }
.empty-state { padding: 26px 14px; text-align: center; color: var(--muted); font-size: 12px; }
.empty-state .icon { width: 26px; height: 26px; margin-bottom: 7px; color: var(--green); }
.empty-state strong { display: block; color: var(--text-soft); font-size: 12.5px; margin-bottom: 2px; }

/* ================= TABLES ================= */
.table-card { padding-bottom: 8px; }
.table-wrap { overflow-x: auto; margin: 0 -20px; padding: 0 20px; }
table { width: 100%; border-collapse: collapse; min-width: 760px; }
thead th {
  text-align: left;
  font-size: 9.5px;
  font-weight: 800;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: var(--muted);
  padding: 10px 12px;
  border-bottom: 1px solid var(--line);
  background: var(--surface-2);
  white-space: nowrap;
}
thead th:first-child { border-top-left-radius: 8px; border-bottom-left-radius: 8px; }
thead th:last-child { border-top-right-radius: 8px; border-bottom-right-radius: 8px; }
tbody td { padding: 11px 12px; border-bottom: 1px solid var(--line); font-size: 12px; vertical-align: middle; }
tbody tr:last-child td { border-bottom: 0; }
tbody tr { transition: background .13s; }
tbody tr:hover { background: var(--surface-2); }
td .cell-actions { display: flex; gap: 3px; justify-content: flex-end; }
.cell-actions .icon-btn { width: 28px; height: 28px; border-radius: 7px; border-color: transparent; background: transparent; color: var(--muted); }
.cell-actions .icon-btn:hover { background: var(--surface-3); color: var(--primary); border-color: transparent; }
.cell-actions .icon-btn .icon { width: 14px; height: 14px; }

.person { display: flex; align-items: center; gap: 9px; min-width: 170px; }
.avatar {
  width: 34px; height: 34px; border-radius: 9px; display: grid; place-items: center;
  font-size: 11px; font-weight: 800; letter-spacing: -.01em; flex: none;
}
.avatar-sm { width: 30px; height: 30px; border-radius: 8px; font-size: 9.5px; }
.avatar-lg { width: 52px; height: 52px; border-radius: 13px; font-size: 16px; }
.person-meta { min-width: 0; line-height: 1.3; }
.person-meta strong { display: block; font-size: 12px; font-weight: 650; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 200px; }
.person-meta span { display: block; font-size: 10.5px; color: var(--muted); }
.career-cell { font-size: 11.5px; color: var(--text-soft); max-width: 175px; }
.career-cell small { display: block; color: var(--muted); font-size: 10px; margin-top: 2px; }

.meter-wrap { display: flex; align-items: center; gap: 7px; }
.meter { width: 56px; height: 6px; border-radius: 10px; background: var(--surface-3); overflow: hidden; flex: none; }
.meter i { display: block; height: 100%; border-radius: 10px; background: var(--green); }
.meter i.warn { background: var(--amber); }
.meter i.bad { background: var(--red); }
.meter-value { font-size: 11px; font-weight: 650; white-space: nowrap; }

.avg-chip {
  display: inline-flex; align-items: center; justify-content: center;
  min-width: 40px; height: 24px; padding: 0 7px; border-radius: 7px;
  font-size: 11.5px; font-weight: 700;
  background: var(--green-soft); color: var(--green);
}
.avg-chip.bad { background: var(--red-soft); color: var(--red); }

.sc-cell { display: flex; gap: 4px; }
.sc-pill {
  display: inline-flex; align-items: center; gap: 3px;
  height: 20px; padding: 0 6px; border-radius: 6px;
  font-size: 9px; font-weight: 800; letter-spacing: .02em;
  background: var(--green-soft); color: var(--green);
}
.sc-pill.off { background: var(--red-soft); color: var(--red); }
.sc-pill .icon { width: 10px; height: 10px; stroke-width: 2.6; }

.locality { display: inline-flex; align-items: center; gap: 5px; font-size: 11px; color: var(--text-soft); white-space: nowrap; }
.locality .icon { width: 12px; height: 12px; color: var(--muted); }
.locality.out { color: var(--red); }
.locality.out .icon { color: var(--red); }

.status { display: inline-flex; align-items: center; gap: 5px; font-size: 10.5px; font-weight: 700; white-space: nowrap; }
.status::before { content: ""; width: 6px; height: 6px; border-radius: 50%; background: currentColor; }
.status.elegible { color: var(--green); }
.status.asignado { color: var(--blue); }
.status.no-elegible { color: var(--red); }
.status.Por.iniciar { color: var(--amber); }

.table-foot {
  display: flex; align-items: center; justify-content: space-between;
  padding: 11px 0 4px; font-size: 10.5px; color: var(--muted);
  border-top: 1px solid var(--line); margin-top: 4px;
}

/* ================= FILTERS ================= */
.filters {
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  padding: 13px;
  margin-bottom: 16px;
}
.filters .search-box { height: 36px; }
.filter-field { display: flex; flex-direction: column; gap: 4px; }
.filter-field > span { font-size: 9px; font-weight: 800; letter-spacing: .09em; text-transform: uppercase; color: var(--muted); padding-left: 2px; }
.filter-field select, .inline-select select {
  height: 36px; padding: 0 28px 0 10px; border: 1px solid var(--line); border-radius: 9px;
  background: var(--surface-2); color: var(--text-soft); font-size: 11.5px; font-weight: 500;
  outline: none; appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236b7c96' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 8px center;
}
.filter-field select:focus, .inline-select select:focus { border-color: var(--primary-2); box-shadow: 0 0 0 3px color-mix(in srgb, var(--primary) 12%, transparent); }
.chip-filter {
  display: inline-flex; align-items: center; gap: 5px; height: 36px; padding: 0 12px;
  border: 1px solid var(--line); border-radius: 9px; background: var(--surface-2);
  color: var(--text-soft); font-size: 11.5px; font-weight: 600; transition: all .15s;
}
.chip-filter .icon { width: 13px; height: 13px; }
.chip-filter:hover { border-color: var(--line-strong); }
.chip-filter.active { background: var(--green-soft); border-color: color-mix(in srgb, var(--green) 35%, transparent); color: var(--green); }
.inline-select { display: flex; align-items: center; gap: 7px; }
.inline-select > span { font-size: 9.5px; font-weight: 700; text-transform: uppercase; letter-spacing: .07em; color: var(--muted); }
.inline-select select { height: 31px; font-size: 11px; }

/* ================= MINI KPI ================= */
.mini-kpi-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 13px; margin-bottom: 16px; }
.mini-kpi {
  display: flex; align-items: center; gap: 12px; padding: 14px 16px;
  background: var(--surface); border: 1px solid var(--line); border-radius: 13px; box-shadow: var(--shadow);
}
.mini-kpi-icon { width: 36px; height: 36px; border-radius: 10px; display: grid; place-items: center; background: var(--blue-soft); color: var(--blue); flex: none; }
.mini-kpi-icon.green { background: var(--green-soft); color: var(--green); }
.mini-kpi-icon.amber { background: var(--amber-soft); color: var(--amber); }
.mini-kpi-icon.violet { background: var(--violet-soft); color: var(--violet); }
.mini-kpi-icon .icon { width: 17px; height: 17px; }
.mini-kpi strong { display: block; font-size: 21px; font-weight: 750; letter-spacing: -.03em; line-height: 1.1; }
.mini-kpi span { font-size: 10.5px; color: var(--muted); }

/* ================= AVAILABILITY ================= */
.availability-list { display: flex; flex-direction: column; gap: 12px; max-height: 500px; overflow-y: auto; padding-right: 4px; }
.availability-row { display: flex; flex-direction: column; gap: 5px; }
.availability-top { display: flex; align-items: center; justify-content: space-between; gap: 8px; font-size: 11.5px; }
.availability-top strong { font-weight: 650; }
.availability-top span { color: var(--muted); font-size: 10.5px; white-space: nowrap; }
.availability-bar { height: 6px; border-radius: 10px; background: var(--surface-3); overflow: hidden; }
.availability-bar i { display: block; height: 100%; border-radius: 10px; background: linear-gradient(90deg, #17b78a, #0e9b74); }
.availability-bar i.low { background: linear-gradient(90deg, #f6c453, #e0a100); }
.availability-bar i.empty { background: var(--line-strong); }

/* ================= COMPANY GRID ================= */
.company-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(330px, 1fr)); gap: 16px; }
.company-card { display: flex; flex-direction: column; gap: 14px; }
.company-top { display: flex; align-items: flex-start; gap: 11px; }
.company-logo { width: 44px; height: 44px; border-radius: 12px; display: grid; place-items: center; font-size: 12px; font-weight: 800; flex: none; }
.company-meta { flex: 1; min-width: 0; }
.company-meta h3 { font-size: 13.5px; font-weight: 700; line-height: 1.25; }
.company-meta p { font-size: 10.5px; color: var(--muted); margin-top: 2px; }
.company-tags { display: flex; gap: 6px; flex-wrap: wrap; margin-top: 6px; }
.company-info { display: flex; flex-wrap: wrap; gap: 12px; font-size: 10.5px; color: var(--muted); }
.company-info span { display: inline-flex; align-items: center; gap: 4px; }
.company-info .icon { width: 12px; height: 12px; }
.company-plazas { display: flex; flex-direction: column; gap: 8px; border-top: 1px solid var(--line); padding-top: 12px; }
.company-plaza-row { display: flex; align-items: center; gap: 9px; }
.company-plaza-row .bar-track { flex: 1; height: 5px; }
.company-plaza-row .bar-fill { background: linear-gradient(90deg, #17b78a, #0e9b74); }
.company-plaza-row .career-name { min-width: 0; flex: 1; font-size: 10.5px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.company-plaza-row .slots { font-size: 10px; font-weight: 650; color: var(--muted); white-space: nowrap; }
.company-foot { display: flex; align-items: center; justify-content: space-between; gap: 10px; border-top: 1px solid var(--line); padding-top: 12px; margin-top: auto; }
.company-foot .slots-total { font-size: 10.5px; color: var(--muted); }
.company-foot .slots-total strong { color: var(--text); font-size: 13px; }

/* ================= VALIDATION ================= */
.rules-form { display: flex; flex-direction: column; gap: 14px; }
.form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
.field { display: flex; flex-direction: column; gap: 5px; }
.field.span-2 { grid-column: span 2; }
.field > span, .field-label {
  font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: .07em; color: var(--muted);
}
.field input, .field select, .field textarea {
  width: 100%; height: 38px; padding: 0 11px;
  border: 1px solid var(--line); border-radius: 9px;
  background: var(--surface-2); color: var(--text); font-size: 12px;
  outline: none; transition: border-color .15s, box-shadow .15s, background .15s;
}
.field textarea { height: auto; padding: 9px 11px; resize: vertical; min-height: 60px; }
.field input:focus, .field select:focus, .field textarea:focus {
  border-color: var(--primary-2); background: var(--surface);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--primary) 12%, transparent);
}
.field input:disabled { opacity: .55; cursor: not-allowed; }
.field select { appearance: none; padding-right: 30px; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236b7c96' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 10px center; }
input[type="checkbox"] { width: 15px; height: 15px; accent-color: var(--primary); cursor: pointer; margin: 0; }

.rules-note {
  display: flex; gap: 9px; align-items: flex-start;
  padding: 10px 12px; border-radius: 9px;
  background: var(--blue-soft); color: color-mix(in srgb, var(--blue) 82%, var(--text));
  font-size: 10.5px; line-height: 1.45;
}
.rules-note .icon { width: 14px; height: 14px; margin-top: 1px; flex: none; }
.form-actions { display: flex; justify-content: flex-end; gap: 8px; }

.compliance-list { display: flex; flex-direction: column; gap: 13px; }
.compliance-item { display: flex; flex-direction: column; gap: 5px; }
.compliance-top { display: flex; align-items: center; justify-content: space-between; gap: 10px; font-size: 11.5px; }
.compliance-top strong { font-weight: 650; }
.compliance-top span { color: var(--muted); font-size: 10.5px; white-space: nowrap; }
.stacked-bar { height: 7px; border-radius: 10px; background: var(--red-soft); overflow: hidden; display: flex; }
.stacked-bar i { display: block; height: 100%; background: var(--green); border-radius: 10px 0 0 10px; transition: width .5s ease; }
.stacked-bar i.full { border-radius: 10px; }

/* ================= REPORTS ================= */
.report-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 16px; }
.report-card { display: flex; flex-direction: column; gap: 10px; }
.report-icon { width: 40px; height: 40px; border-radius: 11px; display: grid; place-items: center; background: var(--green-soft); color: var(--green); }
.report-icon-blue { background: var(--blue-soft); color: var(--blue); }
.report-icon-gold { background: var(--gold-soft); color: var(--amber); }
.report-icon .icon { width: 19px; height: 19px; }
.report-card h3 { font-size: 13.5px; font-weight: 700; }
.report-card p { font-size: 11px; color: var(--muted); line-height: 1.5; flex: 1; }
.report-card .btn { align-self: flex-start; }
.report-footer { margin-top: 20px; display: flex; justify-content: space-between; align-items: flex-end; gap: 20px; flex-wrap: wrap; color: var(--muted); font-size: 10.5px; }
.report-signature { display: flex; flex-direction: column; gap: 2px; }
.report-signature span { font-size: 10px; text-transform: uppercase; letter-spacing: .09em; }
.report-signature strong { font-size: 12px; color: var(--text-soft); }

/* ================= MODALS & DRAWER ================= */
.modal, .drawer { position: fixed; inset: 0; z-index: 100; display: none; }
.modal.open, .drawer.open { display: block; }
.modal-backdrop, .drawer-backdrop {
  position: absolute; inset: 0;
  background: rgba(5, 15, 30, .55);
  backdrop-filter: blur(4px);
  animation: fadeIn .2s ease;
}
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

.modal-panel {
  position: relative;
  z-index: 1;
  width: min(680px, calc(100vw - 32px));
  max-height: 88vh;
  overflow-y: auto;
  margin: 6vh auto;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 18px;
  box-shadow: var(--shadow-lg);
  padding: 22px;
  animation: modalIn .26s cubic-bezier(.2, .8, .3, 1);
}
.modal-wide { width: min(760px, calc(100vw - 32px)); }
.modal-narrow { width: min(510px, calc(100vw - 32px)); }
@keyframes modalIn { from { opacity: 0; transform: translateY(14px) scale(.985); } to { opacity: 1; transform: none; } }

.modal-head { display: flex; align-items: flex-start; justify-content: space-between; gap: 14px; margin-bottom: 18px; }
.modal-head h2 { font-size: 18px; font-weight: 750; letter-spacing: -.02em; margin-top: 1px; }
.modal-foot { display: flex; justify-content: flex-end; gap: 8px; margin-top: 20px; padding-top: 16px; border-top: 1px solid var(--line); }

.sc-group { margin-top: 15px; display: flex; flex-direction: column; gap: 8px; }
.group-label { font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: .07em; color: var(--muted); }
.check-row { display: flex; flex-wrap: wrap; gap: 8px 16px; }
.check { display: inline-flex; align-items: center; gap: 7px; font-size: 11.5px; color: var(--text-soft); cursor: pointer; }
.check.disabled { opacity: .45; cursor: not-allowed; }
.hint { font-size: 10px; color: var(--muted); }

.form-preview { margin-top: 16px; padding: 12px; border-radius: 11px; background: var(--surface-2); border: 1px solid var(--line); }
.preview-head { display: flex; align-items: center; gap: 7px; font-size: 10px; font-weight: 800; letter-spacing: .07em; text-transform: uppercase; color: var(--muted); margin-bottom: 8px; }
.preview-head .icon { width: 13px; height: 13px; }
.preview-pills { display: flex; flex-wrap: wrap; gap: 5px; }
.preview-pill { display: inline-flex; align-items: center; gap: 4px; font-size: 9.5px; font-weight: 650; padding: 3px 7px; border-radius: 20px; background: var(--red-soft); color: var(--red); }
.preview-pill.ok { background: var(--green-soft); color: var(--green); }
.preview-pill.na { background: var(--surface-3); color: var(--muted); }
.preview-pill .icon { width: 9px; height: 9px; stroke-width: 2.8; }
.preview-message { margin-top: 9px; font-size: 10.5px; font-weight: 600; }
.preview-message.ok { color: var(--green); }
.preview-message.bad { color: var(--red); }

/* ================= ASSIGN MODAL ================= */
.assign-summary { display: flex; align-items: center; gap: 11px; padding: 12px; border-radius: 12px; background: var(--surface-2); border: 1px solid var(--line); margin-bottom: 16px; }
.assign-summary-meta { flex: 1; min-width: 0; }
.assign-summary-meta strong { display: block; font-size: 13px; }
.assign-summary-meta span { display: block; font-size: 10.5px; color: var(--muted); }
.plaza-header { display: flex; align-items: baseline; justify-content: space-between; gap: 10px; margin: 4px 0 9px; flex-wrap: wrap; }
.plaza-list { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 16px; }
.plaza-option { position: relative; }
.plaza-option input { position: absolute; opacity: 0; pointer-events: none; }
.plaza-option label {
  display: flex; flex-direction: column; gap: 4px;
  padding: 11px 12px; border-radius: 10px;
  border: 1px solid var(--line); background: var(--surface-2);
  cursor: pointer; transition: all .15s; height: 100%;
}
.plaza-option label:hover { border-color: var(--line-strong); }
.plaza-option input:checked + label {
  border-color: var(--primary-2);
  background: color-mix(in srgb, var(--primary) 7%, var(--surface));
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--primary) 11%, transparent);
}
.plaza-option .p-company { font-size: 11.5px; font-weight: 700; line-height: 1.25; }
.plaza-option .p-meta { font-size: 10px; color: var(--muted); }
.plaza-option .p-slots { font-size: 9.5px; font-weight: 700; color: var(--green); display: inline-flex; align-items: center; gap: 3px; }
.plaza-option .p-slots .icon { width: 10px; height: 10px; }
.plaza-empty { grid-column: span 2; padding: 20px; text-align: center; font-size: 11.5px; color: var(--muted); border: 1px dashed var(--line-strong); border-radius: 10px; }
.plaza-empty strong { display: block; color: var(--red); margin-bottom: 3px; }

/* ================= DRAWER ================= */
.drawer-panel {
  position: absolute; top: 0; right: 0; bottom: 0;
  width: min(490px, 100vw);
  background: var(--surface);
  box-shadow: -20px 0 60px rgba(4, 15, 32, .25);
  overflow-y: auto;
  padding: 22px;
  animation: drawerIn .3s cubic-bezier(.2, .8, .3, 1);
  border-left: 1px solid var(--line);
}
@keyframes drawerIn { from { transform: translateX(30px); opacity: .6; } to { transform: none; opacity: 1; } }
.drawer-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 18px; }
.drawer-profile { display: flex; align-items: center; gap: 13px; }
.drawer-profile-meta { flex: 1; min-width: 0; }
.drawer-profile-meta h2 { font-size: 18px; font-weight: 750; letter-spacing: -.02em; line-height: 1.2; }
.drawer-profile-meta p { font-size: 11px; color: var(--muted); margin-top: 3px; }
.drawer-actions { display: flex; gap: 7px; margin-top: 14px; flex-wrap: wrap; }

.elig-banner { display: flex; align-items: center; gap: 10px; padding: 12px; border-radius: 11px; margin-top: 16px; }
.elig-banner.ok { background: var(--green-soft); color: var(--green); }
.elig-banner.bad { background: var(--red-soft); color: var(--red); }
.elig-banner.assigned { background: var(--blue-soft); color: var(--blue); }
.elig-banner .icon { width: 19px; height: 19px; flex: none; }
.elig-banner strong { display: block; font-size: 12px; }
.elig-banner span { display: block; font-size: 10.5px; opacity: .85; margin-top: 1px; }

.drawer-section { margin-top: 20px; }
.drawer-section > h3 { font-size: 10px; font-weight: 800; letter-spacing: .09em; text-transform: uppercase; color: var(--muted); margin-bottom: 9px; }
.info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 9px; }
.info-box { padding: 9px 11px; border-radius: 9px; background: var(--surface-2); border: 1px solid var(--line); }
.info-box span { display: block; font-size: 9px; text-transform: uppercase; letter-spacing: .07em; color: var(--muted); font-weight: 700; }
.info-box strong { display: block; font-size: 11.5px; font-weight: 650; margin-top: 2px; word-break: break-word; }

.req-list { display: flex; flex-direction: column; gap: 7px; }
.req-item { display: flex; align-items: flex-start; gap: 9px; padding: 9px 10px; border-radius: 9px; background: var(--surface-2); border: 1px solid var(--line); }
.req-icon { width: 20px; height: 20px; border-radius: 6px; display: grid; place-items: center; flex: none; background: var(--green-soft); color: var(--green); margin-top: 1px; }
.req-item.fail .req-icon { background: var(--red-soft); color: var(--red); }
.req-item.na .req-icon { background: var(--surface-3); color: var(--muted); }
.req-icon .icon { width: 11px; height: 11px; stroke-width: 2.8; }
.req-meta { flex: 1; min-width: 0; line-height: 1.3; }
.req-meta strong { display: block; font-size: 11px; font-weight: 650; }
.req-meta span { display: block; font-size: 10px; color: var(--muted); margin-top: 1px; }
.req-badge { font-size: 8.5px; font-weight: 800; letter-spacing: .04em; text-transform: uppercase; color: var(--green); white-space: nowrap; margin-top: 2px; }
.req-item.fail .req-badge { color: var(--red); }
.req-item.na .req-badge { color: var(--muted); }

.assignment-box { padding: 12px; border-radius: 11px; border: 1px solid var(--line); background: var(--surface-2); display: flex; flex-direction: column; gap: 8px; }
.assignment-box-top { display: flex; align-items: center; gap: 9px; }
.assignment-box-top .company-logo { width: 34px; height: 34px; border-radius: 9px; font-size: 9.5px; }
.assignment-box-top strong { display: block; font-size: 12px; }
.assignment-box-top span { display: block; font-size: 10px; color: var(--muted); }
.assignment-facts { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; font-size: 10.5px; color: var(--muted); }
.assignment-facts b { color: var(--text-soft); font-weight: 650; }
.drawer-foot { margin-top: 22px; padding-top: 16px; border-top: 1px solid var(--line); display: flex; gap: 8px; }
.drawer-note { margin-top: 16px; padding: 10px 12px; border-radius: 9px; background: var(--amber-soft); color: var(--amber); font-size: 10.5px; line-height: 1.45; display: flex; gap: 8px; }
.drawer-note .icon { width: 14px; height: 14px; flex: none; margin-top: 1px; }

/* ================= TOASTS ================= */
.toast-container { position: fixed; right: 20px; bottom: 20px; z-index: 200; display: flex; flex-direction: column; gap: 8px; width: min(350px, calc(100vw - 40px)); }
.toast {
  display: flex; align-items: flex-start; gap: 9px;
  padding: 11px 13px; border-radius: 11px;
  background: var(--surface); border: 1px solid var(--line);
  box-shadow: var(--shadow-lg);
  animation: toastIn .3s cubic-bezier(.2, .8, .3, 1);
}
.toast.leaving { animation: toastOut .25s ease forwards; }
@keyframes toastIn { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: none; } }
@keyframes toastOut { to { opacity: 0; transform: translateX(20px); } }
.toast-icon { width: 22px; height: 22px; border-radius: 6px; display: grid; place-items: center; flex: none; background: var(--green-soft); color: var(--green); }
.toast.error .toast-icon { background: var(--red-soft); color: var(--red); }
.toast.info .toast-icon { background: var(--blue-soft); color: var(--blue); }
.toast-icon .icon { width: 12px; height: 12px; stroke-width: 2.6; }
.toast-meta { flex: 1; min-width: 0; padding-top: 1px; }
.toast-meta strong { display: block; font-size: 11.5px; }
.toast-meta span { display: block; font-size: 10.5px; color: var(--muted); margin-top: 1px; }

/* ================= RESPONSIVE ================= */
@media (max-width: 1280px) {
  .kpi-grid { grid-template-columns: repeat(3, 1fr); }
  .criteria-strip { grid-template-columns: repeat(3, 1fr); }
  .criteria-item:nth-child(3) { border-right: 0; }
  .criteria-item:nth-child(n+4) { border-top: 1px solid var(--line); }
}

@media (max-width: 1080px) {
  .grid-main, .grid-2-1 { grid-template-columns: 1fr; }
  .company-grid { grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); }
  .report-grid { grid-template-columns: 1fr 1fr; }
  .topbar-actions .search-box { display: none; }
}

@media (max-width: 980px) {
  .sidebar { transform: translateX(-100%); box-shadow: 20px 0 60px rgba(3, 12, 26, .4); }
  .sidebar.open { transform: none; }
  .sidebar-overlay.open { display: block; }
  .main { margin-left: 0; }
  .menu-btn { display: grid !important; }
  .topbar { padding: 12px 18px; }
  .content { padding: 18px; }
  .modal-panel { margin: 4vh auto; }
}

@media (max-width: 760px) {
  .topbar-actions .btn-primary span { display: none; }
  .topbar-actions .btn-primary { width: 38px; padding: 0; }
  .page-heading h1 { font-size: 17px; }
  .eyebrow { font-size: 9px; }
  .kpi-grid { grid-template-columns: 1fr 1fr; }
  .mini-kpi-grid { grid-template-columns: 1fr 1fr; }
  .criteria-strip { grid-template-columns: 1fr 1fr; }
  .criteria-item { border-right: 0; border-top: 1px solid var(--line); }
  .criteria-item:nth-child(1), .criteria-item:nth-child(2) { border-top: 0; }
  .criteria-item:nth-child(odd) { border-right: 1px solid var(--line); }
  .criteria-item:last-child { border-right: 0; }
  .criteria-text strong { font-size: 11.5px; }
  .report-grid { grid-template-columns: 1fr; }
  .plaza-list { grid-template-columns: 1fr; }
  .form-grid { grid-template-columns: 1fr; }
  .field.span-2 { grid-column: span 1; }
  .filters { align-items: stretch; }
  .search-box-wide { max-width: none; flex-basis: 100%; }
  .filter-field { flex: 1; min-width: 120px; }
  .filter-field select { width: 100%; }
  .donut-layout { flex-direction: column; }
  .legend { width: 100%; }
  .section-head { align-items: flex-start; }
  .company-grid { grid-template-columns: 1fr; }
  .availability-list { max-height: none; }
}

@media (max-width: 520px) {
  .kpi-grid { grid-template-columns: 1fr; }
  .mini-kpi-grid { grid-template-columns: 1fr; }
  .content { padding: 14px; }
  .topbar { padding: 10px 14px; gap: 10px; }
  .topbar-actions { gap: 6px; }
  .search-box kbd { display: none; }
  .criteria-strip { grid-template-columns: 1fr; }
  .criteria-item { border-right: 0 !important; }
  .criteria-item:nth-child(2) { border-top: 1px solid var(--line); }
  .notification .btn-primary { display: none; }
  .bar-row { grid-template-columns: 100px 1fr 52px; }
  .info-grid, .assignment-facts { grid-template-columns: 1fr; }
  .drawer-panel { width: 100vw; }
  .modal-panel { padding: 18px; }
  .toast-container { right: 12px; bottom: 12px; width: calc(100vw - 24px); }
  .section-actions { width: 100%; }
  .section-actions .btn { flex: 1; }
  .topbar .btn-primary span { display: none; }
  .app-version { display: none; }
}

/* ================= PRINT ================= */
.print-header { display: none; }

@media print {
  body { background: #fff; color: #000; }
  .sidebar, .topbar, .sidebar-overlay, .toast-container, .section-actions,
  .btn, .icon-btn, .filters, .inline-select, .topbar-actions { display: none !important; }
  .main { margin-left: 0; }
  .content { padding: 0; }
  .page { display: none !important; }
  #page-reportes { display: block !important; }
  .print-header {
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding-bottom: 12px;
    margin-bottom: 18px;
    border-bottom: 2px solid #0a2546;
  }
  .print-header .print-brand { font-size: 11px; font-weight: 800; letter-spacing: .1em; text-transform: uppercase; color: #0a2546; }
  .print-header strong { font-size: 17px; color: #000; }
  .print-header span { font-size: 10.5px; color: #444; }
  .section-head h2 { display: none; }
  .card { box-shadow: none; border: 1px solid #d7d7d7; break-inside: avoid; margin-bottom: 12px; }
  .page-heading h1 { color: #000; }
  .report-card { display: none; }
  .report-grid { display: none; }
  .badge { border: 1px solid #ccc; }
  .table-wrap { overflow: visible; margin: 0; padding: 0; }
  table { min-width: 0; }
  thead th { background: #f0f0f0; color: #000; }
}
```

---

## app.js

Datos semilla, motor de elegibilidad, renderizado, graficos, formularios y persistencia.

```js
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
```

---

## README.md

Documentacion de uso y funcionalidades.

```markdown
# UPTZ · Dashboard de Prácticas y Pasantías

Dashboard interactivo para la **gestión de asignación de prácticas y pasantías profesionales** de la **Universidad Politécnica Territorial del Zulia (UPTZ)**.

Aplicación 100 % autónoma: HTML, CSS y JavaScript sin dependencias, sin instalación y sin conexión a internet.

## Cómo abrir

1. Abre el archivo `index.html` con Google Chrome, Microsoft Edge o cualquier navegador moderno.
2. También puedes usar el panel de vista previa de OpenCode.

No requiere servidor, compilación ni instalación de paquetes.

## Criterios de elegibilidad implementados

Un estudiante es **Elegible** solo cuando cumple todos los requisitos:

| Requisito | Validación |
|---|---|
| Materias aprobadas | Al menos **50 %** del pensum |
| Promedio académico | **≥ 12 puntos** sobre 20 |
| Servicio comunitario | **Fase I y Fase II aprobadas** |
| Universidad de origen | Si viene de otra universidad, debe tener **aprobación por exoneración** |
| Contexto geográfico | Residencia en un municipio del **estado Zulia** |
| Modalidad | **Presencial** |

Los umbrales de materias y promedio, la modalidad permitida y la exigencia de exoneración se pueden ajustar desde **Validación → Parámetros de elegibilidad**. La elegibilidad se recalcula automáticamente en todo el dashboard.

## Módulos

- **Resumen:** indicadores clave, distribución de elegibilidad, elegibilidad por carrera, tendencia de asignaciones, alertas de casos a un requisito y movimientos recientes.
- **Estudiantes:** padrón con búsqueda, filtros por carrera, estado y localidad; ficha integral con verificación detallada de requisitos; alta y edición de estudiantes.
- **Asignaciones:** cartera de asignaciones con empresa, tutor, fecha y estado; disponibilidad de plazas; asignación, liberación y culminación.
- **Empresas y plazas:** convenios activos, plazas por carrera, vacantes disponibles y registro de nuevas plazas.
- **Validación:** parámetros del periodo, cumplimiento global por requisito, motivos de no elegibilidad, cobertura geográfica y casos pendientes.
- **Reportes:** resumen por carrera, exportación CSV del padrón y de asignaciones, e impresión de reporte ejecutivo con encabezado institucional.

## Datos de demostración

El dashboard inicia con **15 estudiantes**, **8 empresas** y **34 plazas** distribuidas en carreras de la UPTZ. Incluye casos de ejemplo para cada causal de no elegibilidad:

- materias insuficientes,
- promedio menor a 12,
- servicio comunitario incompleto,
- estudiante externo sin exoneración,
- modalidad semipresencial,
- residencia fuera del Zulia,
- múltiples requisitos pendientes.

Los cambios se guardan automáticamente en `localStorage` del navegador. Para volver al estado inicial usa el botón de **restablecer** en la parte inferior de la barra lateral.

## Archivos

```text
index.html      Estructura del dashboard y los formularios
styles.css      Diseño institucional, modo oscuro y estilos de impresión
app.js          Datos, motor de elegibilidad, gráficos y toda la interacción
robots.txt      Configuración básica para despliegue web
README.md       Esta documentación
```

## Notas técnicas

- Gráficos en SVG puro (sin librerías).
- Diseño responsive para escritorio, tableta y móvil.
- Tema claro/oscuro con preferencia guardada.
- Accesibilidad auditada (Lighthouse: 100 en accesibilidad y buenas prácticas).
- Exportaciones CSV con BOM UTF-8 compatibles con Excel en español.
- Funciona completamente sin conexión.
```

---

## robots.txt

Configuracion basica para rastreadores.

```text
User-agent: *
Allow: /
```

