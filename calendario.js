/*
  Calendario académico institucional (datos estructurados).
  Fuente: Decreto Universitario DU-CPO-2025-04766 — "Calendario Académico 2026",
  Universidad de Los Lagos (15/12/2025).

  Solo se incluyen los eventos relevantes para la planificación docente de 17 semanas.
  El resto del calendario (matrícula, becas, PAES, resoluciones, movilidad, etc.) se omite
  a propósito para no contaminar el prompt.

  ACTUALIZACIÓN ANUAL:
  ejecutar el prompt de "prompt-extraccion-calendario.md" con el PDF del calendario del año
  y reemplazar el objeto window.CALENDARIO_ACADEMICO con el resultado.

  Tipos de evento (campo "tipo"):
    sin_docencia  : semana de receso; sin clases ni evaluaciones. NO consume semana lectiva.
    hito_notas    : plazo institucional de notas/calificaciones dentro del período lectivo.
    cierre_actas  : cierre de actas de evaluación (suele ser posterior al término lectivo).
    reforzamiento : período especial de reforzamiento y evaluación (posterior al lectivo).

  Reglas:
  - Fechas en formato ISO YYYY-MM-DD.
  - Evento de un solo día: se omite "fin".
  - "posteriorALectivo": true  -> el hito cae después del término lectivo (fuera de las 17 semanas).
  - inicioLectivo debe ser el LUNES de la Semana 1 (base para calcular el número de semana).
*/
window.CALENDARIO_ACADEMICO = {
  anio: 2026,
  fuente: "DU-CPO-2025-04766",
  semestres: {
    // Semestres de carrera impares (1°, 3°, 5°, 7°, 9°) se dictan en este semestre académico.
    s1: {
      etiqueta: "Primer Semestre 2026",
      inicioLectivo: "2026-03-16",
      finLectivo: "2026-07-17",
      eventos: [
        { nombre: "Límite para construir la estructura de notas por resultado de aprendizaje",
          tipo: "hito_notas", inicio: "2026-04-06" },
        { nombre: "Revisión de ingreso de calificaciones por RA y de asistencia (detección de riesgo)",
          tipo: "hito_notas", inicio: "2026-05-11", fin: "2026-05-15" },
        { nombre: "Semana Vida Universitaria",
          tipo: "sin_docencia", inicio: "2026-05-18", fin: "2026-05-22" },
        { nombre: "Cierre de asignaturas y actas de evaluación 1° semestre",
          tipo: "cierre_actas", inicio: "2026-07-27", posteriorALectivo: true },
        { nombre: "Período especial de reforzamiento y evaluación",
          tipo: "reforzamiento", inicio: "2026-07-20", fin: "2026-08-14", posteriorALectivo: true },
      ],
    },
    // Semestres de carrera pares (2°, 4°, 6°, 8°, 10°) se dictan en este semestre académico.
    s2: {
      etiqueta: "Segundo Semestre 2026",
      inicioLectivo: "2026-08-17",
      finLectivo: "2026-12-24",
      eventos: [
        { nombre: "Límite para construir la estructura de notas por resultado de aprendizaje",
          tipo: "hito_notas", inicio: "2026-09-04" },
        { nombre: "Receso de Fiestas Patrias",
          tipo: "sin_docencia", inicio: "2026-09-14", fin: "2026-09-18" },
        { nombre: "Revisión de ingreso de calificaciones por RA y de asistencia (detección de riesgo)",
          tipo: "hito_notas", inicio: "2026-10-12", fin: "2026-10-16" },
        { nombre: "Semana Vida Universitaria",
          tipo: "sin_docencia", inicio: "2026-10-26", fin: "2026-10-30" },
        { nombre: "Cierre de asignaturas y actas de evaluación 2° semestre",
          tipo: "cierre_actas", inicio: "2027-01-15", posteriorALectivo: true },
        { nombre: "Período especial de reforzamiento y evaluación",
          tipo: "reforzamiento", inicio: "2027-01-04", fin: "2027-01-22", posteriorALectivo: true },
      ],
    },
  },
};
