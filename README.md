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
